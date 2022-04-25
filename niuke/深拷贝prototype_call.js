function func (source) {
  var target = {};
  for (var key in source) {
    //  key==a1,
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
      // JavaScript 并没有保护 hasOwnProperty 这个属性名，因此，当某个对象可能自有一个占用该属性名的属性时，就需要使用外部的 hasOwnProperty 获得正确的结果：
      // 判断是否有a1该属性
      // console.log(source[key]) 键的值
      // console.log(typeof null);//object

      if (typeof source[key] === 'object') {
        // 若有则键的值是对象，则返回函数之后的数据
        // 但是由于js的一个bug,typeof null==object,所以还会调用func(null)返回的是初始的target,{}
        target[key] = func(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
var a = { a1: "a1", a2: { b1: "b1", b2: "b2" }, a3: undefined, a4: null, a5: 1 };
var b = func(a);
console.log(b);
// 深拷贝：我们希望在改变新的数组（对象）的时候，不改变原数组（对象）
// typeof:
// // JavaScript 诞生以来便如此
// typeof null === 'object';
// 除 Function 外的所有构造函数的类型都是 'object'
var str = new String('String');
var num = new Number(100);

typeof str; // 返回 'object'
typeof num; // 返回 'object'

var func = new Function();

typeof func; // 返回 'function'