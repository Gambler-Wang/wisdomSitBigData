<template>
  <section id="safeManageStat">
    <divShell viewTitle="安全管理" :viewJumpLink="url_+'index.html#modules/safety/safetyreport.html'">
      <div id="safe-echart-box">

      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell'
const echarts = require('echarts');
export default {
  name:'safeManageStat',
  components:{
    divShell
  },
  props:['safeLabelList','safeValueList'],
  data() {
    return {
      chartObj:null,
      option : {
          grid: {
              left: '30',
              right: '0',
              bottom: '25',
              top:'20'
          },
          tooltip : {
              // trigger: 'item',
              trigger: 'axis',
              axisPointer : {            
                  type : 'shadow'       
              }
          },
          xAxis: {
              type: 'category',
              //data: ['隐患上报', '安全检查', '安全整改', '整改复查'],
              data:[],
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
              }
          },
          yAxis: {
              type: 'value',
              minInterval:1,
              axisLabel:{
                color:'#8AB1DF',
              },
              axisTick:{
                show:false
              },
              splitLine:{
                lineStyle:{
                  color:'#0048FF',
                  type:'solid',
                  opacity:0.2
                }
              },
              axisLine:{
                lineStyle:{
                  color:'#0048FF',
                  opacity:0.2
                }
              }
          },
          series: [{
              type: 'bar',
              barWidth : 30,
              itemStyle:{
                normal: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                          {offset: 1, color: '#40FFE6'},
                          {offset: 0, color: '#2EA4AE'}
                      ]
                  )
                },
              },
              data:[],
              // data: [
              //   {
              //     itemStyle:{
              //       normal: {
              //         color: new echarts.graphic.LinearGradient(
              //             0, 0, 0, 1,
              //             [
              //                 {offset: 1, color: '#FF6E02'},
              //                 {offset: 0, color: '#FDA360'}
              //             ]
              //         )
              //       },
              //     },
              //     value:90
              //   },
              //   {
              //     value:70
              //   },
              //   {

              //     value:35
              //   },
              //   {

              //     value:10
              //   }
              // ],
          }]
      }
    }
  },
  watch:{
    safeValueList:{
      deep:true,
      handler(){
        this.option.xAxis.data=this.safeLabelList;
        this.option.series[0].data=this.safeValueList;
        this.chartObj.setOption(this.option);
      }
    }
  },
  created(){
    
  },
  mounted() {
    this.$nextTick(()=>{
      this.chartObj = echarts.init(document.getElementById('safe-echart-box'));
      this.option.xAxis.data=this.safeLabelList;
      this.option.series[0].data=this.safeValueList;
      this.chartObj.setOption(this.option);
    })
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
  #safeManageStat {
    // width: 250px;
    width: 100%;
    height: 100%;
    & #safe-echart-box{
      width: 100%;
      height: 230px;
    }
  }
</style>
<style>
</style>

