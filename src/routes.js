import VueRouter from 'vue-router'
import Index from '@/components/index'
import defaultPage from '@/pages/defaultPage'
// import changeCity from '@/pages/changeCity'
// import detail from '@/pages/detail'
// import searchRes from '@/pages/searchRes'
// import login from '@/pages/login'
// import regiest from '@/pages/regiest'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {
   path: '/',
   redirect:'/index',
   component: Index,
   children: [
     {
      path: 'index',
      name: 'defaultPage',
      component: defaultPage,
     },
     {
      path: 'changeCity',
      name: 'changeCity',
      component: ()=>import('./pages/changeCity')},
     {
      path: 'detail',
      name: 'detail',
      component: ()=>import('./pages/detail')
     },
     {
      path: 'searchRes',
      name: 'searchRes',
      component: ()=>import('./pages/searchRes')
     },
     
    //  {
    //   path: '/login',
    //   name: 'login',
    //   component: login,
    //  },
  ]
  },
  {
    path:'/login',
    name:'login',
    component: ()=>import('./pages/login')
  },
  {
    path:'/regiest',
    name:'regiest',
    component: ()=>import('./pages/regiest')
  },
]
const router = new VueRouter({
  mode: "history",
  routes, // （缩写）相当于 routes: routes
  scrollBehavior(){
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
