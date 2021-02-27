import Home from '../views/Home'

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
        path: '/Home',
        name: 'Home',
        component: Home
    }
]