
function getweather () {
  //TODO：请补充代码
  $.get("js/weather.json", function (resp) {

    var result = resp.result
    // console.log(result)
    var doc = document
    var item = doc.querySelectorAll('.item')
    var i = 0
    for (var index in result) {
      // console.log(item[i].getElementsByTagName('img')[0].src)
      // console.log(result[index].weather_icon)
      item[i].getElementsByTagName('img')[0].src = result[index].weather_icon
      var mess = item[i].querySelector('.item-mess').getElementsByTagName('div')
      mess[0].innerHTML = result[index].weather
      mess[1].innerHTML = result[index].temperature
      mess[2].innerHTML = result[index].winp
      var span = mess[3].getElementsByTagName('span')
      span[0].innerHTML = result[index].days
      span[1].innerHTML = result[index].week
      i++
    }
    // Document 对象
    // 每个载入浏览器的 HTML 文档都会成为 Document 对象。
    // Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。
    // 提示：Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问。

  })
}

getweather();