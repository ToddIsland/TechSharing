import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Login" */ '../views/LoginRegister.vue')
    },
    {
        path: '/special',
        name: 'special',
        component: () => import('../views/specialist.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "Login" */ '../views/User.vue')
    },
    {
        path: '/advancedSearch',
        name: 'advancedSearch',
        // 写高级搜索的爸爸把文件名填一下谢谢
        component: () => import(/* webpackChunkName: "Login" */ '../views/User.vue')
    },
    {
        path: '/paperDisplay',
        name: 'paperDisplay',
        component: () => import(/* webpackChunkName: "Login" */ '../views/PaperDisplay.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
