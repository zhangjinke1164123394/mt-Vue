<template>
  <div class="w myFooter">
      <footer-list></footer-list>
    <footer-btm></footer-btm>
  </div>

</template>
<script>
import footerBtm from '@/components/footer/footerBtm'
import footerList from '@/components/footer/footerList'
export default {
  components: {
    footerList,
    footerBtm
  }
  
}
</script>
<style scoped>
 .myFooter {
   margin-top: 60px;
 }
</style>