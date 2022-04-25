// 实现选项卡功能
function init () {
  // TODO 待补充代码
  var tabs = document.querySelectorAll('.tabs>div')
  var content = document.querySelectorAll('#content>div')
  tabs.forEach(function (item, index) {
    item.onclick = function () {
      //标签状态
      // console.log(item)
      //索引值
      // console.log(index)
      tabs.forEach(function (t, i) {
        //所有标签状态
        // console.log(t)
        //标签索引 0、1、2...
        // console.log(i)
        t.className = ''
        content[i].className = ''

      })
      item.className = 'active'
      content[index].className = 'active'

    }

  })

}
init();
