var state = { 
/*	beforeSignX:true,
	afterSignX:false,
	sign:null,*/
	signCheck:null,
	signChecked:false,
}
const actions = {
/*	sign({commit},key){    
	    commit('sign',key)
	},*/
	signCheck({commit},key){    
	    commit('signCheck',key)
	}
}
const mutations = { 
/*	sign(state,key){
	    state.beforeSignX=key.beforeSign;
	    state.afterSignX=key.afterSign;
	},*/
	signCheck(state,key){
	    state.signChecked=key.signChecked;
	}
}
const getters = {
/*	signCheck(state){
	    return state.sign;
	  },
	beforeSignX:(state)=>state.beforeSignX,
	afterSignX:(state)=>state.afterSignX,*/
	signCheck(state){
	    return state.signCheck;
	  },
	signChecked:(state)=>state.signChecked,
}


export default {
	actions,
	mutations,
	state,
	getters
}