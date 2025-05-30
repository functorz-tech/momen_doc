const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// 简单测试扫描
async function testScan() {
  console.log("开始测试扫描...");
  
  try {
    // 直接读取目录内容
    const assetsDir = '/Users/ningwang/repos/momen_doc/.gitbook/assets';
    fs.readdir(assetsDir, (err, files) => {
      if (err) {
        console.error(`读取目录失败: ${err.message}`);
        return;
      }
      
      console.log(`在目录中找到 ${files.length} 个文件`);
      
      // 过滤PNG文件
      const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));
      console.log(`找到 ${pngFiles.length} 个 PNG 文件`);
      
      if (pngFiles.length > 0) {
        console.log("\n前5个PNG文件:");
        pngFiles.slice(0, 5).forEach(file => {
          console.log(`- ${file}`);
        });
      }
      
      // 查找包含中文字符的文件名
      const chineseFiles = pngFiles.filter(file => /[\u4e00-\u9fa5]/.test(file));
      console.log(`\n找到 ${chineseFiles.length} 个包含中文字符的文件名`);
      
      if (chineseFiles.length > 0) {
        console.log("示例中文文件:");
        chineseFiles.forEach(file => {
          console.log(`- ${file}`);
        });
        
        // 写入映射文件，供手动处理使用
        const mappingContent = chineseFiles.map(oldName => {
          let newName = oldName;
          // 如果包含"截屏"，替换为"screenshot"
          if (oldName.includes('截屏')) {
            newName = oldName.replace('截屏', 'screenshot');
          } else {
            // 提取日期如果可能
            const dateMatch = oldName.match(/(\d{4}-\d{2}-\d{2})[\s_]?(\d{2}[:.]\d{2}[:.]\d{2})?/);
            if (dateMatch) {
              const date = dateMatch[1].replace(/-/g, '');
              const time = dateMatch[2] ? dateMatch[2].replace(/[:\.]/g, '') : '';
              const ext = path.extname(oldName);
              newName = `screenshot_${date}${time ? '_' + time : ''}${ext}`;
            } else {
              // 否则使用时间戳
              const ext = path.extname(oldName);
              const timestamp = Date.now();
              newName = `renamed_media_${timestamp}${ext}`;
            }
          }
          
          return `${oldName} -> ${newName}`;
        }).join('\n');
        
        fs.writeFile(path.join(assetsDir, 'rename_mapping.txt'), mappingContent, 'utf8', (err) => {
          if (err) {
            console.error(`无法写入映射文件: ${err.message}`);
          } else {
            console.log(`\n映射关系已写入 ${assetsDir}/rename_mapping.txt`);
          }
        });
      }
    });
  } catch (err) {
    console.error(`测试扫描时出错: ${err.message}`);
  }
}

testScan();
