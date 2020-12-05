import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
 
const store = new Vuex.Store({
  state: {
    isLogin:false,
    nowCity: '北京',
    historyCity:[],
    nowProvice:'北京',
    userName:'',
  },
  mutations: {
    changeCity(oldData,newCity){
      console.log(newCity)
      this.state.nowProvice = newCity.provice 
      this.state.nowCity = newCity.city 
      if(this.state.historyCity.includes(newCity)){
        return
      }
    this.state.historyCity.push(newCity.city)
    },
    login(oldData,newData){
      this.state.isLogin = true
      this.state.userName = newData   
    },
    loginOut(){
      this.state.isLogin = false
    }
  }
})
export default store