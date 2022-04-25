const _getUniqueNums = (start, end, n) => {
  // 补全代码
  // 最大最小值之间间隔1的所有数组成的数组
  var arr = []
  // 
  var randomArr = []

  for (let index = 0; index < end - start + 1; index++) {
    arr.push(start + index)
    // console.log(arr)
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  }

  while (randomArr.length < n) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    // 获取数组索引
    console.log(randomIndex) // 6  8  2  5  0  2
    console.log(arr[randomIndex])// arr[6] = 7   arr[8] = 10
    console.log(randomArr) // []   [7]
    randomArr.push(arr[randomIndex])
    //[7]   [7,10]
    arr.splice(randomIndex, 1)// 删除arr[randomIndex] arr[6]  arr[8]
  }
  return randomArr
}
console.log(_getUniqueNums(1, 10, 6))