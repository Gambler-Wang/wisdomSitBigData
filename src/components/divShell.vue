<template>
  <section class="divShell">
    <dv-border-box-1>
      <div class="title" :style="{fontSize:fontSize}">
        {{viewTitle}}
        <a v-show="showLink" @click="exit">more > ></a>
      </div>
      <div class="con" :style="{padding:conPadding}">
        <slot></slot>
      </div>
    </dv-border-box-1>
  </section>
</template>

<script>
export default {
  name:'divShell',
  props:{
     viewTitle:{
      type: String,
      default: '默认标题'
     },
     viewJumpLink:{
      type: String,
      default: 'http://www.baidu.com'
     },
     showLink:{
      type: Boolean,
      default: true
     },
     fontSize:{
      type: String,
      default: '18px'
     },
     conPadding:{
      type: String,
      default: '0 28px'
     },
  },
  data() {
    return {
      
    }
  },
  created(){
    
  },
  mounted() {

  },
  methods: {
    exit(){
      this.$exitFullScreen();
      window.location=this.viewJumpLink;
    },
  }
}
</script>

<style scoped lang="less">
  .divShell {
    // width: 250px;
    width: 100%;
    height: 100%;
    & .title{
      width: 100%;
      height: 48px;
      text-align: center;
      font-size:18px;
      font-weight:bold;
      color:rgba(64,255,230,1);
      text-shadow:0 0 8px rgba(64,255,230,1);
      line-height: 48px;
      position: relative;
      padding: 0 28px;
      box-sizing: border-box;
      background:url("../assets/img/pannel-title.png") no-repeat center center ;
      background-size: cover;
      &>a{
        position: absolute;
        top:0;
        right: 28px;
        height: 100%;
        line-height: 48px;
        font-size: 14px;
        color: #A3DFED;
        cursor: pointer;
      }
    }
    & .con{
      height: ~'calc(100% - 48px)';
      padding: 0 28px;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
</style>
<style>
</style>

