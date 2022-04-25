/* //情况一：
let arr0 = [1, 1, 1, 0, 5, 6];
uniqueify(arr0);
//输出：[1,0,5,6]

//情况二：
let arr1 = [
  { id: 1, name: 'xx' },
  { id: 1, name: 'xx' },
  { id: 2, name: 'xx' },
  { id: 1, name: 'xx' },
  { id: 1, name: 'xx' }
];
uniqueify(arr1, a => a.id);//假如这里的去重规则依据为id
//输出：
[
  { id: 1, name: 'xx' },
  { id: 2, name: 'xx' }
];

//情况三：
let arr2 = [
  { name: 'xx', sex: 'male' },
  { name: 'xx', sex: 'female' },
  { name: 'xx', sex: 'male' },
  { name: 'aa', sex: 'male' },
  { name: 'aa', sex: 'male' }
];
uniqueify(arr2, a => (a.name + a.sex));//假如这里的去重规则依据为名字和性别均相同，才算是相同
//输出：
[
  { name: 'xx', sex: 'male' },
  { name: 'xx', sex: 'female' },
  { name: 'aa', sex: 'male' }
]; */

function uniqueify (arr, cb) {
  let newArr = [];
  if (!cb) {
    //cb 不存在, 直接数组去重
    newArr = [...new Set(arr)];
    // es6 的解构 扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。
  } else {
    // cb存在
    let obj = {};
    arr.forEach(item => {
      if (!obj[cb(item)]) {
        obj[cb(item)] = item;
        newArr.push(item);
      }
    });
  }

  console.log(newArr);
}
