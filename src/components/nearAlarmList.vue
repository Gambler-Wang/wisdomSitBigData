<template>
  <section id="nearAlarmList">
    <divShell viewTitle="临边报警" :viewJumpLink="url_+'index.html#modules/alarm/alarmhost.html'">
      <div class="row">
        <div style="flex: 0 0 70%">报警内容</div>
        <div style="flex: 0 0 30%">报警时间</div>
      </div>
      <div style="position: relative;">
        <div class="list">
          <scroll :data="list" :class-option="optionSingleHeight">
              <!-- <ul>
                  <li v-for="(item,index) in listData" :key="index">
                    <p>{{item.title}}</p>
                    <span>{{item.value}}</span>
                  </li>
              </ul> -->
              <ul>
                <li v-for="item in list" :key="item.id">
                  <div style="flex: 0 0 70%">{{item.record}}</div>
                  <div style="flex: 0 0 30%">{{item.time}}</div>
                </li>
              </ul>
          </scroll>
        </div>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell'
import scroll from 'vue-seamless-scroll'
export default {
  name:'nearAlarmList',
  components:{
    divShell,scroll
  },
  props:['list'],
  data() {
    return {
      // list:[
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      //   {
      //     content:'元泰未来城一星工程PM10值 125ug/m',
      //     itemTime:'2019-03-04 12:12:12'
      //   },
      // ]
    }
  },
  computed: {
    optionSingleHeight () {
        return {
          singleHeight: 38,
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
  #nearAlarmList {
    // width: 250px;
    width: 100%;
    height: 100%;
    & .row{
      width: 100%;
      color: #91D5FB;
      font-size: 12px;
      text-align: center;
      display: flex;
      
      &>div{
        height: 42px;
        line-height: 42px;
      }
    }
    & .list{
      height: 206px;
      width: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      z-index: 1;
      & li{
        width: 100%;
        color: #91D5FB;
        font-size: 12px;
        text-align: center;
        display: flex;
        background:url('../assets/img/table_back.png') center center no-repeat;
        margin-bottom: 10px;
        &>div{
          height: 28px;
          line-height: 28px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
    } 
  }
</style>
<style>
</style>

