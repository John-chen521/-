const _getParams = (url) => {
  // 补全代码
  // let arr = url.match(/(\w+)=(\w+)/gi);
  let arr = url.split("?")[1];
  // 获取第一个问号后的内容,切分后的数组第[1]
  // split() 方法用于把一个字符串分割成字符串数组。

  // console.log(arr)
  // user=anonymous&city=chengdu
  const arr2 = arr.split("&");
  // console.log(arr2)
  // [ 'user=anonymous', 'city=chengdu' ]
  let obj = {};
  // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
  // map() 方法按照原始数组元素顺序依次处理元素。
  // 这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
  // 注意： map() 不会对空数组进行检测。
  // 注意： map() 不会改变原始数组。
  arr2.map(item => {
    console.log(item.split("="));
    // [ 'user', 'anonymous' ]
    // [ 'city', 'chengdu' ]
    let [key, value] = item.split("=");
    // 解构赋值，
    // 每个元素都调用一次提供的函数
    obj[key] = value;
    console.log('ss')// 被打印两次
    //     [ 'user', 'anonymous' ]
    //     ss
    //     [ 'city', 'chengdu' ]
    //     ss
  })

  return obj;
}
console.log(_getParams('http://domain.com/?user=anonymous&city=chengdu'))