#!/bin/bash

# 查找所有包含中文文件名引用的Markdown文件
echo "查找包含中文文件名引用的文件..."
grep -r --include="*.md" "截屏" /Users/ningwang/repos/momen_doc > /tmp/chinese_refs.txt

# 读取映射文件
echo "读取映射文件..."
MAPPING_FILE="/Users/ningwang/repos/momen_doc/media_rename_map.txt"

# 检查映射文件是否存在
if [ ! -f "$MAPPING_FILE" ]; then
    echo "错误: 映射文件不存在 $MAPPING_FILE"
    exit 1
fi

# 处理每个引用
echo "开始更新引用..."
while IFS= read -r line; do
    # 提取文件路径和引用
    FILE_PATH=$(echo "$line" | cut -d':' -f1)
    
    echo "处理文件: $FILE_PATH"
    
    # 对每个映射条目进行替换
    while IFS= read -r mapping_line; do
        OLD_NAME=$(echo "$mapping_line" | cut -d' ' -f1)
        NEW_NAME=$(echo "$mapping_line" | cut -d' ' -f3)
        
        # 如果是截屏文件
        if [[ "$OLD_NAME" == *"截屏"* ]]; then
            # 替换文件中的引用 (处理URL编码的百分号)
            OLD_ENCODED=$(echo "$OLD_NAME" | sed 's/ /%20/g')
            sed -i '' "s|$OLD_ENCODED|$NEW_NAME|g" "$FILE_PATH"
            
            # 检查是否有成功替换
            if grep -q "$NEW_NAME" "$FILE_PATH"; then
                echo "  已替换: $OLD_NAME -> $NEW_NAME"
            fi
        fi
    done < "$MAPPING_FILE"
done < /tmp/chinese_refs.txt

echo "更新完成!"
