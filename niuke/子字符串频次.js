
// 请补全JavaScript代码，该函数接受两个参数分别为字符串、子字符串，
// 要求返回子字符串在字符串中出现的频次。
// 第一种方法
//使用split分割（target为分割点）
// 有n个target返回的列表就会有n+1个元素
// 对列表取长度并且-1就会得到target的个数
const _searchStrIndexOf = (str, target) => {
  // 补全代码
  console.log(str.split(target))
  return str.split(target).length - 1
}
console.log(_searchStrIndexOf('abcabcabc', 'c'))
// 第二种方法
// 使用正则表达来计算共有几个target
// match会返回符合条件的数组
// var patt=new RegExp(pattern,modifiers);
// pattern（模式） 描述了表达式的模式 如果传入一个非正则表达式对象，则会隐式地使用new RegExp(obj) 将其转换为一个RegExp
// modifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配,
// 修饰符用于执行区分大小写和全局匹配:
// i	执行对大小写不敏感的匹配。
// g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
// m	执行多行匹配。
// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
const _searchStrIndexOf2 = (str, target) => {
  // 补全代码
  let reg = new RegExp(target, 'g');
  return str.match(reg).length;
}
// 第三种方法
// 使用str.indexOf找到对应的子字符串在str的索引值
// 如果索引值不为-1就表示找到
// 之后再进行寻找，但是indexOf的第二个参数应该为index+1
// 循环在index==-1的时候退出
// indexOf() 方法可返回数组中某个指定的元素位置。
// 该方法将从头到尾地检索数组，看它是否含有对应的元素。
//开始检索的位置在数组 start 处或数组的开头（没有指定 start 参数时）。如果找到一个 item，则返回 item 的第一次出现的位置。
// 开始位置的索引为 0。
// 如果在数组中没找到指定元素则返回 -1。
const _searchStrIndexOf3 = (str, target) => {
  let index = str.indexOf(target)
  let sum = 0
  while (index > -1) {
    index = str.indexOf(target, index + 1)
    sum++
  }
  return sum
}