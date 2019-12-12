<template>
  <section id="index">
    <header>
      <div>
        <p>{{nowTime}}</p>
        <!-- <input type="text"  v-model="nowTime" style="background:transparent;border:none;"> -->
        <p>数据更新周期：近三天</p>
      </div>
      <section>
        <div>{{pageInfo.bigdataName}}</div>
      </section>
      <div>
        <a @click="exit" target="_blank" rel="noopener noreferrer">
          <span>
            <i class="el-icon-switch-button"></i>退出
          </span>
        </a>
        <dv-decoration-1 style="width:200px;height:30px;" />
      </div>
    </header>
    <dv-decoration-2 style="width:250px;height:20px;" />
    <main>
      <transition name="move" mode="out-in">
        <div class="container">
          <div class="row">
            <div>
              <projectOverviewStat v-if="!isItem" :companyList="companyList" :circleList="circleList" />
              <projectOverviewDetail v-if="isItem" :basicItemInfo="basicItemInfo" :itemProgressList="itemProgressList" />
            </div>
            <div class="middle-view">
              <mapCoordinate v-if="!isItem" ref="map" :mission="pageInfo.mission" :projectCoordinateList="projectCoordinateList"/>
              <monitoringVideo v-if="isItem"/>
              <div class="scroll-router-box">
                <scrollJump @changePage="changePage" :list="projectBtnList" />
              </div>
            </div>
            <div>
              <div>
                <safeManageStat :safeLabelList="safeLabelList" :safeValueList="safeValueList" />
              </div>
              <div>
                <specialDeviceStat :deviceInfo="deviceInfo" />
              </div>
            </div>
          </div>
          <div class="row">
            <div>
              <labelNameStat :labelInfo='labelInfo' />
            </div>
            <div>
              <div>
                <nearAlarmStat v-if="!isItem" :alarmLabelList="alarmLabelList" :alarmValueList="alarmValueList"/>
                <nearAlarmList v-if="isItem" :list="alarmHistoryList" /> 
              </div>
              <div>
                <greenConstructionList v-if="!isItem" :list="envAlarmList" />
                <greenConstructionStat v-if="isItem" :list="envDataList" :envDevice="envDevice" />
              </div>
            </div>
            <div>
              <constructionManageStat :dataList="constructionList" />
            </div>
          </div>
        </div>
      </transition>
    </main>
    <div class="footer">湖北讯华科技股份有限公司 助力工程项目成功</div>
    <!-- <dv-loading  v-if="!loaddingOver"></dv-loading> -->
  </section>
</template>

