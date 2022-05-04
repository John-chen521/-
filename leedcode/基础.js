/* const a = '5 5'
const [book, person] = a.split(' ')
// 分割成子字符串数组
console.log(typeof book) //string
const N = Number(book)
console.log(typeof N)//5
console.log(Number(book))//5
 */
/* const a = '3 123'
const b = a.split(' ')
var persons = []
// console.log(b) // [ '3', '123' ]
// console.log(Array.isArray(b)) // ture
// console.log(typeof b) // object 使用typeof来判断null和引用类型 返回的结果都是 'object'
for (let j = 0; j < 5; j++) {
  persons.push(a.split(' '))
} */

// console.log(Array.isArray(persons)) // true
// console.log(persons)
// console.log(typeof persons)// 对象
/* [
  [ '3', '123' ],
  [ '3', '123' ],
  [ '3', '123' ],
  [ '3', '123' ],
  [ '3', '123' ] 
] */



/* s = '6'
ns = Number(s)
// console.log(halfns)
count = 1
if (ns == 1 || ns == 0) {
  console.log(count)
  // return 1
}
function hh (k) {

  halfns = Math.floor(k / 2)

  for (i = 1; i <= halfns; i++) {
    // console.log(i)
    count++
    // console.log(hh(i))
    // return count
  }
}
hh(ns)
console.log(count)
 */

/* function Fn () {
  // 内部语句 this.prototype = {}
  this.prototype = {}
}
console.log(Fn.prototype)
var fn = new Fn()
console.log(fn.__proto__)
console.log(Fn.prototype === fn.__proto__) */
/* var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); */
/* A = []
console.log(A) */
/* function f () { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f () { console.log('I am inside!'); }
  }

  f();
}()
); */

/* 二分查找 */
/* var search = function (nums, target) {
  var low = 0,
    high = nums.length - 1,
    mid, element
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = nums[mid]
    if (element < item) {
      low = mid + 1
    } else if (element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}; */


/* var solution = function (isBadVersion) {
  return function (n) {
    let left = 1, right = n;
    while (left < right) { // 循环直至区间左右端点相同
      const mid = Math.floor(left + (right - left) / 2); // 防止计算时溢出
      if (isBadVersion(mid)) {
        right = mid; // 答案在区间 [left, mid] 中
      } else {
        left = mid + 1; // 答案在区间 [mid+1, right] 中
      }
    }
    // 此时有 left == right，区间缩为一个点，即为答案
    return left;
  };
};
*/

/* var searchInsert = function (nums, target) {
  let left = 0,
    element, mid,
    right = nums.length - 1
  while (right >= left) {
    mid = Math.floor(left + (right - left) / 2)
    element = nums[mid]
    if (element > target) {
      right = mid - 1
    } else if (element < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right + 1
}; */

/* 链表 */
