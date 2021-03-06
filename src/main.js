import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Cars from './components/Cars.vue'
import AddCar from './components/AddCar.vue'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';



Vue.use(VueRouter) 
Vue.config.productionTip = false


const routes = [
  { path: '/cars', component:Cars,props:true},
  { path: '/add', component:AddCar,props:true},
  { path: '/edit/:id', component:AddCar,props:true},
  
]

const router = new VueRouter({
    routes:routes,
    mode: 'history',
    //moze i samo routes
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
