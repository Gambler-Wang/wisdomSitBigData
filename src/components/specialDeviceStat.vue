<template>
  <section id="specialDeviceStat">
    <divShell viewTitle="特种设备" :viewJumpLink="url_+'index.html#modules/device/equipment.html'">
      <div class="device-box">
        <div>
          <div>
            <div class="offline">
              <div> 
                <p>
                  <animated-number 
                    :value="deviceInfo.offlineNum" 
                    :formatValue="formatToCount"
                    :duration="500"
                  ></animated-number>
                </p>
                <span>离线</span>
              </div>
            </div>
            <div class="online">
              <div>
                <p>
                  <animated-number 
                    :value="deviceInfo.onlineNum" 
                    :formatValue="formatToCount"
                    :duration="500"
                  ></animated-number>
                </p>
                <span>在线</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <scroll :data="deviceInfo.deviceInfoList" :class-option="optionSingleHeight">
                <ul>
                    <li v-for="(item,index) in deviceInfo.deviceInfoList" :key="index">
                      <p>{{item.showname}}</p>
                      <span>{{item.onlinepNum+'/'+item.totalpNum}}</span>
                    </li>
                </ul>
            </scroll>
          </div>
        </div>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell';
import AnimatedNumber from "animated-number-vue";
import scroll from 'vue-seamless-scroll'
export default {
  name:'specialDeviceStat',
  components:{
    divShell,
    scroll,
    AnimatedNumber
  },
  props:['deviceInfo'],

  data() {
    return {
      listData:[
        {
          title:'元泰未来城一期工程',
          value:'1/8'
        },
        {
          title:'元泰未来城一期工程',
          value:'2/8'
        },
        {
          title:'元泰未来城一期工程',
          value:'3/8'
        },
        {
          title:'元泰未来城一期工程',
          value:'4/5'
        },
        {
          title:'元泰未来城一期工程',
          value:'5/8'
        },
        {
          title:'元泰未来城一期工程',
          value:'6/8'
        },
        {
          title:'元泰未来城一期工程',
          value:'7/5'
        }
      ]
    }
  },
  computed: {
    optionSingleHeight () {
        return {
          singleHeight: 42,
          waitTime: 1500
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
  #specialDeviceStat {
    // width: 250px;
    width: 100%;
    height: 100%;
    & .device-box{
      width: 100%;
      height: 190px;
      display: flex;
      margin-top: 26px;
      &>div{
        &:nth-of-type(1){
          width: 130px;
          height: 170px;
          margin-right: 30px;
          &>div{
            width: 100%;
            height: 100%;
            background: url('../assets/img/offline-bg.png') bottom center no-repeat;
            &>.offline{
              height: 70px;
              text-align: center;
              position: relative;
              &>div{
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 50px;
                height: 30px;
                margin: auto;
                z-index: 1;
                &>p{
                  font-size:24px;
                  font-weight:bold;
                  color:#91D5FB;
                  line-height:20px;
                }
                &>span{
                  font-size:14px;
                  color:#91D5FB;
                  line-height:20px;
                }
              }
            }
            &>.online{
              height: 100px;
              text-align: center;
              background: url('../assets/img/online-bg.png') bottom center no-repeat;
              position: relative;
              &::after{
                content: "";
                position: absolute;
                top: -10px;
                left: 0;
                width: 100%;
                height: 20px;
                background:url('../assets/img/online-close.png');
              }
              &>div{
                text-align: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 50px;
                height: 30px;
                margin: auto;
                z-index: 1;
                &>p{
                  font-size:24px;
                  font-weight:bold;
                  color:rgba(3,67,60,1);
                  line-height:20px;
                }
                &>span{
                  font-size:14px;
                  color:rgba(3,67,60,1);
                  line-height:20px;
                }
              }
            }
          }
        }
        &:nth-of-type(2){
          flex: 1;
          height: 180px;
          padding: 10px 0;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          &>div{
            position: absolute;
            width: 100%;
            z-index: 1;
            & li{
              display: flex;
              justify-content: space-between;
              line-height:30px;
              margin-bottom: 12px;
              & >p{
                font-size:14px;
                color:rgba(145,213,251,1);
                text-align: left;
              }
              &>span{
                width:70px;
                height:28px;
                line-height: 28px;
                background:rgba(35,65,112,1);
                text-align:center;
                color: #2CBBB2;
                font-size: 16px;
                font-weight: 700;
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

