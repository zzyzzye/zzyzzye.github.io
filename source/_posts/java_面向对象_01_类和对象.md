---
title: Java面向对象(一)
description: Java面向对象(一)——类和对象知识点介绍
categories:
  - Java
tags:
  - Java
  - 面向对象
abbrlink: 8a22d796
date: 2024-05-03 12:10:00
updated: 2024-05-08 09:38:00
---

# 1. 类和对象

* 类(可以比做成设计图):是对象共同特征的描述
* 对象(可以比做成产品):是类的具体实例 (是真实存在的东西)

**<font style="color:red;">在`java`中，必须先定义类，再创建对象</font>**

## 那么如何定义类呢?

```java
public class 类名 {
    1、 成员变量 (代表属性,一般是名词)
    2、 成员方法 (代表行为,一般是动词)
    3、 构造器 
    4、 代码块 
    5、 内部类 
}
```

现在我们写一个实例

```java
public class Phone {

    // 属性
    String brand;
    double price;


    // 行为
    public void call() {
        System.out.println("手机正在打电话");
    }

    public void sendMessage() {
        System.out.println("手机正在发短信");
    }

    public static void main(String[] args) {
        // 创建对象
        Phone phone = new Phone();
        // 给手机赋值
        phone.brand = "苹果";
        phone.price = 7999;

        System.out.println("手机品牌是：" + phone.brand + "，手机价格是：" + phone.price);

        // 调用行为(方法)
        phone.call();
        phone.sendMessage();
    }
}

```

{% folding cyan open, 定义类有哪些要求? %}

* **<font style="color:red;">类名的首字母必须大写，英文，有意义，满足驼峰命名法，不能使用关键字</font>**
* 一个代码文件可以定义多个类，但是只能有一个类是public的，public修饰的类必须是java代码的文件名称
  {% endfolding %}

{% folding cyan open, 成员变量的格式是什么样的? %}

* **完整格式为:<font style="color:red;">修饰符 数据类型 变量名 = 初始化值;</font>**
* 通常不需要指定初始化值
  {% endfolding %}

<hr>

# 2. 封装

封装的一个重要方面就是将对象的状态（成员变量）私有化，只能通过公共的方法（成员方法）来访问和修改对象的状态。通过将成员变量私有化，可以隐藏对象的具体实现，避免外部直接对其进行操作，从而提高了代码的安全性和可维护性。

## 2.1 为什么要封装?

* 封装是面向对象编程(OOP)的三大特性之一，其主要目的是隐藏对象的属性和实现细节，使得对象的内部细节对外部对象不可见，只提供公共的接口来与对象进行交互。
* 封装使数据被保护在内部

### 2.2.1 封装的优点:

① 提高代码的安全性
② 提高代码的复用性
③ 将复杂的事情变得简单化

## 2.2 `private`与封装的关系

<font style="color:red;">`private`关键字通常与封装(`Encapsulation`)结合使用</font>，通过将类的属性私有化并提供公有的`get`
和`set`方法来实现封装。封装的好处是隐藏内部实现细节，提高类的安全性和可维护性。

## 2.3 `private` (私有) 关键字

* `private`是 一个访问限定修饰符

## 2.4 `private`关键字的作用

`private`关键字用于限制类的成员对外部的访问，只有在类的内部才能直接访问私有成员，外部类无法直接访问私有属性或方法。

## 2.5 `get`和`set`方法

过`get`和`set`方法来访问和设置私有属性，可以在`set`方法中加入逻辑判断来限制属性值的合法性。`get`方法用于获取属性值，`set`方法用于设置属性值。

## 2.6 访问权限

`private`关键字限制了属性和方法的访问权限，这也反映了面向对象编程中的封装原则。在面向对象编程中，封装是将对象的状态（属性）和行为（方法）封装在一起，只暴露必要的接口给外部使用。

## 2.7 `private`代码案例

