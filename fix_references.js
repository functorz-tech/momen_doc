const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 主函数
function main() {
  try {
    console.log('==== 开始修复中文文件名引用 ====');
    
    // 读取映射文件
    const mappingsPath = '/Users/ningwang/repos/momen_doc/media_rename_map.txt';
    console.log(`读取映射文件: ${mappingsPath}`);
    
    if (!fs.existsSync(mappingsPath)) {
      console.error(`错误: 映射文件不存在: ${mappingsPath}`);
      return;
    }
    
    const mappingContent = fs.readFileSync(mappingsPath, 'utf8');
    const mappings = new Map();
    
    let mappingCount = 0;
    mappingContent.split('\n').forEach(line => {
      const parts = line.split(' -> ');
      if (parts.length === 2) {
        mappings.set(parts[0], parts[1]);
        mappingCount++;
        
        // 打印一些映射示例
        if (mappingCount <= 5) {
          console.log(`映射: "${parts[0]}" -> "${parts[1]}"`);
        }
      }
    });
    
    console.log(`加载了 ${mappings.size} 个映射`);
    
    // 找到所有包含中文文件名的文件
    console.log('\n查找包含中文文件名引用的文件...');
    
    const baseDir = '/Users/ningwang/repos/momen_doc';
    const findCmd = `find ${baseDir} -name "*.md" -type f -print0 | xargs -0 grep -l "截屏" || true`;
    console.log(`执行命令: ${findCmd}`);
    
    const findResult = execSync(findCmd, { encoding: 'utf8' });
    const filePaths = findResult.trim().split('\n').filter(Boolean);
    
    console.log(`找到 ${filePaths.length} 个文件包含中文文件名引用：`);
    filePaths.slice(0, 5).forEach(file => {
      console.log(`- ${file}`);
    });
    
    if (filePaths.length > 5) {
      console.log(`...以及其他 ${filePaths.length - 5} 个文件`);
    }
    
    // 处理每个文件
    console.log('\n开始处理文件...');
    let totalUpdated = 0;
    
    for (const filePath of filePaths) {
      console.log(`\n处理文件: ${path.basename(filePath)}`);
      
      if (!fs.existsSync(filePath)) {
        console.error(`  跳过不存在的文件: ${filePath}`);
        continue;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fileUpdated = false;
      let replacementCount = 0;
      
      // 先查找文件中的中文文件名引用
      const references = [];
      const regex = /\]\([\.\/]*\.gitbook\/assets\/([^)]+)\)/g;
      let match;
      
      while ((match = regex.exec(content)) !== null) {
        if (match[1].includes('截屏')) {
          references.push(match[1]);
        }
      }
      
      console.log(`  找到 ${references.length} 个引用:`);
      references.slice(0, 3).forEach(ref => {
        console.log(`  - ${ref}`);
      });
      
      if (references.length > 3) {
        console.log(`  ...以及其他 ${references.length - 3} 个引用`);
      }
      
      // 对每个映射进行替换
      for (const [oldName, newName] of mappings.entries()) {
        if (oldName.includes('截屏')) {
          // 处理不同格式的引用
          const patterns = [
            oldName,
            oldName.replace(/ /g, '%20')  // URL编码空格
          ];
          
          for (const pattern of patterns) {
            if (content.includes(pattern)) {
              console.log(`  发现需要替换: "${pattern}"`);
              
              const before = content;
              const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              content = content.replace(new RegExp(escapedPattern, 'g'), newName);
              
              const replacements = (before.match(new RegExp(escapedPattern, 'g')) || []).length;
              if (replacements > 0) {
                console.log(`  替换为: "${newName}" (${replacements} 处)`);
                replacementCount += replacements;
                fileUpdated = true;
              }
            }
          }
        }
      }
      
      if (fileUpdated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ 已更新文件: ${path.basename(filePath)} (${replacementCount} 处引用已更新)`);
        totalUpdated++;
      } else {
        console.log(`○ 无需修改文件: ${path.basename(filePath)}`);
      }
    }
    
    console.log(`\n更新完成，共更新了 ${totalUpdated} 个文件中的引用`);
    
  } catch (err) {
    console.error(`执行过程中发生错误: ${err.message}`);
    console.error(err.stack);
  }
}

// 执行主函数
main();
