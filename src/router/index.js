import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile")
const Detail = () => import("views/detail/Detail");

const Login = () => import("views/profile/childComps/login/Login")
const Register = () => import("views/profile/childComps/register/Register")

const Community=()=>import("views/community/Community")

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
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path:'/community',
        component:Community
    }
]

const router = new VueRouter({
    routes,
})
export default router