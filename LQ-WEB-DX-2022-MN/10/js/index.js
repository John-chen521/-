const app = new Vue({
  el: "#app",
  data: {
    caidan: [],
    children: []
  },
  // 在此处补全代码，实现二级菜单搜索功能
  async created () {
    axios.get("./data.json").then((res) => {
      this.caidan = res.data
      this.children = res.data.caidan
      console.log(this.caidan)
    })
  },
});
