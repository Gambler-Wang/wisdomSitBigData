<template>
  <section id="indexSub">
    <header>
      <div>
        <p>2019年11月28日 14时21分23秒 </p>
        <p>数据更新周期：近三天</p>
      </div>
      <section>
        <div>长安建设智慧工地云大数据中心</div>
      </section>
      <div>
        <span>
          <i class="el-icon-switch-button"></i>
          退出
        </span>
        <dv-decoration-1 style="width:200px;height:30px;" />
      </div>
    </header>
    <dv-decoration-2 style="width:250px;height:20px;" />
    <main>
      <transition name="move" mode="out-in">
        <div class="container">
          <div class="row">
            <div>
              <!-- <projectOverviewStat /> -->
              <projectOverviewDetail />
            </div>
            <div class="middle-view">
              <!-- <mapCoordinate /> -->
              <monitoringVideo />
              <div class="scroll-router-box">
                <scrollJump />
              </div>
            </div>
            <div>
              <div>
                <safeManageStat />
              </div>
              <div>
                <specialDeviceStat />
              </div>
            </div>
          </div>
          <div class="row">
            <div>
              <labelNameStat />
            </div>
            <div>
              <div>
                <!-- <nearAlarmStat /> -->
                <nearAlarmList /> 
              </div>
              <div>
                <!-- <greenConstructionList /> -->
                <greenConstructionStat />
              </div>
            </div>
            <div>
              <constructionManageStat />
            </div>
          </div>
        </div>
      </transition>
    </main>
    <div class="footer">湖北讯华科技股份有限公司 助力工程项目成功</div>
  </section>
</template>

<script>
// import projectOverviewStat from '../components/projectOverviewStat'
// import mapCoordinate from '../components/mapCoordinate'
import safeManageStat from '../components/safeManageStat'
import specialDeviceStat from '../components/specialDeviceStat'
// import nearAlarmStat from '../components/nearAlarmStat'
import labelNameStat from '../components/labelNameStat'
// import greenConstructionList from '../components/greenConstructionList'
import constructionManageStat from '../components/constructionManageStat'
import projectOverviewDetail from '../components/projectOverviewDetail'
import greenConstructionStat from '../components/greenConstructionStat'
import nearAlarmList from '../components/nearAlarmList'
import monitoringVideo from '../components/monitoringVideo'
import scrollJump from '../components/scrollJump'
  export default {
    name: "indexSub",
    components:{
      // projectOverviewStat,
      // mapCoordinate,
      safeManageStat,
      specialDeviceStat,
      // nearAlarmStat,
      labelNameStat,
      // greenConstructionList,
      constructionManageStat,
      greenConstructionStat,
      projectOverviewDetail,
      nearAlarmList,
      monitoringVideo,
      scrollJump
    },
    data() {
      return {
        pageInfo:{
          bigdataName:'',
          mission:' 行稳致远 百年长安'
        },
        constructionList:[],
      };
    },
    created(){
      this.getPageInfo();
    },
    methods: {
      // 获取页面整体信息
      getPageInfo(){
        var that = this;
        this.request(this.api.pageInfoAPI,{},'get').then(res=>{
          if(res.code==0){
            this.pageInfo.bigdataName=res.bigdataName;
            this.pageInfo.mission = res.mission;
            this.projectCoordinateList=[];
            res.projectMapList.forEach(item => {
              this.projectCoordinateList.push({
                y:Number(item.longitude),
                x:Number(item.latitude),
                label:'['+item.progressName+'] '+item.projectName,
                name:item.projectName,
                projectId:item.projectId
              })
            });
          }
        })
      },
    }
  }
</script>

<style lang="less">
  #indexSub {
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
          color:rgba(64,255,230,1);
          background:linear-gradient(0deg,rgba(154,179,233,1) 0%, rgba(168,251,240,1) 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        &:nth-last-of-type(1){
          text-align: right;
          &>span{
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
