---
title: 项目需要用到的Git命令
description: Git
categories:
  - Git
password: qwer
theme: up
abstract: 这里有东西被加密了，需要输入密码查看哦。
message: 本文章里有加密内容，需要输入密码查看哦。
wrong_pass_message: 抱歉，这个密码看着不太对，请再试试。
wrong_hash_message: 抱歉，这个文章不能被纠正，不过您还是能看看解密后的内容。
abbrlink: 69c3279c
date: 2024-02-26 12:00:00
updated: 2024-03-12 12:00:00
---

#  Git 命令在项目的目录下执行
本文主要介绍在项目目录下执行git命令

* **git启动项目**

```bash
hexo clean && hexo server
```
* **或者**

```bash
hexo cl && hexo s
```
{% note info flat %}`hexo clean` 清除缓存,`hexo server` 启动服务{% endnote %}

#  Git 部署到`github`
```bash
hexo clean && hexo generate && hexo deploy
```
{% note info flat %}`hexo clean` 清除缓存, `hexo generate` 生成静态文件, `hexo deploy` 部署到github{% endnote %}

#  Git部署图床
```bash
git add .; git commit -m "图片更新"; git push
```
{% note info flat %}`git add .` 添加所有文件, `git commit -m "图片更新"` 提交, `git push` 推送{% endnote %}

#  更新哔哩哔哩信息
```bash
hexo bangumi -u
```
