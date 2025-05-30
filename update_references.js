const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// 从映射文件加载映射关系
async function loadMappings() {
  try {
    const mappingContent = await readFile('/Users/ningwang/repos/momen_doc/media_rename_map.txt', 'utf8');
    const mappings = new Map();
    
    mappingContent.split('\n').forEach(line => {
      const [oldName, newName] = line.split(' -> ');
      if (oldName && newName) {
        mappings.set(oldName, newName);
      }
    });
    
    return mappings;
  } catch (err) {
    console.error(`无法加载映射文件: ${err.message}`);
    return new Map();
  }
}

// 更新单个文件中的引用
async function updateReferencesInFile(filePath, mappings) {
  try {
    console.log(`处理文件: ${path.basename(filePath)}`);
    let content = await readFile(filePath, 'utf8');
    let originalContent = content;
    let changed = false;
    let replacementCount = 0;
    
    // 查找文件中包含的截屏引用
    const screenshotRefs = content.match(/]\([.\/]*\.gitbook\/assets\/截屏[^)]+\)/g) || [];
    if (screenshotRefs.length > 0) {
      console.log(`  发现 ${screenshotRefs.length} 个截屏引用:`);
      screenshotRefs.slice(0, 3).forEach(ref => {
        console.log(`  - ${ref}`);
      });
      if (screenshotRefs.length > 3) {
        console.log(`  - ...以及其他 ${screenshotRefs.length - 3} 个`);
      }
    }
    
    for (const [oldName, newName] of mappings.entries()) {
      if (oldName.includes('截屏')) {
        // 处理各种 Markdown 图片引用格式
        const patterns = [
          `](../.gitbook/assets/${oldName})`,
          `](../../.gitbook/assets/${oldName})`,
          `](<../.gitbook/assets/${oldName}>)`,
          `](<../../.gitbook/assets/${oldName}>)`,
          `![](../.gitbook/assets/${oldName})`,
          `![](../../.gitbook/assets/${oldName})`,
          oldName // 直接替换文件名
        ];
        
        const replacements = [
          `](../.gitbook/assets/${newName})`,
          `](../../.gitbook/assets/${newName})`,
          `](<../.gitbook/assets/${newName}>)`,
          `](<../../.gitbook/assets/${newName}>)`,
          `![](../.gitbook/assets/${newName})`,
          `![](../../.gitbook/assets/${newName})`,
          newName
        ];
        
        // 替换所有匹配项
        for (let i = 0; i < patterns.length; i++) {
          const pattern = patterns[i];
          const replacement = replacements[i];
          
          if (content.includes(pattern)) {
            const before = content;
            const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            content = content.replace(new RegExp(escapedPattern, 'g'), replacement);
            
            const occurrences = (before.match(new RegExp(escapedPattern, 'g')) || []).length;
            if (before !== content) {
              console.log(`  替换 "${oldName}" -> "${newName}" (${occurrences} 次)`);
              replacementCount += occurrences;
              changed = true;
            }
          }
        }
      }
    }
    
    if (changed) {
      await writeFile(filePath, content, 'utf8');
      console.log(`✓ 已更新文件: ${path.basename(filePath)} (${replacementCount} 处引用已更新)`);
      return true;
    } else {
      console.log(`✓ 无需更新: ${path.basename(filePath)}`);
      return false;
    }
  } catch (err) {
    console.error(`✗ 处理文件时出错 ${filePath}: ${err.message}`);
    return false;
  }
}

// 主函数
async function main() {
  try {
    console.log('加载映射关系...');
    const mappings = await loadMappings();
    
    console.log(`加载了 ${mappings.size} 个映射关系`);
    
    // 要更新的文件列表
    const filesToUpdate = [
      '/Users/ningwang/repos/momen_doc/template/mobile-auto-repair-ai-scheduler.md',
      '/Users/ningwang/repos/momen_doc/template/ai-knowledge-base.md',
      '/Users/ningwang/repos/momen_doc/deployment/log_service.md',
      '/Users/ningwang/repos/momen_doc/deployment/upgrade-project.md',
      '/Users/ningwang/repos/momen_doc/actions/actionflow/db-trigger.md',
      '/Users/ningwang/repos/momen_doc/actions/ai/ai-data-model.md',
      '/Users/ningwang/repos/momen_doc/actions/ai/ai.md',
      '/Users/ningwang/repos/momen_doc/account-community/my-wallet.md',
      '/Users/ningwang/repos/momen_doc/account-community/code-component.md'
    ];
    
    console.log(`开始更新 ${filesToUpdate.length} 个文件...`);
    
    let updatedFiles = 0;
    
    for (const filePath of filesToUpdate) {
      const updated = await updateReferencesInFile(filePath, mappings);
      if (updated) {
        updatedFiles++;
      }
    }
    
    console.log(`更新完成，共更新了 ${updatedFiles} 个文件`);
    
  } catch (err) {
    console.error(`执行过程中发生错误: ${err.message}`);
  }
}

// 执行主函数
main();
