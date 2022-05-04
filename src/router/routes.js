//路由配置的信息

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
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
        compoent: Login,
        meta: { show: false }
    },


    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    //重定向，在项目跑起来的时候，访问/，立马让他定向到首页
    {
        path: '/',
        redirect: "/home"
    }
]