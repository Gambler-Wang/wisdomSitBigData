<template>
  <section id="scrollJump">
    <span :class="{active : btnActive == ''}" @click="chooseAll">全部</span>
    <div>
      <div @click="leftClick"></div>
      <div>
        <div :style="{left:scrollLeft,transition:scrollTransition}">
          <span v-for="(item,index) in list" :key="index" :class="{active : btnActive == item.projectId}" @click="chooseBtnType(item)" :title="item.name">{{item.name}}</span>
        </div>
      </div>
      <div @click="rightClick"></div>
    </div>
  </section>
</template>

<script>
export default {
  name:'scrollJump',
  props:['list'],
  data() {
    return {
      
      btnList:[
        {
          name:'元泰未来城1期工程',
          type:'元泰未来城1期工程'
        },
        {
          name:'元泰未来城2期工程',
          type:'元泰未来城2期工程'
        },
        {
          name:'元泰未来城3期工程',
          type:'元泰未来城3期工程'
        },
        {
          name:'元泰未来城4期工程',
          type:'元泰未来城4期工程'
        },
        {
          name:'元泰未来城5期工程',
          type:'元泰未来城5期工程'
        },
        {
          name:'元泰未来城6期工程',
          type:'元泰未来城6期工程'
        },
        {
          name:'元泰未来城7期工程',
          type:'元泰未来城7期工程'
        },
        {
          name:'元泰未来城8期工程',
          type:'元泰未来城8期工程'
        },
        {
          name:'元泰未来城1期工程',
          type:'元泰未来城1期工程'
        },
        {
          name:'元泰未来城2期工程',
          type:'元泰未来城2期工程'
        },
        {
          name:'元泰未来城3期工程',
          type:'元泰未来城3期工程'
        },
        {
          name:'元泰未来城4期工程',
          type:'元泰未来城4期工程'
        },
      ],
      btnActive:'',
      scrollLeft:'0px',
      scrollTransition:'all 0.3s',
      currentIndex:4,
    }
  },
  created(){
    this.btnActive=this.$route.query.projectId||'';
  },
  mounted() {

  },
  methods: {
    chooseBtnType(item){
      if(item.projectId==this.$route.query.projectId) return;
      this.btnActive=item.projectId;
      this.$go('/index?projectId='+item.projectId);
      this.$emit('changePage',1);
    },
    chooseAll(){
      if(!this.$route.query.projectId) return;
      this.$go('/index');
      this.btnActive='';
      this.$emit('changePage',0);
    },

    leftClick(){
      var currentScrollValue=parseInt(this.scrollLeft);
      this.scrollTransition='all 0.3s';
      currentScrollValue = currentScrollValue+166;
      this.scrollLeft=currentScrollValue+'px';
      this.currentIndex--;
      if(this.currentIndex==3){
          var that =this;
          setTimeout(function(){
            that.scrollTransition='none';
            that.scrollLeft=-166*(that.list.length-5)+'px';
            that.currentIndex=that.list.length-1;
          },250)
      }

    },
    rightClick(){
        var currentScrollValue=parseInt(this.scrollLeft);
        this.scrollTransition='all 0.3s';
        currentScrollValue = currentScrollValue-166;
        this.scrollLeft=currentScrollValue+'px';
        this.currentIndex++;
        if(this.currentIndex==this.list.length){
          var that =this;
          setTimeout(function(){
            that.scrollTransition='none';
            that.scrollLeft='0px';
            that.currentIndex=4;
          },250)
        }
    }
  }
}
</script>

<style scoped lang="less">
  #scrollJump {
    // width: 250px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    height: 28px;
    &>span{
      width: 50px;
      height: 28px;
      line-height: 28px;
      font-size: 14px;
      color: #08164E;
      background:rgba(64,255,230,1);
      text-align: center;
      margin: 0 20px;
      border-radius: 2px;
      border: 1px solid #2E4B78;
      cursor: pointer;
      &.active{
        background:#0C264F;
        color: #40FFE6;
      }
      &:hover{
        background:#0C264F;
        color: #40FFE6;
      }
    }
    &>div{
      flex:1;
      height: 100%;
      display: flex;
      justify-content: space-between;
      &>div{
        &:nth-of-type(1){
          width: 28px;
          height: 28px;
          background:url('../assets/img/left-arrow.png') center center no-repeat;
          margin-right: 26px;
          cursor: pointer;
        }
        &:nth-of-type(3){
          width: 28px;
          height: 28px;
          background:url('../assets/img/right-arrow.png') center center no-repeat;
          margin-left: 26px;
          cursor: pointer;
        }
        &:nth-of-type(2){
          overflow: hidden;
          position: relative;
          flex:1;
          &>div{
            position: absolute;
            height: 100%;
            width: 10000px;
            left: 0;
            top:0;
            transition: all 0.3s;
            &>span{
              display: inline-block;
              height: 28px;
              width: 158px;
              line-height: 28px;
              padding: 0 8px;
              font-size: 16px;
              color: #08164E;
              background:rgba(64,255,230,1);
              text-align: center;
              margin-right: 8px;
              border-radius: 2px;
              border: 1px solid #2E4B78;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              box-sizing: border-box;
              cursor: pointer;
              &.active{
                background:#0C264F;
                color: #40FFE6;
              }
              &:hover{
                background:#0C264F;
                color: #40FFE6;
              }
            }
          }
        }
      }
    }
  }
</style>
<style>
</style>

