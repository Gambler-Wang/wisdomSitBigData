<template>
  <div id="app">
    <dv-full-screen-container>
      <router-view/>
      <dv-loading v-if="!loaddingOver"></dv-loading>
    </dv-full-screen-container>
  </div>
</template>

<script>
import _bus from './utils/bus'
export default {
  name: 'App',
  data(){
    return {
      loaddingOver:false
    }
  },
  mounted(){
    var that =this;
    _bus.$on("showloading",function(data){
      that.loaddingOver=false;
    })
    _bus.$on("closeLoading",function(data){
      that.loaddingOver=true;
    })
  },
}
</script>

<style lang="less">
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*color: #2c3e50;*/
  font-size:14px;
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  font-weight:400;
  color:#101010;
  height: 100%;
  width: 100%;
  background: url('./assets/img/bg.jpg') no-repeat center center fixed;
  background-size: cover;
  // min-height: 900px;
  // min-width: 1440px;
  & .border-box-content{
    border-radius: 40px;
    box-shadow: 0 0 35px rgba(92,137,255,.2) inset;
  }
}

  .dv-loading.loading-tip{
    color:#fff;
  }
  .dv-loading{
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    // background: #0e1350;
    
  background: url('./assets/img/bg.jpg') no-repeat center center;
  background-size: cover;
  }
</style>
