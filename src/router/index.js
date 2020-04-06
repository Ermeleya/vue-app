import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
import MyProductsList from '@/components/Product/MyProductsList'
import NewProduct from '@/components/Product/NewProduct'
import Product from '@/components/Product/Product'
import Checkout from '@/components/User/Checkout'


Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '',
    name: 'home',
    component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
      },
      {
        path: '',
        name: 'home',
        component: Home
        },
        {
          path: '/register',
          name: 'register',
          component: Register
          },
          {
            path: '/list',
            name: 'list',
            component: MyProductsList
            },
            {
              path: '/new',
              name: 'new',
              component: NewProduct
              },
              {
                path: '/product/:id',
                name: 'product',
                component: Product
                },
                {
                  path: '/checkout',
                  name: 'checkout',
                  component: Checkout
                  },
  ],
  mode: 'history'
})
