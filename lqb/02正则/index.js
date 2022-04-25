// "  abc  " ----> "abc  " ----> "abc"
// \s 匹配一个空白字符，包括空格、制表符、换页符和换行符。
// * 匹配前一个表达式 0 次或多次。
function trim (txt) {
  var afterTrimTxt = txt.replace(/^\s*/, "").replace(/\s*$/, "");
  return afterTrimTxt;
}
// \w匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]。
// {5,10}n 和 m 都是整数。匹配前面的字符至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略。
// \w+表示长度大于1的字符串
function isEmail (email) {
  //验证规则：5-10个字符@1个或多个以上字符，以com、net、org结尾
  var regExp = /^\w{5,10}@\w+\.(com|net|org)$/;

  var flag = regExp.test(email);

  return flag;
}
// {n} 正好出现n次无序列表
// \d 表示任意数字 [0-9]
// ^n 表示以n开头
// n$ 表示以n结尾
// 186  134-139  150-152
// {n}n 是一个正整数，匹配了前面一个字符刚好出现了 n 次。
// 比如， /a{2}/ 不会匹配“candy”中的'a',但是会匹配“caandy”中所有的 a，以及“caaandy”中的前两个'a'。
// (x) ，它会匹配 'x' 并且记住匹配项。其中括号被称为捕获括号。
// \d 匹配一个数字。等价于[0-9]。
// x{n} 其中“n”是一个正整数，与前一项“x”的n次匹配。
// 例如，/a{2}/ 不匹配“candy”中的“a”，但它匹配“caandy”中的所有“a”，以及“caaandy”中的前两个“a”。
// \d{9} 9个数字
// test() 方法是正则表达式的一个方法，用于检测一个字符串是否匹配某个模式.
function isPhone (phoneNumber) {
  let regExp = /^(186|13[4-9]|15[0-2])\d{8}/
  return regExp.test(phoneNumber)
}



module.exports = isPhone; //请勿删除