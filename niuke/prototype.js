function func () {
  this.name = "Hellen";
}
console.log(typeof func.prototype);
// 继承与原型链：


func.prototype.getName = function () {
  console.log(this.name);
}
const Obj = {};
Obj.__proto__ = func.prototype;// 将空对象的隐式原型指向func的显示原型，实现了原型链的继承，所以func中的所有的属性和方法也都继承过来（包括原型的方法）
func.call(Obj);
if (Obj.getName) {
  console.log("yes");
  Obj.getName();
}
console.log("end");