---
title: QT翻译器
description: 使用python的pyqt5实现翻译器
categories:
  - PyQt5
tags:
  - QT
  - Python
  - 爬虫
abbrlink: cb80b9e2
date: 2024-03-16 10:00:00
updated: 2024-03-16 10:00:00
---

最近在学习PyQt5，刚好想到能用PyQt5实现翻译器，于是就用PyQt5实现了一个翻译器

# PyQt5介绍

PyQt5是一个用于创建图形用户界面(GUI)应用程序的工具套件。它是Qt库（一个跨平台的C++库，用于开发GUI应用程序）的Python绑定版本，因此它充分结合了Python的简洁易用和Qt的强大功能。

## 关键特性

1. 跨平台：`PyQt5`应用程序能够在所有主流操作系统上运行，包括`Windows`、`macOS`、`Linux`甚至是`UNIX`，无需修改代码。

2. 全面的控件（Widgets）：`PyQt5`提供了一系列预构建的控件，如按钮（Buttons）、对话框（Dialogs）、滑动条（Sliders）、工具栏等，使得GUI开发变得简单、快捷。

3. 高级API：除了基本的GUI控件外，`PyQt5`还包含许多高级API，例如对数据库、网络、`XML`、`SVG`以及`OpenGL`的支持。

4. 设计师友好：`PyQt5`提供了一个工具`Qt Designer`，它是一个拖拽式的界面设计工具，可以极大地提高GUI的开发效率。

5. 自定义控件：除了使用预定义的控件外，`PyQt5`还允许创建自定义控件和扩展现有控件，提供了高度的灵活性。

6. 国际化：`PyQt5`支持国际化，可以轻松创建支持多语言的应用程序。

## 实现过程

* 使用爬虫作为数据源，爬取网易有道云的翻译结果，然后将翻译结果显示在界面上
* 使用PyQt5实现界面

## 实现代码

```python
import sys
from lxml import etree
import requests
from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QApplication, QWidget, QVBoxLayout, QLabel, QPushButton, QHBoxLayout, \
    QTextEdit, QMessageBox



class Translate(QWidget):
    def __init__(self):
        super(Translate, self).__init__()
        self.resize(600, 250)
        self.UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0'
        self.initui()

    def initui(self):

        # 创建垂直布局
        vbox = QVBoxLayout()

        # 创建上方部分的水平布局
        hbox1 = QHBoxLayout()
        title = QLabel("爬虫在线翻译器")
        hbox1.addWidget(title)
        title.setAlignment(Qt.AlignCenter)
        title.setFixedHeight(50)

        # 创建下方部分的水平布局
        hbox2 = QHBoxLayout()
        self.line2 = QTextEdit('输入文本')
        self.line2.setFixedSize(200, 200)  # 设置line2的宽度
        self.line2.setAlignment(Qt.AlignTop | Qt.AlignLeft)  # 设置对齐方式为左上角
        button = QPushButton("点击翻译")
        try:
            button.clicked.connect(self.translate)
        except Exception as e:
            print(e)
        button.setFixedSize(100, 100)  # 设置button的宽度
        self.line3 = QTextEdit()
        self.line3.setFixedSize(200, 200)  # 设置line3的宽度
        self.line3.setReadOnly(True)  # 设置line3为只读

        self.setStyleSheet("""
                QTextEdit{font-size:18px;font-weight:500;font-family:'Microsoft YaHei;border:1px solid pink'}
                QLabel{font-size:28px;font-weight:500;font-family:'Microsoft YaHei;text-align:center'}
                QPushButton{font-size:18px;font-weight:500;font-family:'Microsoft YaHei'}
                """)

        hbox2.addWidget(self.line2)
        hbox2.addWidget(button)
        hbox2.addWidget(self.line3)

        vbox.addLayout(hbox1)
        vbox.addLayout(hbox2)

        # 将垂直布局设置为窗口的主布局
        self.setLayout(vbox)

    def closeEvent(self, event):
        reply = QMessageBox.question(
            self,
            '关闭窗口',
            '是否确认关闭窗口?',
            QMessageBox.Yes | QMessageBox.No,
            QMessageBox.No
        )

        if reply == QMessageBox.Yes:
            event.accept()
        else:
            event.ignore()

    def translate(self):
        word = self.line2.toPlainText()

        if not word:
            return

        url = 'https://m.youdao.com/translate'
        headers = {
            'User-Agent': self.UA,
            'Referer': url
        }
        par = {
            'inputtext': word,
            'type': 'AUTO'
        }

        response = requests.post(url=url, headers=headers, params=par)
        content = response.content.decode()

        # 解析结果
        tree = etree.HTML(content)
        textarea = tree.xpath('//ul[@id="translateResult"]/li/text()')
        translation = textarea[0] if textarea else None

        # 更新结果标签
        if translation:
            self.line3.setPlainText(translation)
        else:
            self.line3.setPlainText("翻译失败")


if __name__ == '__main__':
    QApplication.setHighDpiScaleFactorRoundingPolicy(Qt.HighDpiScaleFactorRoundingPolicy.PassThrough)
    QApplication.setAttribute(Qt.AA_EnableHighDpiScaling)
    QApplication.setAttribute(Qt.AA_UseHighDpiPixmaps)

    app = QApplication(sys.argv)
    w = Translate()
    w.show()
    app.exec_()

```

## 打开效果

<img src="/assets/md_img/QT翻译.png">
