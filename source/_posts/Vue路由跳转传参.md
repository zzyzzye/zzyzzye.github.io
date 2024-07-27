---
title: Vue路由跳转传参
description: Vue路由跳转传参
categories:
  - Vue
tags:
  - Vue
  - vue-router
abbrlink: 84e43f25
date: 2024-03-01 12:00:00
updated: 2024-03-08 12:00:00
---

# Vue路由跳转传参


在Vue.js中，你可以通过路由传参的方式来实现传递参数。一般来说，有两种方式可以在路由中传递参数：**动态路由**和**查询参数**。


* **<font color="orange">动态路由传参</font>**
  动态路由传参是指在路由路径中包含参数，并且这些参数是动态变化的。在Vue中，通过在路由路径中使用占位符来定义动态参数，传递参数时会根据实际的数值替换这些占位符。

{% tabs 路由代码 %}
<!-- tab router/index.js -->
```js
// 路由定义
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { name: 'search', path: '/search/:words?', component: Search },
  ]
});
```
<!-- endtab -->

<!-- tab home.vue -->
```html
<template>
    <div class="home">
        <div class="logo-box"></div>
        <div class="search-box">
            <input type="text">
            <button @click="goSearch">搜索一下</button>
        </div>
        <div class="hot-link">
            热门搜索：
            <router-link to="/search/黑马程序员">黑马程序员</router-link>
            <router-link to="/search/前端培训">前端培训</router-link>
            <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FindMusic',
    methods: {
        goSearch () {
            this.$router.push({
                name: 'search',
                params: {
                    words: '前端培训'
                }
            })
        }
    }
}

</script>
```
<!-- endtab -->

<!-- tab Search.vue -->
```html
<template>
    <div class="search">
        <p>搜索关键字: {{ $route.params.words }} </p>
        <p>搜索结果: </p>
        <ul>
            <li>.............</li>
            <li>.............</li>
            <li>.............</li>
            <li>.............</li>
        </ul>
    </div>
</template>
```
<!-- endtab -->
{% endtabs %}


* **<font color="orange">动态路由传参(query)写法</font>**

{% tabs 路由代码 %}
<!-- tab router/index.js -->
```js
// 路由定义
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { name: 'search', path: '/search', component: Search },
  ]
});
```
<!-- endtab -->

<!-- tab home.vue -->
```html
<template>
    <div class="home">
        <div class="logo-box"></div>
        <div class="search-box">
            <input type="text">
            <button @click="goSearch">搜索一下</button>
        </div>
        <div class="hot-link">
            热门搜索：
            <router-link to="/search/黑马程序员">黑马程序员</router-link>
            <router-link to="/search/前端培训">前端培训</router-link>
            <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FindMusic',
    methods: {
        goSearch () {
            this.$router.push({
                name: 'search',
                query: {
                    words: '前端培训'
                }
            })
        }
    }
}

</script>
```
<!-- endtab -->

<!-- tab Search.vue -->
```html
<template>
    <div class="search">
        <p>搜索关键字: {{ $route.query.words }} </p>
        <p>搜索结果: </p>
        <ul>
            <li>.............</li>
            <li>.............</li>
            <li>.............</li>
            <li>.............</li>
        </ul>
    </div>
</template>
```
<!-- endtab -->
{% endtabs %}

