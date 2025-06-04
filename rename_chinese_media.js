const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// 异步函数包装
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);

// 存储文件重命名映射关系
const fileNameMap = new Map();

/**
 * 为中文文件名生成英文文件名
 */
function generateEnglishFileName(oldName) {
  let newName = oldName;
  const ext = path.extname(oldName);
  const baseName = path.basename(oldName, ext);
  
  // 如果包含"截屏"，替换为"screenshot"并处理日期
  if (baseName.includes('截屏')) {
    // 提取日期和时间
    const dateTimeMatch = baseName.match(/截屏(\d{4}-\d{2}-\d{2})\s+(\d{2}[.]\d{2}[.]\d{2})(?:\s+\((\d+)\))?/);
    
    if (dateTimeMatch) {
      const date = dateTimeMatch[1].replace(/-/g, '');
      const time = dateTimeMatch[2] ? dateTimeMatch[2].replace(/[.]/g, '') : '';
      const suffix = dateTimeMatch[3] ? `_${dateTimeMatch[3]}` : '';
      
      newName = `screenshot_${date}_${time}${suffix}${ext}`;
    } else {
      // 如果无法提取日期，使用基本替换
      newName = `screenshot_${Date.now()}${ext}`;
    }
  } else if (baseName === '下载') {
    newName = `download${ext}`;
  } else if (baseName === '下载 (1)') {
    newName = `download_1${ext}`;
  } else if (/[\u4e00-\u9fa5]/.test(baseName)) {
    // 其他中文文件名用时间戳替换
    newName = `renamed_media_${Date.now()}${ext}`;
  }
  
  return newName;
}

/**
 * 扫描目录中的媒体文件并重命名中文文件名
 */
async function renameMediaFiles(dirPath) {
  try {
    process.stdout.write(`扫描目录: ${dirPath} ... `);
    const files = await readdir(dirPath);
    console.log(`找到 ${files.length} 个文件`);
    
    // 图片和视频文件扩展名
    const mediaExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.mp4', '.webm', '.mov'];
    
    // 过滤出媒体文件
    const mediaFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return mediaExtensions.includes(ext);
    });
    
    console.log(`其中 ${mediaFiles.length} 个媒体文件`);
    
    // 找出包含中文字符的文件名
    const chineseFiles = mediaFiles.filter(file => /[\u4e00-\u9fa5]/.test(file));
    
    if (chineseFiles.length > 0) {
      console.log(`找到 ${chineseFiles.length} 个包含中文字符的媒体文件`);
      console.log(`示例: ${chineseFiles.slice(0, 3).join(', ')} ${chineseFiles.length > 3 ? '等' : ''}`);
    
      // 重命名文件并建立映射关系
      for (const oldName of chineseFiles) {
        const oldPath = path.join(dirPath, oldName);
        const newName = generateEnglishFileName(oldName);
        const newPath = path.join(dirPath, newName);
        
        try {
          // 检查文件是否存在
          const fileExists = await stat(oldPath).catch(() => false);
          if (!fileExists) {
            console.log(`跳过不存在的文件: ${oldName}`);
            continue;
          }
          
          // 检查目标文件名是否已存在
          const targetExists = await stat(newPath).catch(() => false);
          if (targetExists) {
            const timestamp = Date.now();
            const ext = path.extname(newName);
            const baseName = path.basename(newName, ext);
            const uniqueNewName = `${baseName}_${timestamp}${ext}`;
            console.log(`目标文件已存在，使用唯一名称: ${uniqueNewName}`);
            await rename(oldPath, path.join(dirPath, uniqueNewName));
            fileNameMap.set(oldName, uniqueNewName);
          } else {
            await rename(oldPath, newPath);
            console.log(`重命名: ${oldName} -> ${newName}`);
            fileNameMap.set(oldName, newName);
          }
        } catch (err) {
          console.error(`重命名失败 ${oldName}: ${err.message}`);
        }
      }
    }
    
    return fileNameMap;
  } catch (err) {
    console.error(`处理目录时出错 ${dirPath}: ${err.message}`);
    return fileNameMap;
  }
}

/**
 * 递归扫描所有子目录
 */
async function scanAndRenameAllDirs(basePath) {
  try {
    console.log(`开始扫描目录: ${basePath} 及其所有子目录...`);
    
    // 忽略的目录，例如 .git
    const ignoreDirs = ['.git', 'node_modules'];
    
    const processDir = async (dirPath) => {
      try {
        // 处理当前目录中的文件
        await renameMediaFiles(dirPath);
        
        const entries = await readdir(dirPath, { withFileTypes: true });
        
        // 递归处理子目录
        for (const entry of entries) {
          if (entry.isDirectory() && !ignoreDirs.includes(entry.name)) {
            const subDirPath = path.join(dirPath, entry.name);
            await processDir(subDirPath);
          }
        }
      } catch (err) {
        console.error(`无法处理目录 ${dirPath}: ${err.message}`);
      }
    };
    
    await processDir(basePath);
    console.log(`扫描完成，共找到 ${fileNameMap.size} 个需要重命名的文件`);
    return fileNameMap;
  } catch (err) {
    console.error(`递归扫描目录时出错: ${err.message}`);
    return fileNameMap;
  }
}

/**
 * 更新Markdown文件中的引用
 */
