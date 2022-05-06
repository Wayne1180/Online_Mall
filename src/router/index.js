//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
import routes from './routes'
import store from "@/store"


//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace
//第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
//第二个参数：成功回调
//第三个参数：失败的回调
//call||apply区别
//相同点，都可以调用函数一次，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resole, reject) {
    if (resole && reject) {
        originReplace.call(this, location, resole, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
//配置路由
let router = new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})

//全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
    //to:可以获取到你要跳转到哪个路由
    //from：可以获取到你从哪个路由而来的信息
    //next：放行函数 next()放行 next(path)放行到指定路由 next(false) 
    // next()
    //用户登录了，才会有token，未登录一定不会有token
    let token = store.state.user.token
    //用户信息
    let name = store.state.user.userInfo.name
    if (token) {
        //用户已经登陆了，还想去login，不放行
        if (to.path == '/login') {
            next('/home')
        } else {
            //登陆了，但是去的不是login
            //如果用户名已有
            if (name) {
                next()
            } else {
                //没有用户信息，派发action，让仓库存储用户信息再跳转
                try {
                    //获取用户信息成功

                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效，获取不到用户的信息
                    //清除token
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }

        }
    } else {
        //未登录暂时没有处理完毕
        next()
    }
})

export default router