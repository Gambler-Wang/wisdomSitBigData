<template>
  <section id="constructionManageStat">
    <divShell viewTitle="施工管理" :viewJumpLink="url_+'index.html#modules/qrcode/qrcode.html'">
      <div id="construction-echart-box">

      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell'
const echarts = require('echarts');
export default {
  name:'constructionManageStat',
  components:{
    divShell
  },
  props:['dataList'],
  data() {
    return {
      chartObj:null,
      option : {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series: [
              {
                  name:'施工项',
                  type:'pie',
                  radius: ['50%', '70%'],
                  center: ['50%', '60%'],
                  label: {
                      position:'outside',
                      normal:{
                         formatter: '{b}\n{d}%',
                         fontSize:16
                      }
                  },
                  color:['#00FFFF','#FFFF00','#00A0E9','#E60012'],
                  labelLine:{
                    show:true,
                    smooth:0.2,
                    length:30,
                    lineStyle:{
                      color:'#FFFF00',
                      type:'dashed'
                    }
                  },
                  data:[],
                  // data:[
                      // {
                      //   value:22, 
                      //   name:'实测实量',
                      //   itemStyle:{
                      //     color:'#00FFFF'
                      //   }
                      // },
                      // {
                      //   value:33, 
                      //   name:'技术交底',
                      //   itemStyle:{
                      //     color:'#FFFF00'
                      //   }
                      // },
                      // {
                      //   value:44, 
                      //   name:'特种设备',
                      //   itemStyle:{
                      //     color:'#00A0E9'
                      //   }
                      // },
                      // {
                      //   value:55, 
                      //   name:'材料标识',
                      //   itemStyle:{
                      //     color:'#E60012'
                      //   }
                      // },
                  // ],
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      }
    } 
  },
  watch:{
    dataList:{
      deep:true,
      handler(){
        this.option.series[0].data=this.dataList;
        this.chartObj.setOption(this.option);
      }
    }
  },
  created(){
    // this.getConstructionManageInfo()
  },
  mounted() {
    this.$nextTick(()=>{
      this.chartObj = echarts.init(document.getElementById('construction-echart-box'));
      this.option.series[0].data=this.dataList;
      this.chartObj.setOption(this.option);
    })
  },
  methods: {
    // getConstructionManageInfo(){
    //   this.request((this.$route.query.projectId)?this.api.constructionManageInfoAPI+'/'+this.$router.query.projectId: this.api.constructionManageInfoAPI,{},'get').then(res=>{
    //     if(res.code==0){
    //       var list =[];
    //       res.qrcodeList.forEach(item=>{
    //         list.push(
    //           {
    //             value:item.showValue,
    //             name:item.showKey
    //           }
    //         )
    //       });
    //       this.option.series[0].data=list;
    //       this.chartObj.setOption(this.option);
    //     }
    //   })
    // }
  }
}
</script>

<style scoped lang="less">
  #constructionManageStat {
    // width: 250px;
    width: 100%;
    height: 100%;
    & #construction-echart-box{
      width: 100%;
      height: 230px;
      
    }
  }
</style>
<style>
</style>

