import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getData from "./modules/getData.js"
import header from "./modules/header.js"
import manager from "./modules/manager.js"
export default new Vuex.Store({
	modules:{
		getData,
		header,
		manager
	}
})