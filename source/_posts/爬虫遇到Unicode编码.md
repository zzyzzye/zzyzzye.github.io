---
title: 爬虫爬到的数据为Unicode编码如何解决？
description: 爬虫爬到的数据为Unicode编码的解决方法
categories:
  - Python
tags:
  - 爬虫
  - Python
abbrlink: e8302017
date: 2024-06-17 12:00:00
updated: 2024-06-17 12:00:00
---

# Unicode编码

Unicode是一种计算机字符编码标准，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。Unicode的编码方式包括UTF-8、UTF-16和UTF-32，其中UTF-8是最常用的转换格式，是一种变长字符编码，可以由1到4个字节来表示一个Unicode字符。UTF-16通常以本机方式使用，大多数常见的Unicode码位都只接受一个UTF-16码位（2个字节），但对于辅助字符U+10000及以上仍然需要两个UTF-16代理项码位。ASCII编码是一种最早的字符编码标准，使用7位二进制数表示字符，总共包含128个字符，包括英文字母、数字、控制字符和一些常见符号。

1. 最近爬取数据时发现接口的返回值只要是中文的部分都是Unicode，需要对数据进行处理

```python
import json
from fake_useragent import UserAgent
import requests


class LolHeroList:
    def __init__(self, url, headers):
        self.url = url
        self.headers = headers

    def get_hero_list(self):
        response = requests.get(url=self.url, headers=self.headers)
        response.encoding = 'utf-8'
        content = response.text
        return content


url = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2836243'
headers = {
    'User-Agent': UserAgent().random,
    'Referer': 'https://101.qq.com/',
    'Origin': 'https://101.qq.com'
}

lol_hero_list = LolHeroList(url, headers)
hero_list = lol_hero_list.get_hero_list()
```

结果打印出的数据为

```text
{
    "hero": [
        {
            "heroId": "1",
            "name": "\u9ed1\u6697\u4e4b\u5973",
            "alias": "Annie",
            "title": "\u5b89\u59ae",
            "roles": [
                "mage",
                "support"
            ],
            "isWeekFree": "0"
        }
    ]
}
```

## 有两种方法解决
### 第一种：对content进行encode().decode()

```python
def get_hero_list(self):
    response = requests.get(url=self.url, headers=self.headers)
    response.encoding = 'utf-8'
    content = response.text
    decoded_json_data = content.encode().decode('unicode_escape')
    return decoded_json_data
```

### 第二种：使用json.loads
* 因为对于包含Unicode编码的JSON数据，使用json.loads()方法可以将其转换为Python的字典格式，并且自动处理Unicode编码，将其转换为中文。

```python
def get_hero_list(self):
    response = requests.get(url=self.url, headers=self.headers)
    response.encoding = 'utf-8'
    content = response.text
    decoded_json_data = json.loads(content)
    return decoded_json_data
```
