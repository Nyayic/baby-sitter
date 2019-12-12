import Vue from 'vue'
import App from './App.vue'
import VueCarousel from '@chenfengyuan/vue-carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import VueAxios from 'vue-axios';
import axios from 'axios';

import VueRouter from 'vue-router';


window.$= require('jquery')
window.JQuery = require('jquery')

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import HomeComponent from './components/HomeComponent'
import AppLogin from './components/AppLogin'
import AppAbout from './components/AppAbout'
import StaffRegister from './components/StaffRegister'
import ChildRegister from './components/ChildRegister'

//employees
/* import AppEmployeeForm from './components/AppEmployeeForm'
import AppEmployeeTable from './components/AppEmployeeTable'
 */
Vue.component(VueCarousel.name, VueCarousel);


Vue.config.productionTip = false

const routes = [
  {
      name: 'home',
      path: '/',
     component: HomeComponent
     
  },

 
  {
    name: 'login',
    path: '/login',
   component: AppLogin  
},
{
  name: 'About-us',
  path: '/About-Us',
 component: AppAbout  
},
{
  name: 'register',
  path: '/register',
 component: StaffRegister  
},
 {
   name: 'child',
  path: '/child',
 component: ChildRegister  
},
]

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');

new Vue({
  render: h => h(App),
}).$mount('app')
