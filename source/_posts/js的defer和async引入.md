---
title: JS的defer和async引入
description: 有效帮助优化页面加载性能，同时不阻塞页面的渲染
categories:
  - JavaScript
tags:
  - 前端
  - JavaScript
swiper_index: 4
abbrlink: d283cad1
date: 2024-03-05 10:00:00
updated: 2024-03-05 10:00:00
---

# 前言

`defer`和`async`是用于异步加载和执行`JavaScript`文件的属性，它们可以帮助优化页面加载性能，同时不阻塞页面的渲染。下面是它们的具体介绍：

## defer：

* **作用**：`defer`属性用于异步加载脚本文件，表示该脚本文件将在文档解析完成后，`DOMContentLoaded`事件触发前执行。
* **执行时机**：多个`defer`脚本按照出现的顺序依次执行，并且会在文档解析完成后（即`HTML`被完全解析，但未触发`DOMContentLoaded`事件之前）执行。

* **兼容性**：支持所有现代浏览器。

```javascript
<script src="index.js" defer></script>
```

## async：

* **作用**：`async`属性也用于异步加载脚本文件，表示该脚本文件将在加载完成后立即执行，不会阻止`HTML`解析。

* **执行时机**：多个`async`脚本之间执行顺序不确定，可能并发加载，先下载完先执行。

* **兼容性**：支持所有现代浏览器。

```javascript
<script src="index.js" async></script>
```

{% note warning flat %}在使用`defer`和`async`时，需要注意以下几点{% endnote %}

1. `defer`和`async`属性只对外部脚本文件有效，对内联脚本无效。

2. 当页面中存在多个`defer`脚本时，它们的执行顺序与它们在页面中的顺序一致。

3. `async`脚本的执行顺序不确定，因此如果多个`async`脚本之间有依赖关系，可能会导致问题，需要谨慎使用。

4. 通过合理使用`defer`和`async`属性，可以提高页面的加载性能，保证页面的流畅性和响应性。


<hr/>

# 注意点和部分解释
{% note info flat %}`defer`和`async`属性只对外部脚本文件有效，对内联脚本无效。{% endnote %}
* 外部脚本文件：外部脚本文件是指通过src属性引入的JavaScript文件，比如
```js
<script src="index.js"></script>
```
* 内联脚本：内联脚本是直接在HTML文档中嵌入的JavaScript代码，比如
```js
<script>console.log('Hello, World!');</script>
```

## 因此，所述的意思是：

`"defer"` 和 `async` 属性只对通过`<script>`标签引入的外部`JavaScript`文件有效，而对内联脚本无效。

对内联脚本，即在`<script>`标签中直接编写`JavaScript`代码的情况，不可以使用`defer` 和 `async`属性来控制脚本的加载和执行行为。内联脚本会按照出现的顺序立即执行。

{% note info flat %}`DOMContentLoaded`事件{% endnote %}
1. DOMContentLoaded 事件是一个在页面中所有的**DOM**内容都已经加载完成，并且文档被解析之后触发的事件。这个事件通常用于在页面**DOM**结构加载完成后执行一些初始化操作或绑定事件处理程序。

2. 当一个HTML页面被加载时，浏览器会逐步解析HTML文档，构建DOM树，并加载和执行外部脚本、样式表等资源。在这个过程中，当浏览器完成解析文档的大部分内容（HTML、CSS、DOM）时，会触发DOMContentLoaded事件。

3. 使用DOMContentLoaded事件有以下几个特点：
* DOMContentLoaded事件不等待样式表、图像和其他资源的加载完成，**只需等待HTML文档解析完成即可触发**。

* DOMContentLoaded事件的触发时机早于load事件，当页面DOM结构加载完成但可能包含的外部资源（如图片）尚未加载完成时就会触发。

* 在JavaScript代码中监听DOMContentLoaded事件可以确保在DOM结构构建完成后执行初始化操作，而无需等待所有资源加载完成后才执行。

* 通常情况下，建议将页面初始化操作和事件绑定放在DOMContentLoaded事件处理程序中，**以确保在页面完全加载和DOM准备就绪后再执行相应的操作**，提高用户体验和网页性能。