<script>
import _bus from '../utils/bus'
import projectOverviewStat from '../components/projectOverviewStat'
import mapCoordinate from '../components/mapCoordinate'
import safeManageStat from '../components/safeManageStat'
import specialDeviceStat from '../components/specialDeviceStat'
import nearAlarmStat from '../components/nearAlarmStat'
import labelNameStat from '../components/labelNameStat'
import greenConstructionList from '../components/greenConstructionList'
import constructionManageStat from '../components/constructionManageStat'
import projectOverviewDetail from '../components/projectOverviewDetail'
import greenConstructionStat from '../components/greenConstructionStat'
import nearAlarmList from '../components/nearAlarmList'
import monitoringVideo from '../components/monitoringVideo'
import scrollJump from '../components/scrollJump'
const echarts = require('echarts');
  export default {
    name: "index",
    components:{
      projectOverviewStat,
      mapCoordinate,
      safeManageStat,
      specialDeviceStat,
      nearAlarmStat,
      labelNameStat,
      greenConstructionList,
      constructionManageStat,
      greenConstructionStat,
      projectOverviewDetail,
      nearAlarmList,
      monitoringVideo,
      scrollJump
    },
    data() {
      return {
        isItem:false,
        nowTime:'',
        nowTimer:null,
        requestTimer:null,
        // loaddingOver:false,
        pageInfo:{
          bigdataName:'',
          mission:' 行稳致远 百年长安'
        },
        envAlarmList:[],
        envDataList:[],
        envDevice:{
          noiseOverproof: 85,
          pm10Overproof: 150,
          pm25Overproof: 75,
        },
        circleList:[],
        constructionList:[],
        companyList:[],
        basicItemInfo:{
          "id": "44",
          "name": "襄阳南漳东泰中央公馆",
          "shortName": "东泰中央公馆",
          "city": "南漳",
          "adress": "东泰中央公馆",
          "cameraList": null,
          "type": "2",
          "typeName": null,
          "progress": "4",
          "progressName": null,
          "progressStage": null,
          "projectExtend": null,
          "longitude": "114.3052387810",
          "latitude": "30.5927599029",
          "rootDir": "xynzdtzygg",
          "introduction": "东泰中央公馆",
          "logo": null,
          "logoUrl": null,
          "isExtend": 1,
          "companyId": "2",
          "companyName": null,
          "createTime": 1573528198000,
          "createBy": null,
          "updateTime": 1575704809000,
          "updateBy": null,
          "isDeleted": 0,
          "safeDays": "342",
          "payDays": "0",
          projectExtend:{
            "approvalUnit": "string",
            "area": 0,
            "buildCompany": "string",
            "buildModel": "string",
            "buildNature": "string",
            "completionDate": "2019-12-10T01:18:41.758Z",
            "constructionCompany": "string",
            "contractPeriod": 0,
            "cost": 0,
            "createBy": 0,
            "createTime": "2019-12-10T01:18:41.758Z",
            "designCompany": "string",
            "id": 0,
            "isDeleted": 0,
            "projectId": 0,
            "projectNumber": "string",
            "prospectingCompany": "string",
            "replyUnit": "string",
            "startDate": "2019-12-10T01:18:41.758Z",
            "structureType": "string",
            "supervisionCompany": "string",
            "updateBy": 0,
            "updateTime": "2019-12-10T01:18:41.758Z"
          }
        },
        itemProgressList:[],
        projectCoordinateList:[],
        projectBtnList:[],
        alarmValueList:[],
        alarmLabelList:[],
        alarmHistoryList:[],
        safeValueList:[],
        safeLabelList:[],
        labelInfo:{
          personNum:0,
          deviceNum:0,
          labInfoList:[]
        },
        deviceInfo:{
          "onlineNum": 0,
          "offlineNum": 0,
          "deviceInfoList": []
        }
      };
    },
    watch:{
      // $route(to,from){
      //   if(to.query.projectId){
      //     this.item_load();
      //     this.isItem=true;
      //   }else{
      //     this.project_load();
      //     this.isItem=false;
      //   }
      // },
    },
    created(){
      this.sureToFullScreen();
      this.setCurrentTime();
      this.nowTimer=setInterval(this.setCurrentTime,1000);
      this.getPageInfo();
      if(this.$route.query.projectId){
        this.item_load();
        this.isItem=true;
      }else{
        this.project_load();
        this.isItem=false;
      }
    },
    mounted(){
      // var that =this;
      // _bus.$on("showloading",function(data){
      //   that.loaddingOver=false;
      // })
      // _bus.$on("closeLoading",function(data){
      //   that.loaddingOver=true;
      // })
      if(this.isItem){
          this.item_realRequest();
      }else{
          this.project_realRequest();
      }
      
    },
    destroyed(){
      if(this.nowTimer){
        clearInterval(this.nowTimer); 
      }
      this.nowTimer = null;
      if(this.requestTimer){
        clearInterval(this.requestTimer); 
      }
      this.requestTimer = null;
    },
    methods: {
      sureToFullScreen(){
        this.$confirm('该页面将全屏预览, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$fullScreen();
        }).catch(() => {
          this.exit();        
        });
      },
      exit(){
        this.$exitFullScreen();
        window.location=this.url_+'index.html';
      },
      project_realRequest(){
        var that =this;
        this.requestTimer=setInterval(function(){
          that.getAlarmListInfo();
          that.getGreenConstructionListInfo();
          that.getDeviceListInfo();
          that.getLabelListInfo();
        },60000)
      },
      item_realRequest(){
        var that =this;
        this.requestTimer=setInterval(function(){
          that.item_getAlarmListInfo();
          that.getGreenConstructionItemListInfo();
          that.item_getDeviceListInfo();
          that.item_getLabelListInfo();
        },60000)
      },
      project_load(){
        this.getCompanyListInfo();
        this.getGreenConstructionListInfo();
        this.getConstructionManageInfo();
        this.getAlarmListInfo();
        this.getSafeManageInfo();
        this.getLabelListInfo();
        this.getDeviceListInfo();
      },
      item_load(){
        this.item_getLabelListInfo();
        this.item_getAlarmListInfo();
        this.item_getConstructionManageInfo();
        this.getGreenConstructionItemListInfo();
        this.item_getDeviceListInfo();
        this.item_getSafeManageInfo();
        this.item_getCompanyListInfo();
      },
      changePage(val){
        clearInterval(this.requestTimer);
        this.requestTimer=null;
        if(val == 0){
          this.project_load();
          this.isItem=false;
          this.project_realRequest();
        }else{
          this.item_load();
          this.isItem=true;
          this.item_realRequest();
        }
      },
      // 设置当前时间
      setCurrentTime(){
        var timeStamp=new Date();
        let year = new Date(timeStamp).getFullYear();
        let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
        let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
        let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
        let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
        let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
        this.nowTime =year + "年" + month + "月" + date +"日"+" "+hh+"时"+mm+'分'+ss+'秒 ' ;
     },
        
      // 获取页面整体信息
      getPageInfo(){
        var that = this;
        this.request(this.api.pageInfoAPI,{},'get').then(res=>{
          if(res.code==0){
            this.pageInfo.bigdataName=res.bigdataName;
            this.pageInfo.mission = res.mission;
            this.projectCoordinateList=[];
            this.projectBtnList=[];
            res.projectMapList.forEach(item => {
              var obj={
                y:Number(item.latitude),
                x:Number(item.longitude),
                label:'['+item.progressName+'] '+item.projectName,
                name:item.projectName,
                projectId:item.projectId
              }
              this.projectCoordinateList.push(obj);
              this.projectBtnList.push(obj);
            });
            this.projectBtnList.push(this.projectBtnList[0]);
            this.projectBtnList.push(this.projectBtnList[1]);
            this.projectBtnList.push(this.projectBtnList[2]);
            this.projectBtnList.push(this.projectBtnList[3]);
          }
        })
      },
      // 集团项目概况
      getCompanyListInfo(){
        this.request(this.api.projectAllCompanyListAPI,{},'get').then(res=>{
          if(res.code==0){
            var data = res.bigdataProjectVO;
            this.circleList=[
              {
                id:1,
                name:'项目总数',
                progress:parseInt(data.totalNum/data.totalNum*100),
                barColor:'#40FFE6',
                count:data.totalNum,
              },
              {
                id:2,
                name:'未开工',
                progress:parseInt(data.waitStartNum/data.totalNum*100),
                barColor:'#FFFF00',
                count:data.waitStartNum,
              },
              {
                id:3,
                name:'在建',
                progress:parseInt(data.buildingNum/data.totalNum*100),
                barColor:'#FFFF00',
                count:data.buildingNum,
              },
              {
                id:4,
                name:'竣工',
                progress:parseInt(data.finishNum/data.totalNum*100),
                barColor:'#FFFF00',
                count:data.finishNum,
              }
            ];
            this.companyList=data.projectList;
          }
        })
      },
      // 集团绿色施工
      getGreenConstructionListInfo(){
        this.request(this.api.greenConstructionInfoAPI,{},'get').then(res=>{
          if(res.code==0){
            this.envAlarmList=res.envAlarmList;
          }
        })
      },
      // 集团施工管理
      getConstructionManageInfo(){
        this.request(this.api.constructionManageInfoAPI,{},'get').then(res=>{
          if(res.code==0){
            var list =[];
            res.qrcodeList.forEach(item=>{
              list.push(
                {
                  value:item.showValue,
                  name:item.showKey
                }
              )
            });
            this.constructionList=list;
          }
        })
      },
      // 集团临边报警
      getAlarmListInfo(){
        this.request(this.api.alarmListAPI,{},'get').then(res=>{
          if(res.code==0){
            var list= res.alarmVO.alarmList;
            res.alarmVO.alarmList.push({showKey:'总报警次数',showValue:res.alarmVO.totalNum})
            this.alarmValueList=[];
            this.alarmLabelList=[];
            list.forEach((item,index)=>{
              if(index == list.length-1){
                this.alarmValueList.push({
                    value:item.showValue,
                    itemStyle:{
                      color:'#E60012'
                    },
                })
              }else{
                this.alarmValueList.push({value:item.showValue})
              }
              this.alarmLabelList.push(item.showKey)
            })
          }
        })
      },
      // 集团安全管理
      getSafeManageInfo(){
        this.request(this.api.safeListAPI,{},'get').then(res=>{
          if(res.code==0){
            this.safeValueList=[];
            this.safeLabelList=[];
            res.safetyList.forEach((item,index)=>{
              if(index ==0){
                this.safeValueList.push({
                    value:item.showValue,
                    itemStyle:{
                      normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 1, color: '#FF6E02'},
                                {offset: 0, color: '#FDA360'}
                            ]
                        )
                      },
                    },
                })
              }else{
                this.safeValueList.push({value:item.showValue})
              }
              this.safeLabelList.push(item.showKey)
            })
          }
        })
      },
      // 集团特种设备
      getDeviceListInfo(){
        this.request(this.api.specialDeviceListAPI,{},'get').then(res=>{
          if(res.code==0){
            this.deviceInfo=res.bigdataDevice;
          }
        })
      },
      // 集团劳务实名
      getLabelListInfo(){
        this.request(this.api.labelNameListAPI,{},'get').then(res=>{
          if(res.code==0){
            this.labelInfo=res.bigdataLab;
            this.labelInfo.labInfoList.forEach((item,index)=>{
              this.labelInfo.labInfoList[index].percentage=Math.round((item.currentValue/item.totalValue)*100);
            })
          }
        })
      },

      // 项目劳务实名
      item_getLabelListInfo(){
        this.request(this.api.labelNameListAPI+'/'+this.$route.query.projectId,{},'get').then(res=>{
          if(res.code==0){
            this.labelInfo=res.bigdataLab;
            this.labelInfo.labInfoList.forEach((item,index)=>{
              this.labelInfo.labInfoList[index].percentage=Math.round((item.currentValue/item.totalValue)*100);
            })
          }
        })
      },
      // 项目临边报警
      item_getAlarmListInfo(){
        this.request(this.api.alarmListAPI+'/'+this.$route.query.projectId,{},'get').then(res=>{
          if(res.code==0){
            this.alarmHistoryList=res.alarmHistoryList;
          }
        })
      },
      // 项目施工管理
      item_getConstructionManageInfo(){
        this.request(this.api.constructionManageInfoAPI+'/'+this.$route.query.projectId,{},'get').then(res=>{
          if(res.code==0){
            var list =[];
            res.qrcodeList.forEach(item=>{
              list.push(
                {
                  value:item.showValue,
                  name:item.showKey
                }
              )
            });
            this.constructionList=list;
          }
        })
      },
      // 项目特种设备
      item_getDeviceListInfo(){
        this.request(this.api.specialDeviceListAPI+'/'+this.$route.query.projectId,{},'get').then(res=>{
          if(res.code==0){
            this.deviceInfo=res.bigdataDevice;
          }
        })
      },
      // 项目安全管理
      item_getSafeManageInfo(){
        this.request(this.api.safeListAPI+'/'+this.$route.query.projectId,{},'get').then(res=>{
          if(res.code==0){
            this.safeValueList=[];
            this.safeLabelList=[];
            res.safetyList.forEach((item,index)=>{
              if(index ==0){
                this.safeValueList.push({
                    value:item.showValue,
                    itemStyle:{
                      normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 1, color: '#FF6E02'},
                                {offset: 0, color: '#FDA360'}
                            ]
                        )
                      },
                    },
                })
              }else{
                this.safeValueList.push({value:item.showValue})
              }
              this.safeLabelList.push(item.showKey)
            })
          }
        })
      },
      // 单个项目概况
      item_getCompanyListInfo(){
        this.request(this.api.projectCompanyDetailAPI+'/'+this.$route.query.projectId,{},'get').then(res=>{
          if(res.code==0){
            var data = res.bigdataProjectInfoVO;
            this.basicItemInfo=data.projectEntity;
            this.itemProgressList=data.projectProgressList;
            // this.itemProgressList.push({})
            this.basicItemInfo.safeDays=data.safeDays;
            this.basicItemInfo.payDays=data.payDays;
            this.basicItemInfo.orderNum=data.orderNum;
          }
        })
      },
      // 项目绿色施工
      getGreenConstructionItemListInfo(){
        this.request(this.api.greenConstructionItemInfo+'/'+this.$route.query.projectId,{},'get').then(res=>{
          if(res.code==0){
            this.envDataList=res.envDataList;
            this.envDevice=res.envDevice;
            if(!this.envDevice){
              this.envDevice={
                noiseOverproof: 10000,
                pm10Overproof: 10000,
                pm25Overproof: 10000,
              }
            }
          }
        })
      },
    }
  }
