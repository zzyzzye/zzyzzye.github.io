---
title: Java-字符串
description: Java中对于字符串操作的笔记
categories:
  - Java
tags:
  - Java
swiper_index: 1
abbrlink: 6b565da9
date: 2024-06-19 12:10:00
updated: 2024-06-19 17:20:00
---

# 一、`StringBuilder`

StringBuilder是Java中的一个类，用于创建和操作可变的字符序列。与String类不同，StringBuilder是可变的，这意味着它可以在不创建新对象的情况下改变其内容。这样做可以提高字符串操作的效率，特别是在需要进行大量修改的情况下。

## `StringBuilder`的主要特点：

1. 可变性：

   * StringBuilder对象可以在不创建新对象的情况下修改其内容。这对于需要频繁修改字符串的操作非常有用。

2. 性能优势：

   * 由于StringBuilder不会创建新的对象，因此在需要大量修改字符串内容时，它的性能要优于String类。

3. 常用方法：

* `append()`：向StringBuilder对象追加字符串。
* `insert()`：在指定位置插入字符串。
* `delete()`：删除指定范围内的字符。
* `reverse()`：反转字符序列。

## 使用示例：

```java
public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sbuild = new StringBuilder("Hello");
        
        // 追加字符串
        sbuild.append(" World");
        System.out.println(sbuild.toString()); // 输出 "Hello World"
        
        // 插入字符串
        sbuild.insert(5, ",");
        System.out.println(sbuild.toString()); // 输出 "Hello, World"
        
        // 删除字符串
        sbuild.delete(5, 6);
        System.out.println(sbuild.toString()); // 输出 "Hello World"
        
        // 反转字符串
        sbuild.reverse();
        System.out.println(sbuild.toString()); // 输出 "dlroW olleH"
    }
}


```

## 在反向打印字符串中的应用：

```java
import java.util.Scanner;

public class ReverseString {
    // 反转字符串的函数
    public static String reverseString(String text) {
        return new StringBuilder(text).reverse().toString();
    }

    public static void main(String[] args) {
        // 创建Scanner对象，用于读取用户输入
        Scanner scanner = new Scanner(System.in);
        System.out.print("请输入一个字符串: ");
        String userInput = scanner.nextLine();
        
        // 调用反转字符串的函数
        String reversedText = reverseString(userInput);
        System.out.println("反向打印结果: " + reversedText);
        
        // 关闭Scanner对象
        scanner.close();
    }
}

```

### 在这个代码中，`new StringBuilder(text).reverse().toString()`的作用是：

1. 使用输入字符串text创建一个StringBuilder对象。
2. 调用StringBuilder对象的`reverse()`方法来反转字符串。
3. 调用`toString()`方法将StringBuilder对象转换为String对象，以便打印输出。

# 二、`charAt `

charAt 是 Java 中 String 类的一个方法，用于返回指定索引处的字符。它的作用类似于数组的索引访问，通过给定索引获取字符串中的特定字符。

<hr/>

## `charAt` 方法的基本用法

```java
public char charAt(int index)
```

* 参数：index，一个整数，表示要访问的字符的位置。索引从 0 开始。
* 返回值：在指定索引处的字符。

## 使用示例1-遍历字符串:

```java
public class CharAtExample {
    public static void main(String[] args) {
        String text = "Hello, World!";
        char character = text.charAt(7);
        System.out.println("在索引 7 处的字符是: " + character); // 输出 'W'
    }
}

```

## 使用示例2-查找特定字符:

```java
public class FindCharacter {
    public static void main(String[] args) {
        String text = "Hello, World!";
        char target = 'o';
        for (int i = 0; i < text.length(); i++) {
            if (text.charAt(i) == target) {
                System.out.println("字符 '" + target + "' 在索引 " + i + " 处");
                break;
            }
        }
    }
}

```

## 使用 `charAt` 反转字符串示例

通过结合 `charAt` 方法，可以手动实现字符串的反转。虽然使用 StringBuilder 的 `reverse` 方法更简洁，但通过 `charAt`
方法可以更好地理解字符串操作的原理。

```java
import java.util.Scanner;

public class ReverseStringWithCharAt {
    public static String reverseString(String text) {
        StringBuilder reversed = new StringBuilder();
        for (int i = text.length() - 1; i >= 0; i--) {
            reversed.append(text.charAt(i));
        }
        return reversed.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("请输入一个字符串: ");
        String userInput = scanner.nextLine();
        
        String reversedText = reverseString(userInput);
        System.out.println("反向打印结果: " + reversedText);
        
        scanner.close();
    }
}

```

<hr/>

# 三、`substring`

substring 是 Java String 类的一个方法，用于从字符串中提取子字符串。它有两个重载版本，可以根据需要截取从某个位置开始的子字符串，或者从某个位置开始到另一个位置结束的子字符串。

## 注意事项

1. *索引越界*：

   * 如果 `beginIndex` 或 `endIndex` 超出字符串的范围，将抛出 `StringIndexOutOfBoundsException`。
   * 例如，`"Hello".substring(10)` 或 `"Hello".substring(1, 10)` 都会抛出异常。

2. *`beginIndex` 和 `endIndex` 的关系：*

   * 如果 `beginIndex` 等于 `endIndex`，返回一个空字符串。
   * 如果 `beginIndex` 大于 `endIndex`，将抛出 `StringIndexOutOfBoundsException`。

## 综合示例1-使用 `substring` 方法来提取和打印不同的子字符串

```java
public class SubstringExample {
    public static void main(String[] args) {
        String text = "Hello, World!";
        
        // 从索引 7 开始提取子字符串
        String sub1 = text.substring(7);
        System.out.println("从索引 7 开始提取子字符串: " + sub1); // 输出 "World!"
        
        // 从索引 7 开始提取到索引 12（不包括索引 12）
        String sub2 = text.substring(7, 12);
        System.out.println("从索引 7 到索引 12 提取子字符串: " + sub2); // 输出 "World"
        
        // 提取整个字符串
        String sub3 = text.substring(0, text.length());
        System.out.println("提取整个字符串: " + sub3); // 输出 "Hello, World!"
        
        // 提取空字符串
        String sub4 = text.substring(5, 5);
        System.out.println("提取空字符串: " + sub4); // 输出 ""
        
        // 尝试提取索引越界的子字符串（将抛出异常）
        try {
            String sub5 = text.substring(7, 20);
            System.out.println("提取子字符串: " + sub5);
        } catch (StringIndexOutOfBoundsException e) {
            System.out.println("索引越界异常: " + e.getMessage());
        }
    }
}

```

## 综合示例2-使用 `substring` 实现手机号码中间四位屏蔽

```java
public class PhoneNumber {
    public static void main(String[] args) {
        // 1. 获取手机号码
        String phoneNumber = "17576359462";

        // 2. 拿到号码前面三位
        String start = phoneNumber.substring(0, 3);

        // 3. 拿到后四位
        String end = phoneNumber.substring(7);

        String result = start + "****" + end;
        System.out.println(result);  // 输出 "175****9462"
    }
}
```
