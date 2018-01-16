import Vue from 'vue'
import App from './components/App'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)

import store from './store'

import DashBoard from './components/Dashboard'
import Signin from './components/Signin'
import Signup from './components/Signup'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: DashBoard },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup }
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('SIGN_IN', user)
    router.push('/dashboard')
  } else {
    router.push('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
