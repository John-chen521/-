let a = 0;
const obj = {
  a: 1,
  // c: console.log(this.a),
  b: function () {
    console.log(this.a);
    // undefined,在函数内部this的值取决于函数被调用的方式
  }
}
const obj1 = {
  a: 2
}
const fun = obj.b; //定义了一个函数，返回this.a
fun(); // 直接调用，返回window对象 undefined
// console.log(this.window); // undefined
// obj.b(); // 作为对象的方法调用，this 被设置为调用该函数的对象,当obj.b()被调用时,函数内的this将绑定到obj对象

//  另： es6 中let没有变量提升 但是var可以在初始化一个变量之后用var声明它
// 在这里,obj.b,也就是fun()

fun.apply(obj);

// obj的b方法被应用到obj对象中,this.a实则为obj.a,this指向obj,
/* 
apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。apply()方法接受的是一个参数数组
 func.apply(thisArg, [argsArray])
 thisArg
必选的。在 func 函数运行时使用的 this 值。
请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，
则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
返回值
调用有指定this值和参数的函数的结果。
*/

/* 
如果要想把 this 的值从一个环境传到另一个，就要用 call 或者apply 方法，如下方的示例所示。 
*/

fun.bind(obj1).apply(obj);

// bind永久绑定,this指向obj1,this.a也就是obj1.a

const fun1 = fun.bind(obj1);
new fun();

/* new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。 */

// 新建了一个对象，this指向的是new的对象，而这个new的对象并没有属性a
/* new 关键字会进行如下的操作：

创建一个空的简单JavaScript对象（即{}）；
为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。 */