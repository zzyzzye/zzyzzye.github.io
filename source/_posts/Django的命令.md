---
title: Django项目中会用到的命令
description: 在使用django项目可能会用到的命令
categories:
  - Python
tags:
  - Django
  - Python
abbrlink: 6a7e1e63
date: 2024-03-19 12:00:00
updated: 2024-03-20 12:00:00
---

# 使用 Django 项目中常用的命令和创建虚拟环境
在进行 `Django` 项目开发时，我们通常会用到一些命令来辅助我们进行开发、管理数据库、运行服务器等操作。同时，为了保持项目的独立性和整洁性，我们还会使用虚拟环境来隔离项目所需的依赖包。本文将介绍一些在 Django 项目中常用的命令，并指导如何创建虚拟环境。

## 创建虚拟环境
在开始一个 `Django` 项目之前，我们通常会先创建一个虚拟环境。虚拟环境可以帮助我们隔离项目所需的依赖包，防止不同项目之间的依赖冲突。以下是创建虚拟环境的步骤：

**安装虚拟环境工具（如 `virtualenv`）** (如果有则可以跳过这个步骤)
```bash
pip install virtualenv
```

**在项目目录下创建一个新的虚拟环境**
```bash
python3 -m venv venv
```
```bash
virtualenv venv
```

**激活虚拟环境**
```bash
.\venv\Scripts\activate
```

**对于 `macOS` 或 `Linux`**
```bash
source venv/bin/activate
```

**在激活的虚拟环境中安装 `Django`**
```bash
pip install django
```
如果需要指定版本，可以使用 `pip install django==4.0.6` 来安装指定版本的 `Django`。
```bash
pip install django==4.0.6
```
<hr/>  

# 常用的 Django 命令
一旦你已经创建了虚拟环境并安装了 `Django`，接下来就可以使用一些常用的 `Django` 命令来进行开发了。以下是一些常用的 `Django` 命令：

**创建一个 `Django` 项目**
```bash
django-admin startproject myproject
```

**创建一个 `Django` 应用**
```bash
python manage.py startapp myapp
```

**运行开发服务器**
```bash
python manage.py runserver
```
默认的开发服务器监听端口为 `8000`，可以通过 `--port` 参数指定端口，如 `python manage.py runserver --port 8001`。
```bash
python manage.py runserver --port 8001
```


**创建数据库迁移文件**
```bash
python manage.py makemigrations
```

**将数据库迁应用用到数据库中**
```bash
python manage.py migrate
```

**创建超级用户（管理员）**
```bash
python manage.py createsuperuser
```

**运行 `Django shell`**
```bash
python manage.py shell
```

**当你想按照`requirements.txt`安装的依赖包时，可以使用以下命令**
```bash
pip install -r requirements.txt
```
没有`requirements.txt`文件时，但是想手动把已经安装的依赖包集合到`requirements.txt`，可以使用以下命令
```bash
pip freeze > requirements.txt
```

以上是一些在 Django 项目中经常使用的命令，它们可以帮助你更高效地开发和管理 Django 项目


