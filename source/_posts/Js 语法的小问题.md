---
title: Js模块化知识
description: 一些基本的JavaScript模块化知识
categories:
  - JavaScript
tags:
  - 前端
  - JavaScript
  - Vue
abbrlink: 7c5c2ad1
date: 2024-03-31 10:00:00
updated: 2024-03-31 12:00:00
---
# Q1: `export` 导出是什么？
在 `JavaScript` 中，`export` 是用来导出模块的语法。通过 `export` 关键字，
我们可以将变量、函数、类等定义导出，以便其他模块可以引入并使用这些导出的内容。
在 `ES6` 中，`export` 关键字有多种用法，常用的包括：

<hr>

## 命名导出 (Named Exports):
通过 `export` 关键字导出一个或多个变量、函数或类。
```js
export const name = 'Alice';
export function sayHello() {
  return 'Hello!';
}
```


## 默认导出 (Default Export):
使用 `export default` 关键字导出一个默认的变量、函数或类。
```js
const name = 'Bob';
export default name;
```

## 导出整个模块 (Re-exporting):
在一个模块中重新导出另一个模块的内容。
```js
export { name as newName } from './module';
```


## 其他模块导入
在其他模块中导入导出的内容。
```js
import { name, sayHello as hay } from './module'; // 命名导入
import newName from './module'; // 默认导入
```

***
# Q2: `vue-cli`导出
## 问题一:
**在`vue-cli`中，我创建了一个名为`requests`的`js`文件，比如我在里面定义了一个`axios`实例，我怎么导出呢？**
{% folding 示例代码 %}
```js
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1',
    timeout: 5000
})
```
{% endfolding %}

**问题解答**:
```js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1',
    timeout: 5000
});

export default instance;
```

通过这样的写法，你就可以在其他文件中使用import语句导入该axios实例，如下所示：
(当然，`requests`可以起任何名字)
```js
import requests from './requests';

// 现在可以使用requests这个axios实例来发送请求
requests.get('/some-api-endpoint')
    .then(response => {
        // 处理响应
    })
    .catch(error => {
        // 处理错误
    });
```

## 问题二:
**如果那么我如果`js`文件里面的代码 直接是`export default {省略代码}` 会怎么样？**

**问题解答**:
当一个`JavaScript`文件中使用`export default { ... }`语法时，表示将整个对象作为默认导出导出出去，相当于把这个对象作为整体导出。其他文件在导入这个文件时，可以直接得到这个对象，相当于将整个文件的内容作为一个整体导出。

因此，你可以认为`export default { ... }`将整个文件的代码打包成一个对象，并导出这个对象供其他文件使用。其他文件在导入时可以直接操作这个对象，访问其属性和方法，以便使用文件中定义的功能。



