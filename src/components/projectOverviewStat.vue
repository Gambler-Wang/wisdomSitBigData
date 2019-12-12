<template>
  <section id="projectOverviewStat">
    <divShell viewTitle="项目概况" :viewJumpLink="url_+'index.html#modules/sys/project.html'">
        <div class="circle-box">
          <div v-for="(item,index) in circleList" :key="index">
            <CircleProgress  
              :id="item.id"
              :radius="5"
              :progress="item.progress"
              :isAnimation="true"
              backgroundColor="rgba(35,65,112,1)"
              :barColor="item.barColor"
            >
            <!-- <el-progress width="75" type="dashboard" stroke-width="5" :percentage="item.progress" :color="colors"></el-progress> -->
              <!-- <dv-digital-flop
               
              :style="{
                fontSize: 16,
                fill: '#FFFFFF',
                width:'100%',
                height:'100%'
              }" 
              :config="{
                number: [item.progress],
                content: '{nt}%'
              }" /> -->
            </CircleProgress>
          </div>
        </div>
        <div class="progress-label">
          <div  v-for="(item,index) in circleList" :key="index">
            <p>{{item.name}}</p>
            <div class="line"></div>
          </div>
        </div>
        <div class="progress-number">
          <div  v-for="(item,index) in circleList" :key="index">
            <div class="sign">
              <animated-number 
                :value="item.count" 
                :formatValue="formatToCount"
                :duration="500"
              ></animated-number>
              <!-- :formatValue="formatToPrice"  -->
            </div>
          </div>
        </div>
        <div class="list">
          <scroll :data="companyList" :class-option="optionSingleHeight">
            <ul>
              <li v-for="(item,index) in companyList" :key="index">
                <p>
                  <span>{{item.progressName}}</span>
                  <span>{{item.shortName}}</span>
                </p>
                <a @click="$go('/index?projectId='+item.id)">{{item.progressStage+' >'}}</a>
              </li>
            </ul>
          </scroll>
          
        </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell';
import CircleProgress  from 'vue-circleprogressbar';
import AnimatedNumber from "animated-number-vue";
import scroll from 'vue-seamless-scroll'
export default {
  name:'projectOverviewStat',
  components:{
    divShell,
    CircleProgress,
    AnimatedNumber,
    scroll
  },
  props:{
     circleList:{
      type: Array,
      default: []
     },
     companyList:{
      type: Array,
      default: []
     },
  },
  computed: {
    optionSingleHeight () {
        return {
          singleHeight: 64,
          waitTime: 2000
        }
    }
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
  #projectOverviewStat {
    // width: 250px;
    width: 100%;
    height: 100%;
    & .circle-box{
      display: flex;
      align-items: center;
      &>div{
        flex: 25%;
        height: 100%;
      }
      height: 75px;
      margin-top: 30px;
      margin-bottom: 10px;
    }
    & .progress-label{
      display: flex;
      margin-bottom: 26px;
      &>div{
        flex: 25%;
        text-align: center;
        color: #A1D6EC;
        &>p{
          margin-bottom: 18px;
        }
        & .line{
          width: 100%;
          height: 1px;
          background-color: #0048FF;
          opacity:0.47;
          position: relative;
          &::after{
            content: '';
            position: absolute;
            height: 8px;
            width: 8px;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            margin-top: -4px;
            margin-left: -4px;
            background-color: #83E0FF;
          }
        }
      }
    }
    & .progress-number{
      display: flex;
      margin-bottom: 36px;
      &>div{
        flex: 25%;
        display: flex;
        align-items: center;
        justify-content:center;
        &>.sign{
          width: 70px;
          height: 73px;
          background:url('../assets/img/sign-bg.png') center center no-repeat;
          background-size: 100% 100%;
          text-align: center;
          &>span{
            font-size:24px;
            font-weight:bold;
            color:rgba(64,255,230,1);
            line-height:73px;
          }
        }
      }
    }
    & .list{
      height: 250px;
      width: ~'calc(100% - 56px)';
      overflow: hidden;
      position: absolute;
      z-index: 1;
      & li{
        height:46px;
        line-height: 46px;
        background:rgba(35,65,112,0.27);
        border-radius:4px;
        display: flex;
        justify-content: space-between;
        padding: 0 18px 0 10px;
        box-sizing: border-box;
        color: #A1D6EC;
        margin-bottom: 18px;
        cursor: pointer;
        &>p{
          display: flex;
          &>span{
            &:nth-of-type(1){
              width: 60px;
              height:28px;
              line-height: 28px;
              background:rgba(242,155,118,1);
              border-radius:4px;
              margin-right: 10px;
              color: #fff;
              font-size: 14px;
              text-align: center;
              margin-top: 8px;
            }
            &:nth-of-type(2){
              flex: 1;
            }
          }
        }

      }
    }
  }
</style>
<style>
</style>

