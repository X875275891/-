import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    // 注册页面
    {
        path: '/register',
        component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/register.vue'),
        meta: { title: '注册页面' }
    },
    // 登录
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
        meta: { title: '登录' }
    },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
        meta: { title: '自述文件' },
        children: [
            
            {
                path: '/dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                meta: { title: '系统首页' }
            },
            // 教师端 添加论文、专利、项目
            {
                path: '/addPaper',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/addPaper.vue'),
                meta: { title: '添加论文' }
            },
            {
                path: '/addPatent',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/addPatent.vue'),
                meta: { title: '添加专利' }
            },
            {
                path: '/addItem',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/addItem.vue'),
                meta: { title: '添加项目' }
            },
            // 管理端
            // 管理论文、专利、项目
            {
                path: '/controlPapper',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/controlPapper.vue'),
                meta: { title: '管理论文' }
            },
            {
                path: '/controlPatent',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/controlPatent.vue'),
                meta: { title: '管理专利' }
            },
            {
                path: '/controlItem',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/controlItem.vue'),
                meta: { title: '管理项目' }
            },
            // 教师管理  添加教师、账号管理
            {
                path: '/addTeacher',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/addTeacher.vue'),
                meta: { title: '添加教师' }
            },
            {
                path: '/account ',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/account .vue'),
                meta: { title: '账号管理' }
            },
            // 刊库管理
            {
                path: '/controlPeriodical',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/controlPeriodical.vue'),
                meta: { title: '刊库管理' }
            },
            // 个人信息 修改密码、本人成就
            {
                path: '/controlPeriodical',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/controlPeriodical.vue'),
                meta: { title: '刊库管理' }
            },

            // 普通用户 仅查看下载
            {
                path: '/achievement',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/achievement.vue'),
                meta: { title: '本人成就' }

            },
            
            {
                // 权限页面
                path: '/permission',
                component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                meta: { title: '权限测试', permission: true }
            },
            {
                path: '/404',
                component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                meta: { title: '404' }
            },
            {
                path: '/403',
                component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                meta: { title: '403' }
            },
        ]
    },
    
    {
        path: '*',
        redirect: '/404'
    }
]
const DynamicRoutes = [
    {
        path: '/',
        redirect: '/dashboard',
        meta:{
            requireAuth: true
        }
    },
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })

export default router
