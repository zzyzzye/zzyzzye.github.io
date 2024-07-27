---
title: Js为何会阻碍渲染?
description: 本文总结Js阻碍渲染的原因
categories:
  - JavaScript
tags:
  - 前端
  - JavaScript
swiper_index: 3
abbrlink: 7128c830
date: 2024-03-01 10:00:00
updated: 2024-03-02 10:00:00
---

# Js为何会阻碍渲染?

在浏览器中，`JavaScript`（`JS`）是一种单线程脚本语言，它通常在主线程上执行。当浏览器遇到需要执行`JavaScript`代码的时候，会阻塞渲染过程，也就是说渲染引擎无法继续渲染页面，直到`JavaScript`执行完成。这会导致页面出现卡顿、响应迟缓等问题。

## 常见的阻塞渲染的原因如下：

### JavaScript执行时间过长

* JavaScript执行时间过长：如果`JavaScript`代码执行时间过长，比如一个很复杂的计算、大量数据的操作等，会导致主线程长时间被占用，影响渲染性能。

### JavaScript代码位置

* 将JavaScript代码放在页面头部或者文档末尾时，会阻碍页面的渲染。因为浏览器在解析HTML时遇到`JavaScript`会立即执行，如果JavaScript代码过多或执行时间过长，会造成页面加载不完整。

### DOM操作

* DOM操作：JavaScript代码执行过程中频繁对`DOM`进行操作，比如修改样式、添加或删除元素等，会触发浏览器的重排（`Reflow`）和重绘（`Repaint`），影响页面渲染效率。

### 同步请求

* 同步请求：在JavaScript中发起的同步网络请求（如`XHR`），会导致浏览器停止渲染直到请求返回数据。这会造成页面卡顿，应该尽量避免使用同步请求。

{% note info flat %}为了避免JavaScript阻塞渲染，可以采取以下一些优化措施{% endnote %}

* 异步加载`JavaScript`：使用`defer`或`async`属性来异步加载`JavaScript`文件，使其不阻塞页面渲染。(关于`defer`和`async`，可以参考这篇[文章](https://www.serenova.cn/2024/03/05/js的defer和async引入/))

* 将`JavaScript`放在底部：把JavaScript代码放在页面底部，确保在`HTML`和`CSS`加载完成后再加载和执行`JavaScript`。

* 优化代码：尽量避免编写执行时间过长的JavaScript代码，优化`DOM`操作，减少不必要的重排和重绘等。

* 使用`Web Workers`：将一些耗时的计算操作移到`Web Workers`中执行，以充分利用浏览器的多线程特性，不阻塞主线程。

通过合理优化`JavaScript`代码，可以提升页面的性能和用户体验。
##  通过代码观察
```html
<h1>I‘m so handsome</h1>
<button>change</button>
<script>
  var h1 = document.querySelector('h1');
  var btn = document.querySelector('button');

  // 死循环指定的时间
  function delay(duration) {
    var start = Date.now();
    while (Date.now() - start < duration) {}
  }

  btn.onclick = function () {
    h1.textContent = '你好！';
    delay(3000);
  };
</script>
```

**为了避免页面渲染被阻塞，应该避免在JavaScript中使用耗时的循环或操作，尽量使用异步操作和定时器来控制页面的交互和动画效果，以保证页面的流畅性和响应性。**



# 那么怎么理解JS异步？
JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，<u>而渲染主线程只有一个。</u>

而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。

<u>如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。</u>

所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。

在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。



