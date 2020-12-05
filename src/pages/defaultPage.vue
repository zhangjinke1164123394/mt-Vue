<template>
  <div class="defaultPage">
    <el-row>
      <el-col :span="6">
        <default-meau ></default-meau>
      </el-col>
      <el-col :span="18">
        <my-main ></my-main>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <my-nav></my-nav>
      </el-col>
      
    </el-row>
  </div>
</template>
<script>
import defaultMeau from '@/components/main/defaultMeau'
import myMain from '@/components/main/index'
import myNav from '@/components/nav/index'
export default {
  components:{
    defaultMeau,
    myMain,
    myNav
  }
}
</script>