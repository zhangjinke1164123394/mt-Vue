<template>
  <div class="changeCity">
   <my-select></my-select>
    <el-row class="hotSearch" :gutter="10">
      <el-col :span="24">
        热门搜索：<span style="margin-left:15px" v-for="(item,index) in hotList" :key="index + item">
          <router-link to="#">
             {{item.name}}
          </router-link>
         
          </span>
      </el-col>
    </el-row>
    <el-row class="historySearch" :gutter="10">
      <el-col :span="24">
        最近选择：<span style="margin-left:15px" v-for="(item,index) in historyCity" :key="index + item">
           <router-link to="#">
             {{item}}
          </router-link>  
        </span>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import { mapState } from 'vuex'
import mySelect from './select'
import axios from 'axios'
axios.defaults.baseURL='https://open.duyiedu.com'
export default {
  data (){
    return {
      // historyList:[],
      hotList:[]
    }
  },
  components: {
    mySelect
  },
  computed :{
    ...mapState(['historyCity'])
  },
  created(){
    axios.get('/api/meituan/city/cityList.json',{
      params:{
        appkey:'zjk123123_1588247785619'
      }
    }).then(res=>{
      this.hotList = res.data
    })
  },

}
</script>
<style scoped lang="less">
  .changeCity {
    margin-top: 80px;
    .hotSearch, .historySearch {
      line-height: 40px;
      margin-top: 10px;
    }
  }
</style>