</script>

<style lang="less">
  #index {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
      &>header{
        height: 86px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &>div{
          height: 100%;
          line-height: 30px;
          flex: 1 1 23.69%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          &:nth-of-type(1){
            font-size:18px;
            font-weight:400;
            color:#4e83b6;
            // background:linear-gradient(0deg,rgba(154,179,233,1) 0%, rgba(168,251,240,1) 100%);
            // -webkit-background-clip:text;
            // -webkit-text-fill-color:transparent;
          }
          &:nth-last-of-type(1){
            text-align: right;
            & span{
              color: #00c0ff;
              font-size: 18px;
              transition: all 0.3s;
              cursor: pointer;
              &:hover{
                color: #0000ff;
              }
            }
          }
        }
        &>section{
          height: 100%;
          flex: 1 1 48.43%;
          margin: 0 18px;
          &>div{
            width: 100%;
            height: 100%;
            background: url('../assets/img/title_back.png') center center no-repeat;
            background-size: cover;
            color: #40FFE6;
            text-align: center;
            font-size: 34px;
            line-height: 86px;
            font-weight: 700;
          }
        }
      }
      main{
        flex:1;
        display: flex;
        & .container{
          flex: 1;
          display: flex;
          flex-direction: column;
          &>.row{
            display: flex;
            justify-content: space-between;
            margin-bottom: 18px;
            &:nth-of-type(1){
              flex: 1 1 58.51%;
              &>div:nth-of-type(3){
                display: flex;
                flex-direction: column;
                &>div{
                  flex: 1;
                  &:nth-of-type(1){
                    margin-bottom: 18px;
                  }
                }
              }
            }
            &:nth-of-type(2){
              flex: 1 1 28.33%;
              margin-bottom: 10px;
              &>div:nth-of-type(2){
                display: flex;
                &>div{
                  flex: 1;
                  &:nth-of-type(1){
                    margin-right: 18px;
                  }
                }
              }
            }
            &>div{
              &:nth-of-type(1){
                flex: 1 1 23.69%;
                height: 100%;
                // background-color: red;
              }
              &:nth-of-type(2){
                flex: 1 1 48.43%;
                height: 100%;
                margin: 0 20px;
                &.middle-view{
                  position: relative;
                  &>.scroll-router-box{
                    position: absolute;
                    bottom: 12px;
                    left: 0;
                    width: 100%;
                    height: 28px;
                    padding: 0 30px;
                    box-sizing: border-box;
                  }
                }
              }
              &:nth-of-type(3){
                flex: 1 1 23.69%;
                height: 100%;
              }
            }
          }
        }
      }
      .footer{
        height: 20px;
        text-align: center;
        font-size: 14px;
        color: #91D5FB;
        margin-bottom: 10px;
      }
   
  }
</style>
<style>
</style>
