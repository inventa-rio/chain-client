import Home from '../views/Home'
import Login from '../views/Login'
import Historic from '../views/Historic'
import Perfil from '../views/Perfil'
import Discount from '../views/Discount'
import Create from '../views/Create'

export default [
    {
        path: '*',
        redirect: '/Home',
    },
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/Historic',
        name: 'Historic',
        component: Historic
    },
    {
        path: '/Perfil',
        name: 'Perfil',
        component: Perfil
    },
    {
        path: '/Discount',
        name: 'Discount',
        component: Discount
    },
    {
        path: '/Create',
        name: 'Create',
        component: Create
    }
]