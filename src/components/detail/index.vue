<template>
  <div class="w goodsDetail">
    <img-list :imgList="imgListUrl"></img-list>
    <detail-title :tagList="tagList"></detail-title>
    <detail-serve></detail-serve>
    <detail-comment></detail-comment>
    <detail-rule :ruleList="ruleList"></detail-rule>
  </div>
</template>
<script>
import imgList from './imgs'
import detailTitle from './title'
import detailServe from './serve'
import detailComment from './comment'
import detailRule from './rule'
export default {
  data(){
    return {
      ruleList:[
        {
          title: '退款权益',
          content:'房东已为您提供预定成功后15分钟内免费取消权益。（该权益不受房源退订规则限制）'
        },
        {
          title: '退款权益',
          content:'房东已为您提供预定成功后15分钟内免费取消权益。（该权益不受房源退订规则限制）'
        }
      ],
      imgListUrl:{
        mainImg:'https://img.meituan.net/phoenix/9c9245df2bf11481404349feacc7ec2c398251.jpg@750w_500h_80Q_1e_1c',
        deImg:[
          'https://img.meituan.net/phoenix/3281e75dee91c41904cd7739c66cca17351749.jpg@1500w_1000h_80Q_1e_1c',
          'https://img.meituan.net/phoenix/79294cf63db98e08d9f432f1bd10a27c450417.jpg@750w_500h_80Q_1e_1c',
          'https://img.meituan.net/phoenix/e6f4563f7095c5242592dcf051731ac6295324.jpg@750w_500h_80Q_1e_1c', 
          'https://img.meituan.net/phoenix/9c9245df2bf11481404349feacc7ec2c398251.jpg@750w_500h_80Q_1e_1c'
        ]
      },
      tagList: [
        '浪漫圆床',
        '独立空间',
        '高清电视',
        '独立卫浴',
        '可停车'
      ]
    }
  },
  components: {
    imgList,
    detailTitle,
    detailServe,
    detailComment,
    detailRule
  }
}
</script>