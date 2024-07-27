---
title: nvm 安装配置教程
description: 适用于 Node 版本管理工具
categories:
  - Node
tags:
  - Node
  - JavaScript
abbrlink: 985482ae
date: 2024-04-21 10:00:00
updated: 2024-04-21 12:00:00
---


# 前言
`nvm`的全称是`Node Version Manager`，是一个 `Node` 版本管理工具。使用 `NVM` 可以方便地安装和切换不同版本的 `Node.js`

# 一、nvm 的安装与配置
## 1. 安装

[nvm下载地址](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file)
点击 Dowload Now，即可选择安装方式
<img src="https://pic-bed-ahl.pages.dev/images/nvm_download.webp">
<img src="https://pic-bed-ahl.pages.dev/images/nvm_download_1.webp">
<img src="https://pic-bed-ahl.pages.dev/images/nvm_download_2.webp">

## 2. 验证安装

1. 查看版本
```bash
nvm version
nvm v
```

2. 查看运行在32还是64位，**`arch`全称`architecture`:架构**
```bash
nvm arch
```

3. 显示已经安装的列表，`list` 可简化为 `ls`
```bash
nvm list
```

4. 显示远程可安装的列表
```bash
nvm list available
```

5. 卸载指定版本 `node`
```bash
nvm uninstall <version>
```

6. 使用指定版本 `node`
```bash
nvm use <version>
```


## 3.配置下载镜像
找到`nvm`的安装目录，打开`settings.txt`文件，增加以下配置：
```text
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

<img src="https://pic-bed-ahl.pages.dev/images/nvm_setting.webp">
<img src="https://pic-bed-ahl.pages.dev/images/nvm_setting_1.webp">

{% note warning flat %}
* 提问: 为什么需要配置镜像？
* 回答: 因为国内访问国外的资源，速度会很慢，所以需要配置镜像，让 nvm 下载的资源都从国内镜像下载，这样速度会更快。
{% endnote %}

# 二、nvm安装Node
## 1. 安装node

```bash
nvm list available
nvm install 16
nvm list
nvm use 16
```

<img src="https://pic-bed-ahl.pages.dev/images/nvm_list.webp">

{% note info flat %}只输入`nvm install`，会列出所有可安装的版本，输入`nvm install 16`，会安装最新版的`node`{% endnote %}

<img src="https://pic-bed-ahl.pages.dev/images/nvm_install.webp">

## 2. 配置 node 的 prefix（全局路径）和 cache（缓存路径）

<img src="https://pic-bed-ahl.pages.dev/images/nvm_path.webp">

{% note warning flat %}
* 提问: 每次使用 nvm 安装 node 都需要手动创建这两个文件夹吗？
* 回答: 并不是每次都需要自己手动创建，但是第一次推荐你手动创建，以后当你设置 prefix 和 cache 后，系统会自动创建。
{% endnote %}
{% note warning flat %}
`node_global`:`npm install` 下载的全局插件
`node_cache`:`node` 的缓存
{% endnote %}

### 2.1 设置全局模板（prefix）和缓存文件（cache）的存放路径 
```bash
npm config set cache "D:\nvm\nodejs\node_cache"
```
```bash
npm config set prefix "D:\nvm\nodejs\node_global"
```
```bash
npm config edit
```
```bash
npm config ls
```
