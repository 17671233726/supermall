import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("views/detail/Detail");

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showTabbar: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            showTabbar: true
        }
    },
    {
        path: '/cart',
        component: Cart,
        meta: {
            showTabbar: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showTabbar: true
        }
    },
    {
        path: '/detail',
        component: Detail,
        meta: {
            showTabbar: false
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router