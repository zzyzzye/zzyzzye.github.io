---
title: 如何使用Vue-cli创建脚手架环境？
description: 本文章将详细介绍Vue-cli(脚手架环境)安装流程
categories:
  - Vue
tags:
  - Vue
abbrlink: 4afe322b
date: 2024-02-26 12:00:00
updated: 2024-02-26 12:00:00
---

## Vue-cli

`vue-cli`是`Vue.js`官方提供的脚手架工具，用于快速搭建`Vue.js`项目的开发环境。通过`vue-cli`可以快速生成一个`Vue.js`
项目的基础结构，并提供了一些工具和配置帮助开发者更高效地开发`Vue.js`应用。

{% note info flat %}
键盘上下是移动 空格是选定 回车是选择
{% endnote %}

以下是使用`vue-cli`创建`Vue.js`项目的基本步骤：
<img src="https://pic-bed-ahl.pages.dev/md_images/vue_cli.webp">

## **1.安装`Vue CLI`（如果未安装）：**

```bash
npm install -g @vue/cli
```

## **2.创建项目：**

```bash
vue create shopping
```

## **3.选择项目版本：**

{% note warning flat %}
第一个是`Vue3`环境，第二个是`Vue2`环境
这里我们选择自定义(`Manually select features`)
{% endnote %}

<img src="https://pic-bed-ahl.pages.dev/md_images/vue脚手架版本.png">

## **4.选择项目特性：**

<img src="https://pic-bed-ahl.pages.dev/md_images/vue项目特性.png">
{% folding cyan, 选择项目特性 %}
(*) Babel：Babel是一个JavaScript编译器，用于将新版本的JavaScript语法转换为当前或较旧版本的语法，以确保在不同浏览器和环境中的兼容性。

(*) Linter / Formatter：代码检查工具和格式化工具，可以帮助你保持代码风格的一致性，并检测潜在的错误或问题。

TypeScript：TypeScript是JavaScript的一个超集，添加了静态类型检查功能，可提高代码的可读性和可维护性。

Progressive Web App (PWA) Support：提供支持渐进式Web应用的功能，包括离线访问、推送通知等。

Router：Vue Router是Vue.js官方的路由管理器，用于实现单页面应用程序的路由功能。

Vuex：Vue.js的状态管理模式和库，用于更好地管理应用的状态。

CSS Pre-processors：支持使用CSS预处理器（如Sass、Less等）编写样式。

Unit Testing：单元测试工具，用于编写和运行单元测试。

E2E Testing：端对端测试工具，用于模拟真实用户行为，测试应用的整体功能。

{% endfolding %}

## **5.选择项目版本，和规则：**

{% note warning flat %}
可以参考我的选择，下面有解释
{% endnote %}

<img src="https://pic-bed-ahl.pages.dev/md_images/vue版本和规则.png">

{% folding cyan, 选择项目版本和规则 %}

1. 需要的项目功能：Babel, Router, Vuex, CSS Pre-processors, Linter
   选择了需要的五个功能：Babel（JavaScript编译器），Router（路由管理器）、Vuex（状态管理库）、CSS预处理器、Linter（代码检查和格式化工具）。

2. 选择要开始项目的Vue.js版本：2.x
   选择了Vue.js的2.x版本作为项目的起始版本。

3. 使用路由的history模式吗？：No
   选择不使用路由的history模式，这需要在部署时进行正确的服务器配置以支持在生产环境中的index回退。

4. CSS预处理器选择：Less
   选择了Less作为CSS预处理器。

5. Linter / Formatter配置选择：Standard
   选择了使用Standard配置作为Linter / Formatter的配置。

6. 选择附加的Lint功能：Lint on save
   选择在保存时进行Lint检查。

7. 希望在哪里放置Babel、ESLint等配置？：In dedicated config files
   选择将Babel、ESLint等配置放置在各自的独立配置文件中。

8. 将这些配置保存为预设供将来项目使用吗？：n
   选择不保存这些配置作为预设，以便将来项目使用。
   {% endfolding %}

## **6. 等待安装完成：**

<img src="https://pic-bed-ahl.pages.dev/md_images/vue安装完成.png">


## **7. 启动项目：**
```bash
npm run serve
```
或者
```bash
yarn serve
```

<img src="https://pic-bed-ahl.pages.dev/md_images/vue.webp">
