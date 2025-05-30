const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const glob = promisify(require('glob').glob);  // 使用较旧的 glob 接口
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const rename = promisify(fs.rename);

// 正则表达式匹配包含中文字符的文件名
const chineseCharsRegex = /[\u4e00-\u9fa5]/;
// 存储映射关系
const fileNameMap = new Map();

// 重命名策略函数 - 将中文文件名转为英文
function getNewName(oldName) {
  // 提取日期部分 (如果有)
  const dateMatch = oldName.match(/(\d{4}-\d{2}-\d{2})[\s_]?(\d{2}[:.]\d{2}[:.]\d{2})?/);
  
  let baseName = path.basename(oldName, path.extname(oldName));
  const extension = path.extname(oldName);
  
  // 如果文件名包含"截屏"，替换为"screenshot"
  if (baseName.includes('截屏')) {
    baseName = baseName.replace('截屏', 'screenshot');
  }
  
  // 生成新文件名 - 使用日期（如有）或简单替换所有中文为描述性英文
  let newBaseName;
  if (dateMatch) {
    const date = dateMatch[1].replace(/-/g, '');
    const time = dateMatch[2] ? dateMatch[2].replace(/[:\.]/g, '') : '';
    newBaseName = `screenshot_${date}${time ? '_' + time : ''}`;
  } else if (chineseCharsRegex.test(baseName)) {
    // 如果无法提取日期但包含中文，使用时间戳
    newBaseName = `renamed_media_${Date.now()}`;
  } else {
    // 如果没有中文，保持原样
    return oldName;
  }
  
  // 返回新文件名（包含扩展名）
  return newBaseName + extension;
}

// 扫描指定目录下的所有媒体文件
async function scanMediaFiles(dir) {
  try {
    // 由于glob模式可能存在问题，我们分别搜索不同的扩展名
    const extensions = ['png', 'jpg', 'jpeg', 'gif', 'mp4', 'webm', 'mov'];
    let mediaFiles = [];
    
    for (const ext of extensions) {
      const files = await glob(`${dir}/**/*.${ext}`);
      mediaFiles = [...mediaFiles, ...files];
      console.log(`找到 ${files.length} 个 .${ext} 文件`);
    }
    
    console.log(`总共找到 ${mediaFiles.length} 个媒体文件`);
    
    // 筛选包含中文字符的文件名
    const chineseNameFiles = mediaFiles.filter(file => 
      chineseCharsRegex.test(path.basename(file))
    );
    
    console.log(`找到 ${chineseNameFiles.length} 个包含中文的媒体文件名`);
    
    // 打印一些示例
    if (chineseNameFiles.length > 0) {
      console.log("示例中文文件名：");
      chineseNameFiles.slice(0, 5).forEach(file => {
        console.log(`- ${path.basename(file)}`);
      });
    }
    
    return chineseNameFiles;
  } catch (err) {
    console.error(`扫描媒体文件时出错: ${err.message}`);
    return [];
  }
}

// 扫描所有的 Markdown 文件
async function scanMarkdownFiles(dir) {
  const mdFiles = await glob(`${dir}/**/*.md`);
  console.log(`找到 ${mdFiles.length} 个 Markdown 文件`);
  return mdFiles;
}

// 重命名媒体文件并创建映射关系
async function renameMediaFiles(mediaFiles) {
  for (const oldPath of mediaFiles) {
    const dirName = path.dirname(oldPath);
    const oldFileName = path.basename(oldPath);
    const newFileName = getNewName(oldFileName);
    
    // 如果新旧文件名相同，跳过
    if (newFileName === oldFileName) continue;
    
    const newPath = path.join(dirName, newFileName);
    
    try {
      await rename(oldPath, newPath);
      console.log(`重命名: ${oldFileName} -> ${newFileName}`);
      
      // 存储映射关系，用于更新引用
      fileNameMap.set(oldFileName, newFileName);
    } catch (err) {
      console.error(`重命名失败 ${oldPath}: ${err.message}`);
    }
  }
}

// 更新 Markdown 文件中的引用
async function updateReferences(mdFiles) {
  let updatedFiles = 0;
  
  for (const mdFile of mdFiles) {
    let content;
    try {
      content = await readFile(mdFile, 'utf8');
      let originalContent = content;
      
      // 使用映射关系更新所有引用
      for (const [oldName, newName] of fileNameMap.entries()) {
        // 使用 URL 编码来处理特殊字符
        const encodedOldName = encodeURIComponent(oldName).replace(/%20/g, '%20');
        const encodedNewName = encodeURIComponent(newName);
        
        // 替换各种可能的引用格式
        const patterns = [
          oldName,
          encodedOldName,
          // 处理其他可能的引用格式...
        ];
        
        for (const pattern of patterns) {
          content = content.replace(
            new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
            newName
          );
        }
      }
      
      // 只有当内容有变化时才写入文件
      if (content !== originalContent) {
        await writeFile(mdFile, content, 'utf8');
        console.log(`更新了引用: ${mdFile}`);
        updatedFiles++;
      }
    } catch (err) {
      console.error(`更新引用失败 ${mdFile}: ${err.message}`);
    }
  }
  
  console.log(`共更新了 ${updatedFiles} 个 Markdown 文件的引用`);
}

// 主函数
async function main() {
  const baseDir = process.argv[2] || '/Users/ningwang/repos/momen_doc';
  
  try {
    // 1. 扫描所有媒体文件
    const mediaFiles = await scanMediaFiles(baseDir);
    
    // 2. 重命名媒体文件并创建映射关系
    await renameMediaFiles(mediaFiles);
    
    // 3. 扫描所有 Markdown 文件
    const mdFiles = await scanMarkdownFiles(baseDir);
    
    // 4. 更新 Markdown 文件中的引用
    await updateReferences(mdFiles);
    
    console.log('任务完成！');
    console.log(`重命名了 ${fileNameMap.size} 个文件`);
    
    // 5. 输出映射关系到文件，以便参考
    const mapContent = Array.from(fileNameMap.entries())
      .map(([old, new_]) => `${old} -> ${new_}`)
      .join('\n');
    
    await writeFile(path.join(baseDir, 'media_rename_map.txt'), mapContent, 'utf8');
    console.log('映射关系已保存到 media_rename_map.txt');
    
  } catch (err) {
    console.error(`执行过程中发生错误: ${err.message}`);
    process.exit(1);
  }
}

main();