async function updateReferences(mdPath, nameMap) {
  try {
    process.stdout.write(`处理Markdown文件: ${path.basename(mdPath)} ... `);
    let content = await readFile(mdPath, 'utf8');
    let originalContent = content;
    let changed = false;
    let replacementCount = 0;
    
    for (const [oldName, newName] of nameMap.entries()) {
      // 需要处理的各种引用格式
      const patterns = [
        // 常规文件路径引用
        oldName,
        // URL编码的文件名（处理空格）
        encodeURIComponent(oldName).replace(/%20/g, '%20'),
        // 不同的URL编码格式
        encodeURIComponent(oldName),
        // 处理中文文件名在Markdown链接中的情况
        `](../../.gitbook/assets/${oldName}`,
        `](../.gitbook/assets/${oldName}`,
        `](./.gitbook/assets/${oldName}`
      ];
      
      for (const pattern of patterns) {
        const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (content.includes(pattern) || new RegExp(escapedPattern).test(content)) {
          const before = content;
          
          if (pattern.startsWith('](')) {
            // 对于Markdown链接，只替换文件名部分
            const replacement = pattern.replace(oldName, newName);
            content = content.replace(new RegExp(escapedPattern, 'g'), replacement);
          } else {
            // 普通替换
            content = content.replace(new RegExp(escapedPattern, 'g'), newName);
          }
          
          if (before !== content) {
            replacementCount += (before.match(new RegExp(escapedPattern, 'g')) || []).length;
            changed = true;
          }
        }
      }
    }
    
    if (changed) {
      await writeFile(mdPath, content, 'utf8');
      console.log(`✓ (${replacementCount} 处引用已更新)`);
      return true;
    } else {
      console.log('✓ (无需更新)');
      return false;
    }
  } catch (err) {
    console.error(`✗ 错误: ${err.message}`);
    return false;
  }
}

/**
 * 递归查找所有Markdown文件并更新引用
 */
async function findAndUpdateAllMarkdownFiles(basePath, nameMap) {
  try {
    console.log(`开始扫描和更新所有Markdown文件...`);
    const updatedFiles = [];
    const ignoreDirs = ['.git', 'node_modules'];
    
    const processDir = async (dirPath) => {
      try {
        const entries = await readdir(dirPath, { withFileTypes: true });
        
        // 处理当前目录中的Markdown文件
        for (const entry of entries) {
          if (entry.isFile() && entry.name.endsWith('.md')) {
            const mdPath = path.join(dirPath, entry.name);
            const updated = await updateReferences(mdPath, nameMap);
            if (updated) {
              updatedFiles.push(mdPath);
            }
          }
        }
        
        // 递归处理子目录
        for (const entry of entries) {
          if (entry.isDirectory() && !ignoreDirs.includes(entry.name)) {
            const subDirPath = path.join(dirPath, entry.name);
            await processDir(subDirPath);
          }
        }
      } catch (err) {
        console.error(`无法处理目录 ${dirPath}: ${err.message}`);
      }
    };
    
    await processDir(basePath);
    console.log(`\nMarkdown文件处理完成，共更新了 ${updatedFiles.length} 个文件`);
    return updatedFiles;
  } catch (err) {
    console.error(`查找和更新Markdown文件时出错: ${err.message}`);
    return [];
  }
}

/**
 * 主函数
 */
async function main() {
  const baseDir = '/Users/ningwang/repos/momen_doc';
  const assetsDir = path.join(baseDir, '.gitbook/assets');
  
  try {
    console.log('====================================================');
    console.log('      中文媒体文件名重命名与引用更新工具');
    console.log('====================================================');
    console.log(`时间: ${new Date().toLocaleString()}`);
    console.log(`工作目录: ${baseDir}`);
    console.log(`媒体资源目录: ${assetsDir}`);
    console.log('----------------------------------------------------');
    
    console.log('\n===== 步骤1：扫描并重命名媒体文件 =====');
    await scanAndRenameAllDirs(assetsDir);
    
    console.log(`\n重命名操作完成，共重命名了 ${fileNameMap.size} 个文件`);
    
    if (fileNameMap.size > 0) {
      console.log('\n===== 步骤2：更新所有Markdown文件中的引用 =====');
      const updatedFiles = await findAndUpdateAllMarkdownFiles(baseDir, fileNameMap);
      
      console.log(`引用更新完成，共更新了 ${updatedFiles.length} 个Markdown文件`);
      
      // 保存映射关系供参考
      const mapContent = Array.from(fileNameMap.entries())
        .map(([old, new_]) => `${old} -> ${new_}`)
        .join('\n');
      
      const mapPath = path.join(baseDir, 'media_rename_map.txt');
      await writeFile(mapPath, mapContent, 'utf8');
      console.log(`映射关系已保存到 ${mapPath}`);
      
      // 打印一些示例映射
      if (fileNameMap.size > 0) {
        console.log('\n示例重命名映射:');
        Array.from(fileNameMap.entries()).slice(0, 5).forEach(([old, new_]) => {
          console.log(`- ${old} -> ${new_}`);
        });
        if (fileNameMap.size > 5) {
          console.log(`... 以及另外 ${fileNameMap.size - 5} 个映射`);
        }
      }
    } else {
      console.log('没有找到需要重命名的中文媒体文件');
    }
    
    console.log('\n====================================================');
    console.log('                  操作全部完成！');
    console.log('====================================================');
    
  } catch (err) {
    console.error(`\n执行过程中发生错误: ${err.message}`);
    console.error('请检查错误并重新运行脚本');
    process.exit(1);
  }
}

// 执行主函数
main();
