//路由配置的信息
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
export default [
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/search/:keyword",
        // path: "/search",
        component: Search,
        meta: { show: true },
        name: "search",
        //路由是可以给组件传递props的
        //函数的写法才是重要的
        props: (route) => ({
            keyword: route.params.keyword,
            big: route.query.big
        })
    },
    {
        path: "/login",
        component: Login,
        meta: { show: true }
    },


    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '/',
        redirect: "/home"
    },
]