<template>
  <section id="nearAlarmStat">
    <divShell viewTitle="临边报警" :viewJumpLink="url_+'index.html#modules/alarm/alarmhost.html'">
      <div id="alarm-echart-box">

      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell'
const echarts = require('echarts');
export default {
  name:'nearAlarmStat',
  components:{
    divShell
  },
  props:['alarmLabelList','alarmValueList'],
  data() {
    return {
      chartObj:null,
      option:{
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              }
          },
          grid: {
              left: '130',
              right: '35',
              bottom: '25',
              top:'20'
          },
          xAxis: {
              type: 'value',
              name: '(次)',
              nameTextStyle :{
                color:'#8AB1DF',
              },
              minInterval:1,
              axisLabel:{
                color:'#8AB1DF',
              },
              axisTick:{
                show:false
              },
              axisLine:{
                lineStyle:{
                  color:'#0048FF',
                  opacity:0.2
                }
              },
              splitLine:{
                lineStyle:{
                  color:'#0048FF',
                  type:'solid',
                  opacity:0.2
                }
              },
          },
          yAxis: {
              type: 'category',
              axisLabel:{
                color:'#8AB1DF',
              },
              axisTick:{
                show:false
              },
              axisLine:{
                lineStyle:{
                  color:'#0048FF',
                  opacity:0.2
                }
              },
              data:[]
              // data: ['元泰未来城一期工程1','元泰未来城一期工程2','元泰未来城一期工程3','元泰未来城一期工程4','元泰未来城一期工程5','总报警次数']
          },
          series: [
              {
                  type: 'bar',
                  data:[],
                  // data: [ 
                  //   {
                  //     value:20
                  //   },
                  //   {
                  //     value:30
                  //   },
                  //   {
                  //     value:15
                  //   },
                  //   {
                  //     value:30
                  //   },
                  //   {
                  //     value:5
                  //   },
                  //   {
                  //     value:100,
                  //     itemStyle:{
                  //       color:'#E60012'
                  //     },
                  //   },
                  // ],
                  itemStyle:{
                    color:'#FF6E02'
                  },
                  label: {
                      normal: {
                          show: true,
                          position: 'inside'
                      }
                  },
              }
          ]
      }
    }
  },
  watch:{
    alarmValueList:{
      deep:true,
      handler(){
        this.option.yAxis.data=this.alarmLabelList;
        this.option.series[0].data=this.alarmValueList;
        this.chartObj.setOption(this.option);
      }
    }
  },
  created(){
    
  },
  mounted() {
    this.$nextTick(()=>{
      this.chartObj = echarts.init(document.getElementById('alarm-echart-box'));
      this.option.yAxis.data=this.alarmLabelList;
      this.option.series[0].data=this.alarmValueList;
      this.chartObj.setOption(this.option);
    })
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  #nearAlarmStat {
    // width: 250px;
    width: 100%;
    height: 100%;
    & #alarm-echart-box{
      width: 100%;
      height: 250px;
    }
  }
</style>
<style>
</style>

