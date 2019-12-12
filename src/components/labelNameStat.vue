<template>
  <section id="labelNameStat">
    <divShell viewTitle="劳务实名" :viewJumpLink="url_+'index.html#modules/lab/labattendancevo.html'">
      <div class="stat">
        <div>
          <div>
            <p>当前工地人数</p>
            <p>(单位：人)</p>
          </div>
          <div>
            <animated-number 
              :value="labelInfo.personNum" 
              :formatValue="formatToCount"
              :duration="500"
            ></animated-number>
          </div>
        </div>
        <div>
          <div>
            <p>考勤设备数</p>
            <p>(单位：台)</p>
          </div>
          <div>
            <animated-number 
              :value="labelInfo.deviceNum" 
              :formatValue="formatToCount"
              :duration="500"
            ></animated-number>
          </div>
        </div>
      </div>
      <div class="label-chart">
        
        <scroll :data="labelInfo.labInfoList" :class-option="optionSingleHeight">
          <template v-for="(item,index) in labelInfo.labInfoList" >
            <div class="li" :key="index">
              <label>{{item.showname}}</label>
              <div>
                <el-progress :percentage="item.percentage" :stroke-width="12" color="#FFFF00"></el-progress>
                <div class="item-value">{{item.currentValue+'(人)'}}</div>
              </div>
            </div>
          </template>
          <!-- <dv-capsule-chart :config="option" style="width:100%;height:200px" /> -->
        </scroll>
      </div>
      <div class="label-line">
         <div class="li">
            <label></label>
            <div>
              <div>20</div>
              <div>40</div>
              <div>60</div>
              <div>80</div>
              <div>100</div>
            </div>
            <span>(%)</span>
          </div>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell'
import AnimatedNumber from "animated-number-vue";
import scroll from 'vue-seamless-scroll'
export default {
  name:'labelNameStat',
  components:{
    divShell,
    AnimatedNumber,
    scroll
  },
  props:['labelInfo'],
  data() {
    return {
      option:{
        data:[
          {
            name: '元泰未来城一期工程2',
            value: 67
          },
          {
            name: '元泰未来城一期工程4',
            value: 55
          },
          {
            name: '元泰未来城一期工程2',
            value: 67
          },
          {
            name: '元泰未来城一期工程4',
            value: 55
          },
          {
            name: '元泰未来城一期工程2',
            value: 67
          },
          {
            name: '元泰未来城一期工程4',
            value: 55
          },
          {
            name: '元泰未来城一期工程2',
            value: 67
          },
          {
            name: '元泰未来城一期工程4',
            value: 55
          },
        ],
        unit: '(人)'
      }
    }
  },
  watch:{
  },
  computed: {
    optionSingleHeight () {
        return {
          singleHeight: 30,
          waitTime: 2000
        }
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
  #labelNameStat {
    // width: 250px;
    width: 100%;
    height: 100%;
    & .stat{
      display: flex;
      justify-content: space-between;
      margin-top: 18px;
      margin-bottom: 18px;
      &>div{
          display: flex;
          justify-content: space-between;
          font-size:30px;
          font-weight:bold;
          color:rgba(64,255,230,1);
          text-align: left;
          &:nth-last-of-type(1){
            margin-right: 20px;
          }
          & p{
            color:rgba(161,214,236,1);
            line-height:16px;
            font-size: 14px;
            text-align: right;
            margin-right: 20px;
          }
      }
    }
    & .label-chart{
      width:100%;
      height:150px;
      overflow: hidden;
      & .li{
        height: 30px;
        line-height: 30px;
        display: flex;
        & label{
          color: #A1D6EC;
          flex: 1;
          margin-right: 20px;
        }
        &>div{
          width: 246px;
          position: relative;
          &>.item-value{
            position: absolute;
            top:0;
            right: 0;
            width: 46px;
            height: 30px;
            line-height: 30px;
            text-align: left;
            color: #A1D6EC;
          }
        }
      }
    }
    & .label-line{
      width:100%;
      & .li{
        height: 30px;
        line-height: 30px;
        display: flex;
        color: #A1D6EC;
        &>label{
          flex: 1;
          margin-right: 20px;
        }
        &>span{
          width: 46px;
          text-align: center;
        }
        &>div{
          width: 200px;
          position: relative;
          display: flex;
          &::after{
            content: "0";
            position: absolute;
            left: 0;
            top: 0;
            height: 30px;
            line-height: 30px;

          }
          &>div{
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
</style>
<style lang="less">
  #labelNameStat{
    & .label-chart{
      & .li{
        &:nth-of-type(odd){
          & .el-progress-bar__inner{
            background-color: #83E0FF!important;
          }
        }
        & .el-progress{
          top: 5px;
          & .el-progress-bar__outer{
            background-color: transparent;
            border:1px solid rgba(35,65,112,1);
            border-radius:6px;
          }
          & .el-progress-bar__inner{
            height: 50%;
            top: 50%;
            margin-top: -3px;
          }
          & .el-progress__text{
            visibility: hidden;
          }
        }
      }
    }
  }
</style>

