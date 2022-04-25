function bind (cardno, password) {
  //Todo:补充代码
  //   ajax() 方法通过 HTTP 请求加载远程数据。
  // 该方法是 jQuery 底层 AJAX 实现。简单易用的高层实现见 $.get, $.post 等。
  // $.ajax() 返回其创建的 XMLHttpRequest 对象。
  // 大多数情况下你无需直接操作该函数，除非你需要操作不常用的选项，以获得更多的灵活性。
  // 最简单的情况下，$.ajax() 可以不带任何参数直接使用。
  // 注意：所有的选项都可以通过 $.ajaxSetup() 函数来全局设置。
  // url	规定发送请求的 URL。默认是当前页面。
  // type	规定请求的类型（GET 或 POST）。
  // success(result,status,xhr)	当请求成功时运行的函数。
  $.ajax(
    {
      url: "js/cardnolist.json",
      type: "GET",
      success: function (data) {
        console.log(data)
        for (let i = 0; i < data.cardnolist.length; i++) {
          let item = data.cardnolist[i]
          console.log(item.cardno)
          console.log(cardno)
          if (item.cardno == cardno && item.password == password) {
            $("#tip1").removeClass('fade')
            $("#tip2").addClass('fade')
            return false
          } else {
            $("#tip2").removeClass('fade')
            $("#tip1").addClass('fade')

          }
        }
      }
    }
  )

}
$(document).ready(function () {
  $("#btnsubmit").click(function () {
    //卡号 选择器拿到文本框中所输入的内容
    let cardno = $("#exampleInputCardno").val();
    //密码
    let password = $("#exampleInputPassword").val();
    bind(cardno, password);
  });
});