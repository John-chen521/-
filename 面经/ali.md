---
html:
  toc: true
---
# JS
## JS中的String、Array和Math方法
### Array：
``splice()``
splice() 方法用于添加或删除数组中的元素。
返回值
如果仅删除一个元素，则返回一个元素的数组。 如果未删除任何元素，则返回空数组。
``filter()``
filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
注意： filter() 不会对空数组进行检测。
注意： filter() 不会改变原始数组。
``slice()``
slice() 方法可从已有的数组中返回选定的元素。
slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
注意: slice() 方法不会改变原始数组。
``join()``
join() 方法用于把数组中的所有元素转换一个字符串。
元素是通过指定的分隔符进行分隔的。
### String:
``split()``
split() 方法用于把一个字符串分割成字符串数组。
提示： 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
注意： split() 方法不改变原始字符串。
## 类数组与数组的区别与转换
所谓 类数组对象，即格式与数组结构类似，拥有 length 属性，可以通过索引来访问或设置里面的元素，但是不能使用数组的方法，就可以归类为类数组对象。
内置对象arguments、DOM方法返回的结果
Array.from()方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
## DOM常见的操作方式
文档对象模型 (DOM) 将 web 页面与到脚本或编程语言连接起来。**DOM模型用一个逻辑树来表示一个文档**，树的每个分支的终点都是一个节点(node)，每个节点都包含着对象(objects)。**DOM的方法(methods)让你可以用特定方式操作这个树，用这些方法你可以改变文档的结构、样式或者内容**。节点可以关联上事件处理器，一旦某一事件被触发了，那些事件处理器就会被执行。
1. 创建DOM节点：``var div = document.createElement('div');``
2. DOM的删除和替换：``var h2 = document.querySelector("#subTitle");h2.parentNode.removeChild(h2);``
3. DOM的属性修改
4. DOM的属性查找 其中选择器查找返回元素是类数组
5. 元素内容
## JavaScript中的arguments
arguments 是一个对应于传递给函数的参数的类数组对象。arguments 对象只能在函数内使用。例子：遍历参数求和。就是传递进函数的参数列表。Arguments存储了所有传递过来的实参
因为写形参时不知道用户方传多少参数，在JavaScript中arguments实际上它是当前函数的一个内置对象，所以的函数都内置了一个arguments对象，arguments对象中存储了传递的所有传递过来的实参。
## 如何正确判断this
this的不同的情况：
1. 以函数的形式调用时，this永远都是window
2. 以方法的形式调用时，this就是调用方法的对象
3. 以构造函数的形式调用时，this就是新创建的对象
4. 使用call和apply调用时，this就是指定的那个对象
5. 在全局作用域中this代表window
test() window
p.test() p
new test() 新创建的对象
p.call(obj) obj
## 原型和原型链
### 原型 [prototype]

1. 函数的prototype属性
每个函数都有一个原型属性, 它默认指向一个Object空对象(即称为: 这个函数的原型对象)
原型对象中有一个属性constructor, 它指向函数对象
如下图，函数名叫type的函数，有个prototype属性，而它指向type的原型对象，原型对象里面有个constructor属性，而它指向type函数对象。
![图片](F:/desk/web前端/web/JS/img/123.png)
1. 给原型对象添加属性(一般都是方法)
作用: 函数的所有实例对象自动拥有原型中的属性(方法)
```
  console.log(Date.prototype, typeof Date.prototype)
  function Fun () { }
  console.log(Fun.prototype)  // 默认指向一个Object空对象(没有我们的属性)
  
  // 原型对象中有一个属性constructor, 它指向函数对象
  console.log(Date.prototype.constructor===Date)
  console.log(Fun.prototype.constructor===Fun)
  
  //给原型对象添加属性(一般是方法) ===>实例对象可以访问
  Fun.prototype.test = function () { console.log('test()') }
  var fun = new Fun()
  fun.test()
```
#### 显式原型与隐式原型
每个函数function都有一个原型，即显式原型(属性)
每个实例对象都有一个[__ proto __]，可称为隐式原型(属性)
对象的隐式原型的值为其对应构造函数的显式原型的值
内存结构：
![图片](F:/desk/web前端/web/JS/img/234.png)
总结:
函数的[prototype]属性: 在定义函数时自动添加的, 默认值是一个空Object对象
对象的[__ proto __]属性: 创建对象时自动添加的, 默认值为构造函数的prototype属性值
程序员能直接操作显式原型, 但不能直接操作隐式原型(ES6之前)
### 原型链

## 常用类和方法
包装类：方法和属性只能添加给对象,不能添加给基本数据类型,当我们用一些基本数据类型去调用属性和方法时,浏览器会临时使用包装类将其转换为对象,然后再调用对象的属性和方法, 调用后会销毁此对象
String() Boolean() Number()
# ES6
## Set和Map数据结构
# nodejs
# 后端交互
## Restful接口协议
