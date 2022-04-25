/* 牛牛管理这一片牧场，在这片牧场中，一共有n头奶牛，为方便统计，它们排成了一排，编号为1~n。
现在质检员牛妹在检测这些奶牛的质量，她列出了m条特性，只有满足所有特性的奶牛才可称之为优质奶牛。
但是，牛牛现在只知道对于某条特性，某几段连续区间内的奶牛是满足条件的，如果这样依次排查，
会浪费很多时间。由于牛妹时间很急，马上要赶往下一个牧场，所以，牛牛请你帮助他筛选优质奶牛。 */
let t = parseInt(readline());
while (t) {
  const arr = [];
  let n, m;
  const line1 = readline();
  n = parseInt(line1.split(' ')[0]);
  m = parseInt(line1.split(' ')[1]);
  let cur = m;
  while (cur) {
    let k = parseInt(readline());
    let tempArr = (new Array(n + 1)).fill(0);
    while (k) {
      const line2 = readline();
      const left = parseInt(line2.split(' ')[0]);
      const right = parseInt(line2.split(' ')[1]);
      for (let i = left; i <= right; i++) {
        tempArr[i] = 1;
      }
      k--;
    }
    arr.push(tempArr);
    cur--;
  }
  const res = [];
  for (let i = 1; i <= n; i++) {
    let flag = 1;
    for (let j = 0; j < m; j++) {
      if (arr[j][i] == 0) {
        flag = 0;
      }
    }
    if (flag) {
      res.push(i);
    }
  }
  print(res.length);
  print(res.join(' '));
  t--;
}
// 牛牛参加了大胃王比赛，面前摆上了n道美食，若已知每道美食能够提供的饱腹感以及牛牛感到吃撑时的饱腹感至少需要多少，那么，牛牛最少吃几份能够吃撑自己，请告诉他一种吃美食方案。