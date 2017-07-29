var state = { 
	menus:null,
	show:null,
	coverShow1:false,
}

const actions = {
	show({commit},key){    
	    commit('show',key)
	}

}

const mutations = { 
	show(state,key){
	    state.coverShow1=key.coverShow;
	    console.log(state.coverShow1)
	}
  
}

const getters = {
	show(state){
	    return state.show;
	  },
	coverShow1:(state)=>state.coverShow1,
}


export default {
	actions,
	mutations,
	state,
	getters
}