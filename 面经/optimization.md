## 路由按需加载(懒加载)
component:resolve=>(require(['./components/Home.vue'],resolve))
在大型应用程序中，我们可能需要将应用程序分成更小的块，并且仅在需要时从服务器加载组件。