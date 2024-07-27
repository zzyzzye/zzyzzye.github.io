---
title: Python项目关于虚拟环境的坑
description: Python项目关于虚拟环境的坑
categories:
  - Python
tags:
  - Django
  - Python
abbrlink: 1b3aa7d
date: 2024-03-19 12:00:00
updated: 2024-03-20 12:00:00
---

# Python项目的虚拟环境
在开发Python项目的时候，我们一般会使用虚拟环境，这样可以避免不同项目之间依赖的库冲突问题。
但是有时会遇到很多的坑，比如就像折磨我一个下午的问题-虚拟环境安装第三方库，但是pip指向的不是当前的虚拟环境，导致安装的库在全局环境中，而不是当前的虚拟环境中。

## 问题描述
首先我们在使用局部的虚拟环境时候一般在路径前面会有`.venv`，但是使用全局的虚拟环境，没有这个前缀，所以导致在安装第三方库的时候，pip会指向全局环境中的库，而不是当前虚拟环境中的库。
**可是也有例外**
pip指向了全局Python安装目录下的site-packages，而不是你的虚拟环境目录中。这意味着尽管你已经激活了虚拟环境，但由于某种原因，pip还是使用了系统全局Python环境。

## 问题分析
首先我们先使用命令**确认激活的虚拟环境**
确保虚拟环境已被正确激活。你应该在命令行提示符前看到(venv)，这表示虚拟环境已激活
```bash
where pip
```

* 可是我这里却返回
```bash
D:\Python\Scripts\pip.exe
D:\Anaconda3\Anaconda3\Scripts\pip.exe
```

* 根据where pip的输出结果，系统仍然优先使用全局环境下的pip（如D:\Python\Scripts\pip.exe），而不是你虚拟环境中的pip。这意味着，即使你已激活了虚拟环境，执行pip命令时，系统还是调用的全局Python环境的pip。


## 解决方案
为了确保在虚拟环境中使用的是虚拟环境本身的pip，你应该直接使用虚拟环境中的python来运行pip模块，如下所示：
```bash
D:\python project\django-project\venv\Scripts\python.exe -m pip install django==4.0.6
```

### 问题抛出

我这样却还是报错 **"D:\python" 不是内部或外部命令，也不是可运行的程序 或批处理文件。**
### 解决方案
命令行对包含空格的路径处理出现了问题。当命令行中的路径中包含空格时，应当用双引号("")将整个路径括起来，以确保Shell或命令提示符正确解释整个路径作为一个单一的参数而不是多个参数。
```bash
"D:\python project\django-project\venv\Scripts\python.exe" -m pip install django==4.0.6
```
{% note danger flat %}记住把路径替换为你的路径！！！{% endnote %}

## 使用镜像源
要使用指定的镜像源（如阿里云镜像）进行包安装，你可以通过添加-i或--index-url选项来指定pip命令使用的镜像源URL。
```bash
"D:\python project\django-project\venv\Scripts\python.exe" -m pip install django==4.0.6 -i https://mirrors.aliyun.com/pypi/simple

```

### 这里还有其他的镜像源
{% note flat %}
中国科学技术大学 https://mirrors.ustc.edu.cn/pypi/web/simple
清华大学 https://pypi.tuna.tsinghua.edu.cn/simple
华中科技大学 http://pypi.hustunique.com/simple
中国科学院 https://pypi.mirrors.opencas.cn/simple
阿里云 https://mirrors.aliyun.com/pypi/simple
豆瓣  https://pypi.douban.com/simple
{% endnote %}

# 总结
目前出现这个问题的原因还不清楚(以前从未出现这个问题)，若是有更好的解决方案，欢迎评论区交流。
