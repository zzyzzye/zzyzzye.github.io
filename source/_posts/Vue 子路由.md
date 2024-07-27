---
title: Vue路由-子路由
description: 主要讲解vue子路由的相关信息
categories:
  - Vue
tags:
  - Vue
abbrlink: dae0befe
date: 2024-03-11 12:00:00
updated: 2024-03-11 12:00:00
---

# 前言
在`Vue.js`中，子路由（`sub-routes`）是指在一个父路由下定义的一组子路由，这样可以实现父子路由之间的嵌套关系，使得路由结构更加清晰和灵活。使用子路由可以将一个大的页面模块拆分成多个小模块，在不同路由下展示不同内容，方便进行管理和维护。

## 在Vue Router中定义子路由
假设我们有一个**父组件**`Home.vue`，它包含**子路由**`About.vue`和`Contact.vue`。首先，我们需要在`Vue Router`中定义父路由和子路由的关系：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'about',
        component: About
      },
      {
        path: 'contact',
        component: Contact
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
```

## 在父组件中设置子路由的占位符
在**父组件**`Home.vue`中，我们需要设置一个占位符` <router-view>`，用来显示子路由的内容：
```html
<template>
  <div>
    <h1>Home.vue</h1>
    <router-view></router-view>  <!-- 子路由内容将显示在这里 -->
  </div>
</template>
```

## 子组件的内容
在子组件`About.vue`和`Contact.vue`中分别编写需要展示的内容：

```html
<!-- About.vue -->
<template>
  <div>
    <h2>About.vue</h2>
    <p>这是关于页面</p>
  </div>
</template>
```

```html
<!-- Contact.vue -->
<template>
  <div>
    <h2>Contact.vue</h2>
    <p>联系我们！</p>
  </div>
</template>
```

# 总结
通过定义父组件和子路由的关系，并在父组件中设置`<router-view>`占位符，就可以实现`Vue.js`子路由的功能。当用户访问父组件对应的路由时，子路由的内容会根据子路由的路径自动加载并显示在父组件中。**这样的设计可以使页面结构更加清晰，提高代码的维护性和可读性**。


