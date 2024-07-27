#!/bin/bash

# 生成并部署静态文件
hexo clean && hexo generate && hexo deploy

# 切换到 source 分支
git checkout source

# 添加和提交源文件的更改
git add .
git commit -m "Update blog content"

# 推送源文件到 source 分支
git push origin source

# 切换回 main 分支
git checkout main
