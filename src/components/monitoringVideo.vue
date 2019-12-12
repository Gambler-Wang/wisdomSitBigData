<template>
  <section id="monitoringVideo">
    <divShell viewTitle="企业语录:  行稳致远  百年长安" 
    :showLink="false"  viewJumpLink="http://www.baidu.com">
      <div class="video-box">
        <!-- <img src="../assets/img/xxx.png" alt=""> -->
        <video  autoplay="autoplay" muted="true"  loop src="../assets/test.mp4"></video>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell'
export default {
  name:'monitoringVideo',
  components:{
    divShell
  },
  props:{
     
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

  }
}
</script>

<style scoped lang="less">
  #monitoringVideo {
    // width: 250px;
    width: 100%;
    height: 100%;
    & .video-box{
      width: 100%;
      height: ~'calc(100% - 50px)';
      // img{
      //   width: 100%;
      //   height: 100%;
      // }
      video{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
<style>
</style>

