const arr = [];// 只是数组,代表arr只是个数组.
const testObj = {};
// console.log(arr === ""); 
// console.log(arr == "");
// 出现===：出现三个等号的时候，首先判断的是类型是否相等，如果不相等就会返回false
// console.log(typeof arr);
// object
// console.log(arr);
// [ 1, 6 ]  没有使用toString之前是原始内容
console.log(arr == testObj);  // 两个对象之间比较，一个是数组对象，一个是普通对象，
// 原始值的比较是值的比较：

// 　　　　它们的值相等时它们就相等（==）

// 　　　　它们的值和类型都相等时它们就恒等（===）。

// 　　对象和原始值不同，对象的比较并非值的比较,而是引用的比较：

// 　　　　即使两个对象包含同样的属性及相同的值，它们也是不相等的

// 　　　　即使两个数组各个索引元素完全相等，它们也是不相等的



// arr.valueOf = () => 2;
arr.toString = () => 6;
arr.valueOf = () => testObj;
console.log(typeof testObj)
console.log(arr.valueOf() == testObj);  // 前方只有arr.toString, 则比较时调用arr.toString,若前方有valueOf,则优先调用valueOf
console.log(typeof arr);  // 前方只有arr.toString, 则比较时调用arr.toString,若前方有valueOf,则优先调用valueOf
console.log(arr == testObj);  // 两个对象之间比较，一个是数组对象，一个是普通对象，
// console.log(arr == 6);  // 前方只有arr.toString, 则比较时调用arr.toString,若前方有valueOf,则优先调用valueOf
// console.log(arr == 2);

//

/*
toString() 方法返回包含所有数组值的字符串，以逗号分隔。
*/

// console.log(arr);
// [ 1, 6, toString: [Function (anonymous)] ]   使用arr.toString改变了arr数组的内容

// console.log(arr[2]);
// undefined   但是索引下无法打印其值
// console.log(arr[5]);
// undefined 就像是一个没定义过的值
// console.log(arr.toString());
// 6 返回一个数字6,就像调用了一个自定义的函数


// console.log(arr === 6);
// 类型不同，不会调用toString方法，
// console.log(arr == 6);  //优先调用了valueOf
// 。最后返回true




/*
 valueOf() 方法返回指定对象的原始值。
*/

// 传值之后,或者说定义函数之后,arr的类型有没有变化？arr的值有没有变化？
// console.log(arr.valueOf());
// 2  返回自定义函数返回值
//
// console.log(arr);
// [
//   1,
//   6,
//   toString: [Function (anonymous)],
//   valueOf: [Function (anonymous)]
// ]  多了一个，感觉有点像python时的pytorch函数和numpy一样同样会说明
// console.log(arr[3]);
// undefined
// console.log(typeof arr);
// object  arr还是数组对象
// console.log(typeof arr.valueOf());// arr.valueOf()变成了一个数字，之前的传值等于是定义了一个函数叫arr.valueOf()
// number
// console.log(arr == 2);
// 在==比较时会自动调用

// console.log(arr == testObj);