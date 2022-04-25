function Pagination (container, total, current) {
  this.total = total;
  this.current = current;
  this.html = html;
  this.val = val;
  this.el = document.querySelector('.pagination'); //TODO: 创建分页组件根节点

  if (!this.el) return;

  this.el.innerHTML = this.html();
  container.appendChild(this.el);
  this.val
  if (this.total <= 1) {
    this.el.className = 'hide'; //TODO: 判断是否需要隐藏当前元素
  }
  function html () {
    if (this.total <= 1) return '';

    var inHtml = '';
    if (this.total <= 5) {
      //范围会在1 ~ this.total
      for (var i = 1; i <= this.total; i++) {
        if (i == this.current) {
          inHtml += '<li class="current">' + i + '</li>'
        } else {
          inHtml += '<li>' + i + '</li>'
        }
      }
    }
    else {
      //3.如果总页数在6页以上
      /*** 3.1 高亮页小于等于5 ***/
      if (this.current <= 5) {
        /*** 3.1.1 高亮页+2 <= 5,不需要换页 ***/
        //此种情况不会出现首页
        if (this.current + 2 <= 5) {
          //范围会在1 ~ 5
          for (var i = 1; i <= 5; i++) {
            if (i == this.current) {
              inHtml += '<li class="current">' + i + '</li>'
            } else {
              inHtml += '<li>' + i + '</li>'
            }
          }

        }
        else {
          /*** 3.1.2 高亮页+2 > 5,需要换页 ***/
          //此种情况需要首页
          inHtml += '<li>首页</li>'
          //保持高亮页前后各有2页
          for (var i = this.current - 2; i <= this.current + 2; i++) {
            if (i == this.current) {
              inHtml += '<li class="current">' + i + '</li>'
            } else {
              inHtml += '<li>' + i + '</li>'
            }
          }
        }
        //最后加上末页
        inHtml += '<li>末页</li>'
      }
      else {
        /** 3.2 高亮页大于5 ***/
        /*** 3.2.1 高亮页满足前后都各有两页 ***/
        //此种情况肯定会有首页
        inHtml += '<li>首页</li>'
        //保持高亮页前后各有2页
        if (this.current + 2 <= this.total) {
          for (var i = this.current - 2; i <= this.current + 2; i++) {
            if (i == this.current) {
              inHtml += '<li class="current">' + i + '</li>'
            } else {
              inHtml += '<li>' + i + '</li>'
            }
          }
        }
        else {
          /*** 3.2.2 高亮页不满足前后都各有两页 ***/
          //范围在 (this.total - 4) ~ this.total
          // 因为this.current + 2 > this.total,要么高亮页是末页，要么高亮页后一页是末页，而首页与末页相差4
          for (var i = this.total - 4; i <= this.total; i++) {
            if (i == this.current) {
              inHtml += '<li class="current">' + i + '</li>'
            } else {
              inHtml += '<li>' + i + '</li>'
            }
          }
        }
        //TODO: 生成组件的内部html字符串
        //判断是否需要加上末页
        if (this.current + 2 < this.total) {
          inHtml += '<li>末页</li>'
        }
      }
    }
    return inHtml;
  }

  function val (current) {
    if (arguments.length === 0) return this.current;
    if (current < 1 || current > this.total || current === this.current) return;
    this.current = current;
    this.el.innerHTML = this.html();
  };
}

function  {     
	var el = document.getElementById('jsContainer');  
	el.innerHTML = '';    
	var total = 0;     
	var current = 0;   
	new Pagination(el, total, current);     
	var ul = el.querySelector('ul');     
	var result = ul.classList.contains('hide');     
	console.log(result);     
	return result; }