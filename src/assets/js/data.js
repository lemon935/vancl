import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    login_state:false,
    user:[1],
    passwd:[1],
    ts:[],
    r:1,
    user_now:'',
  },
  mutations: {
    increment (state) {
      state.count++
    },

    adduser(state,x){
      state.user.push(x)
    },

    addpasswd(state,y){
      state.passwd.push(y)
    },

    login_succeed(state,x){
      state.login_state=x
      console.log(this.login_state)
    },
    
    login_exit(){
      state.login_state=false
    },
    login_user(state,x){
      state.user_now=x
    },
    go(state,a){
      state.r=a
    }
    
  }
})