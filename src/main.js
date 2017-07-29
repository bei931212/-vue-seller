// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store/index.js'
import ElementUI from 'element-ui'
import Cookie from 'js-cookie'
import 'element-ui/lib/theme-default/index.css';
import '@/assets/css/reset.css'
import '@/assets/css/public.css'
import VueAwesomeSwiper from 'vue-awesome-swiper' //swiper组件


console.log("7.28.10.03");


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)


const whitelist = ["/login"]; //路由白名单

// router.beforeEach((to, from, next) => {
// 	const token = Cookie.get("token")
// 	//路由控制
// 	if(token){
// 		if(to.path === '/login'){
// 			next({path: "/"})
// 		}else{
// 			//登录后正常访问
// 			next()
// 		}
// 	}else{
// 		if(whitelist.indexOf(to.path) !== -1){
// 			next()
// 		}else{
// 			next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}
//             })
// 		}
// 	}
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
