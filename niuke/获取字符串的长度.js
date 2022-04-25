// function strLength (s, bUnicode255For1) {
//   if (bUnicode255For1) {
//     return s.length;
//   } else {
//     for (var i = 0, length = 0; i < s.length; i++) {
//       if (s.charCodeAt(i) > 255) {
//         length = length + 2;
//       } else {
//         length++;
//       }
//     }
//     return length;
//   }
// }
function strLength (s, bUnicode255For1) {
  var length = s.length;
  if (!bUnicode255For1) {
    for (var i in s) {
      if (s.charCodeAt(i) > 255) {
        length++;
      }
    }
  }
  return length;
}
console.log(strLength("djahihdia利好", false)) 