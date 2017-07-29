var state = { 
	index:"1",
}

const actions = {
	changeIndex({commit},index){
		commit("setIndex",index)
	}

}

const mutations = { 
	setIndex(state,index){
		state.index=index
	}
  
}

const getters = {
	index(state){
		return state.index;
	}
}


export default {
	actions,
	mutations,
	state,
	getters
}