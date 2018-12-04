import Vue from 'vue'
import Router from 'vue-router'

import Input from 'pages/login/input'

Vue.use(Router)

/* 初始路由 */
export default new Router({
    routes: [
        {
            path: '/login',
            component: Input
        }
    ]
})
