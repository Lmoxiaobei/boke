import Vue from 'vue'
import Router from 'vue-router' //安装的包名
import HelloWorld from '@/components/HelloWorld' //导入的是页面组件
import Home from '@/components/Home' //导入的是页面组件
import Note from '@/components/Note'
import Exhibitionq from '@/components/Exhibitionq'
import Exhibition from '@/components/Exhibition'
import Exhibitionw from '@/components/Exhibitionw'
import tiaozhuan from '@/components/tiaozhuan'
import tiaozhuanq from '@/components/tiaozhuanq'
import tiaozhuanw from '@/components/tiaozhuanw'
import Ga from '@/components/Ga'
import Jianli from '@/components/Jianli'
import Jianliq from '@/components/Jianliq'
import Xiangce from '@/components/Xiangce'

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
            path: '/Exhibitionw',
            component: Exhibitionw
        },
        {
            path: '/Exhibition',
            component: Exhibition
        },
        {
            path: '/tiaozhuan',
            component: tiaozhuan
        },
        {
            path: '/tiaozhuanq',
            component: tiaozhuanq
        },
        {
            path: '/tiaozhuanw',
            component: tiaozhuanw
        },

        {
            path: '/ga',
            component: Ga
        },
        {
            path: '/jianli',
            component: Jianli
        },
        {
            path: '/Jianliq',
            component: Jianliq
        },
        {
            path: '/Xiangce',
            component: Xiangce
        },

    ],
    mode: 'history' //去除网页链接上面的#
})
