//路由配置的信息
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'




export default [
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车而来
            if (from.path == "/shopcart") {
                next()
            } else {
                //其他的路由组件而来，停留在当前
                next(false)
            }
        }
    },
    {
        path: "/center",
        component: Center,
        meta: { show: true },
        //二级路由组件
        children: [
            {
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                //重定向
                path: '/center',
                redirect: '/center/myorder '
            }
        ]
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须是从购物车而来
            if (from.path == "/trade") {
                next()
            } else {
                //其他的路由组件而来，停留在当前
                next(false)
            }
        }
    },
    {
        path: "/home",
        component: () => import("@/pages/Home"),
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