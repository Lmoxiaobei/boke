import Vue from 'vue'
import Router from 'vue-router' //安装的包名
import HelloWorld from '@/components/HelloWorld' //导入的是页面组件
import Home from '@/components/Home' //导入的是页面组件
// import Top from '@/components/Top' //导入的是页面组件
import Note from '@/components/Note' //
import Exhibitionq from '@/components/Exhibitionq' //
import Exhibition from '@/components/Exhibition' //
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/Note',
            component: Note
        },
        {
            path: '/Exhibitionq',
            component: Exhibitionq
        },
        {
            path: '/Exhibition',
            component: Exhibition
        },
    ],
    mode: 'history' //去除网页链接上面的#
})
