/**
 * 封装函数，函数名 getRandomNum(min,max,countNum)
 * 生成 min~max 范围的 countNum 个不重复的随机数，存入数组并返回
 */
//生成指定数目和范围的随机数
const getRandomNum = function (min, max, countNum) {
  var arr = [];
  // 在此处补全代码
  var oneplus = [];
  for (let index = 0; index < max - min + 1; index++) {
    oneplus.push(min + index);
  }

  while (arr.length < countNum) {
    // 生成随机数组的索引值
    var arrindex = Math.floor(Math.random() * oneplus.length)
    arr.push(oneplus[arrindex])
    oneplus.splice(arrindex, 1)
  }

  return arr;
};
module.exports = getRandomNum; //请勿删除