1. 首先我们不用`private`写一份代码
```java
public class Person {
    String name;
    int age;
    String gender;

    // 方法
    public void eat() {
        System.out.println("吃饭");
    }

    public void sleep() {
        System.out.println("睡觉");
    }

    public static void main(String[] args) {
        Person Friend = new Person();
        Friend.name = "蔡小坤";
        Friend.age = 18;
        Friend.gender = "男";

        System.out.println(Friend.name);
        System.out.println(Friend.age);
        System.out.println(Friend.gender);

        Friend.eat();
        Friend.sleep();
    }
}
```
这段代码的运行结果为
```text
蔡小坤
18
男
吃饭
睡觉
```
注意看Person类中的代码，我们是通过创建对象，并且是以<font style="color:red;">对象</font>的形式来<font style="color:red;">直接访问</font>和<font style="color:red;">修改</font>对象的属性。

2. 接下来我们用`private`写一份代码,在类中的成员变量加上`private`修饰符
```java
public class Person {
    private String name;
    private int age;
    private String gender;

    // 针对每个私有属性，都要提供get和set方法
    // get方法：返回私有属性的值
    // set方法：设置私有属性的值

    // 对外提供name属性的
    public String getName() {
        return name;
    }

    // set方法 给成员变量name赋值
    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int ages) {
        if (ages >= 18 && ages < 50) {
            age = ages;
        } else {
            System.out.println("年龄不合法");
        }
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    // 方法
    public void eat() {
        System.out.println("吃饭");
    }

    public void sleep() {
        System.out.println("睡觉");
    }

    public static void main(String[] args) {
        Person friend = new Person();
        friend.setName("蔡小坤");
        friend.setAge(18);
        friend.setGender("男");
    
        System.out.println(friend.getName());
        System.out.println(friend.getAge());
        System.out.println(friend.getGender());
    
        friend.eat();
        friend.sleep();
    }
}
```
这段代码的运行结果为
```text
蔡小坤
18
男
吃饭
睡觉
```
> 代码中提供了相应的`getter`和`setter`方法，分别用于获取和设置对象的属性值。<u>这样做的好处是可以控制属性的访问权限，确保属性的安全性和数据的完整性。</u>比如在代码中`getAge()`和`setAge()`方法中，通过`setAge()`方法对年龄进行了合法性校验(年龄在18到50之间才能设置成功)，避免了外部对象直接修改年龄属性导致数据不合法的情况发生。
* **这时候我们又发现一个点,为什么要用`this`关键字来访问私有属性呢?**
**首先我们把`this`关键字去掉,看看运行结果**
```java
public class Person {
    略......
    
    public void setName(String name) {
        name = name;
    }


    public void setAge(int ages) {
        if (ages >= 18 && ages < 50) {
            age = ages;
        } else {
            System.out.println("年龄不合法");
        }
    }
    

    public void setGender(String gender) {
        gender = gender;
    }

    略......
}
```
这时候的输出结果就是
```text
null
18
null
吃饭
睡觉
```

### 2.7.1 问题抛出
这时候我们发现打印的结果反而变成了`null`了,这是为什么呢?
为什么，`setAge()`方法没有使用`this`关键字，而且仍然可以正确地设置 `age` 成员变量的值，而不会出现为`null`的情况。
### 2.7.2 回答
> 这是因为Java中的变量作用域查找规则是，首先在方法内部查找局部变量或方法参数，如果没有找到就会向外部（类的成员变量）查找。 

> 因此，即使没有使用this关键字，`setAge()`方法中的`age = ages;`会被编译器理解为设置当前对象的成员变量age的值，而不是方法的参数ages。这是因为age成员变量是类的成员变量，编译器会默认将其作为当前对象的成员变量来处理。

> 而在`setGender()`方法中，<font style="color:red;">函数参数和成员变量同名，编译器无法区分变量的作用域</font>，导致在方法中的`gender = gender;`实际上是将函数参数gender赋值给自身，而不是给成员变量gender赋值。因此，正确的做法是使用this关键字明确指定成员变量，避免出现混淆。

<hr>


