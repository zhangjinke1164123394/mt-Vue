<template>
	<div class="navHead">
		<div class="wrap" :style='`background-color:${theme.color}`'>
			<dl class="list">
				<dt>{{theme.title}}</dt>
				<dd v-for="(item,index) in theme.list" :key="item + '' + index" @mouseenter="changeNav(item.value)">{{item.value}}</dd>
			</dl>
		</div>
	</div>
</template>
<script>
export default {
  props:{
    theme: Object
  },
  data(){
    return {
      
    }
  },
  methods: {
    changeNav(e){
      this.$emit('changeNav',e)
    }
  }
}
</script>
<style scoped lang="less">
.navHead {
	margin-top: 10px;
	.wrap {
		padding: 10px 10px;
    height: 20px;
    padding-right: 0px;
		background-color: rgb(255, 166, 0);
		border-radius: 8px 8px 0 0;
	}
	.list {
		padding: 0;
		margin: 0;
		color: #fff;
		dt {
			font-size: 17px;
      font-weight: 550;
      cursor: default;
		}
		dd {
      display: inline-block;
      width: auto;
      // line-height: 20px;
			cursor: pointer;
			position: relative;
			&::after {
				content: "";
				display: block;
				width: 1px;
				height: 1px;
				position: absolute;
				bottom: -12px;
        left: 50%;
        transform: translateX(-50%);
				z-index: 15;
				border: 10px solid transparent;
        border-bottom-color: #fff;
        display: none;
      }
      &:hover::after {
        display: block;
      }
		}
		dd,
		dt {
			display: inline-block;
		}
	}
}
</style>