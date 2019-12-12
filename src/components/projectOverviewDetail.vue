<template>
  <section id="projectOverviewDetail">
    <divShell viewTitle="项目概况" :viewJumpLink="url_+'index.html#modules/sys/project.html'">
      <div class="info">
        <p>{{basicItemInfo.name}}</p>
        <div>
          <div>
            <p :title="basicItemInfo.projectExtend.structureTypeName">
              <label>结构形式</label>
              <span>{{basicItemInfo.projectExtend.structureTypeName}}</span>
            </p>
            <p :title="basicItemInfo.projectExtend.buildNatureName">
              <label>建设性质</label>
              <span>{{basicItemInfo.projectExtend.buildNatureName}} </span>
            </p>
            <p :title="basicItemInfo.projectExtend.area+'㎡'">
              <label>建筑面积</label>
              <span>{{basicItemInfo.projectExtend.area+'㎡'}}</span>
            </p>
            <p :title="basicItemInfo.city+basicItemInfo.adress">
              <label>项目地址</label>
              <span>{{basicItemInfo.city+basicItemInfo.adress}}</span>
            </p>
            <p :title="basicItemInfo.projectExtend.buildCompany">
              <label>建设单位</label>
              <span>{{basicItemInfo.projectExtend.buildCompany}}</span>
            </p>
            <p :title="basicItemInfo.projectExtend.supervisionCompany">
              <label>监理单位</label>
              <span>{{basicItemInfo.projectExtend.supervisionCompany}}</span>
            </p>
            <p :title="basicItemInfo.projectExtend.constructionCompany">
              <label>施工单位</label>
              <span>{{basicItemInfo.projectExtend.constructionCompany}}</span>
            </p>
            <p :title="basicItemInfo.projectExtend.designCompany">
              <label>设计单位</label>
              <span>{{basicItemInfo.projectExtend.designCompany}}</span>
            </p>
          </div>
          <div>
            <dv-decoration-3 style="width:100%;height:30px;margin-bottom:10px;" />
            <dv-decoration-3 style="width:100%;height:30px;margin-bottom:10px;" />
            <img :src="(basicItemInfo.logoUrl)?url_+basicItemInfo.logoUrl:require('../assets/img/xxx.png')" alt="">
          </div>
        </div>
      </div>
      <div class="cycle">
        <div>
          <label>安全生产</label>
          <b>
            <animated-number 
              :value="basicItemInfo.safeDays" 
              :formatValue="formatToCount"
              :duration="500"
            ></animated-number>
          </b>
          <span>天</span>
        </div>
        <div>
          <label>距离交付</label>
          <b>
              <animated-number 
                :value="basicItemInfo.payDays" 
                :formatValue="formatToCount"
                :duration="500"
              ></animated-number>
          </b>
          <span>天</span>
        </div>
      </div>
      <div class="progress">
        <!-- <iframe src="../assets/img/s.svg"></iframe> -->
        <!-- <img src="../assets/img/s.svg" alt=""> -->
        <!-- <img src="../assets/img/no-start.png" alt=""> -->
        <!-- <section>
          <progress-svg-com ref="_svg" />
        </section> -->
        <!-- <object :data="progressSvg" style="width:100%;height:100%"></object> -->
<!-- Generator: Adobe Illustrator 23.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

 <!-- /* 直线 */
	.st0{fill:none;stroke:#244985;stroke-width:2;stroke-miterlimit:10;}
  .st1{fill:none;stroke:#3CEBEA;stroke-width:2;stroke-miterlimit:10;}
/* 圆点 */
	.st2{fill:#3CEBEA;}
	.st3{fill:#244985;}   -->
        <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 364 93" style="enable-background:new 0 0 364 93;" xml:space="preserve">
        <circle :class="(cycle[0])?'st2':'st3'" cx="5" cy="5" r="5"/>
        <line :class="(line[0])?'st1':'st0'"  x1="9" y1="5" x2="55" y2="5"/>
        <circle :class="(cycle[1])?'st2':'st3'" cx="60" cy="5" r="5"/>
        <line :class="(line[1])?'st1':'st0'"  x1="65" y1="5" x2="182.5" y2="5"/>
        <circle :class="(cycle[2])?'st2':'st3'" cx="187.5" cy="5" r="5"/>
        <line  :class="(line[2])?'st1':'st0'"  x1="192.5" y1="5" x2="310" y2="5"/>
        <circle :class="(cycle[3])?'st2':'st3'" cx="315" cy="5" r="5"/>
        <path  :class="(line[3])?'st1':'st0'"  d="M320,5h1.5C344.42,5,363,23.58,363,46.5v0c0,22.92-18.58,41.5-41.5,41.5H320"/>
        <circle :class="(cycle[4])?'st2':'st3'" cx="315" cy="88" r="5"/>
        <line  :class="(line[4])?'st1':'st0'"  x1="55" y1="88" x2="9" y2="88"/>
        <circle :class="(cycle[5])?'st2':'st3'" cx="187.5" cy="88" r="5"/>
        <line  :class="(line[5])?'st1':'st0'"  x1="182.5" y1="88" x2="65" y2="88"/>
        <circle :class="(cycle[6])?'st2':'st3'" cx="60" cy="88" r="5"/>
        <line  :class="(line[6])?'st1':'st0'"  x1="310" y1="88" x2="192.5" y2="88"/>
        <circle :class="(cycle[7])?'st2':'st3'" cx="5" cy="88" r="5"/>
        </svg>
        <div>
          <div>
            <div v-for="(item,index) in itemProgressListPrev" :key="index">
              <p>{{item.name}}</p>
              <p v-if="item.expectedStartDate">{{'计划:'+item.expectedStartDate}}</p>
              <p v-if="item.actualFinishDate">{{"施工:"+item.actualFinishDate}}</p>
            </div>
          </div>
          <div>
            <div v-for="(item,index) in itemProgressListNext" :key="index">
              <p>{{item.name}}</p>
              <p v-if="item.expectedStartDate">{{'计划:'+item.expectedStartDate}}</p>
              <p v-if="item.actualFinishDate">{{"施工:"+item.actualFinishDate}}</p>
            </div>
          </div>
          <!-- <div>
            <p>施工</p>
            <p>计划:19/08/23</p>
            <p>施工:19/08/23</p>
          </div>
          <div>
            <p>土方</p>
            <p>计划:19/08/23</p>
            <p>施工:19/08/23</p>
          </div>
          <div>
            <p>桩基</p>
            <p>计划:19/08/23</p>
            <p>施工:19/08/23</p>
          </div>
          <div>
            <p>竣工</p>
            <p>计划:19/08/23</p>
            <p>施工:19/08/23</p>
          </div>
          <div>
            <p>装饰</p>
            <p>计划:19/08/23</p>
            <p>施工:19/08/23</p>
          </div>
          <div>
            <p>支护</p>
            <p>计划:19/08/23</p>
            <p>施工:19/08/23</p>
          </div> -->
        </div>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from "../components/divShell";
import AnimatedNumber from "animated-number-vue";
// import progressSvgCom from "../components/svgProgress";
const progressSvg=require('../assets/img/s.svg');
export default {
  name:'projectOverviewDetail',
  components:{
    divShell,
    AnimatedNumber,
    // progressSvgCom
  },
  props:['basicItemInfo','itemProgressList'],
  data() {
    return {
      line:[false,false,false,false,false,false,false],
      cycle:[false,false,false,false,false,false,false,false],
      itemProgressListPrev:[],
      itemProgressListNext:[],
      // url:window.location.protocol+'://'+window.location.host+'/intellij-site/'
    }
  },
  watch:{
    itemProgressList(){
      var arr =this.$splitArr(this.itemProgressList,3);
      this.itemProgressListPrev=arr[0];
      this.itemProgressListNext=arr[1];
      this.showCurrentProgress(this.basicItemInfo.orderNum);
    }
  },
  created(){
      // this.showCurrentProgress(3);
  },
  mounted() {
    var arr =this.$splitArr(this.itemProgressList,3);
    this.itemProgressListPrev=arr[0];
    this.itemProgressListNext=arr[1];
  },
  methods: {
    showCurrentProgress(num){
      for (let index = 0; index < num; index++) {
          this.line[index]=true;
          this.cycle[index]=true;
      }
      if(num!=0){
        this.cycle[num]=true;
      }
      if(num==6){
        this.line[num]=true;
        this.cycle[num+1]=true;
      }
    }
  }
}
</script>

<style scoped lang="less">
  #projectOverviewDetail {
    // width: 250px;
    width: 100%;
    height: 100%;
    & .info{
      margin-bottom: 20px;
      &>p{
        font-size:18px;
        font-weight:bold;
        color:rgba(64,255,230,1);
        line-height:42px;
        text-align: center;
      }
      &>div{
        display: flex;
        &>div{
          &:nth-of-type(1){
            width:250px;
            &>p{
              height: 30px;
              line-height: 30px;
              left: 30px;
              color: #A1D6EC;
              font-size: 14px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
              &>label{
                margin-right: 20px;
              }
            }
          }
          &:nth-of-type(2){
            width: 157px;
            &>img{
              width: 100%;
              height: 157px;
            }
          }
        }
      }
    }
    & .cycle{
      width:100%;
      height:66px;
      line-height: 66px;
      background:rgba(35,65,112,1);
      border-radius:8px;
      display: flex;
      justify-content: space-around;
      &>div{
        &>b{
          font-size: 30px;
          color: #40FFE6;
        };
        &>span{
          font-size:14px;
          color:rgba(161,214,236,1);
          position: relative;
          top: -4px;
        }
        &>label{
          color:rgba(161,214,236,1);
          margin-right: 10px;
          position: relative;
          top: -4px;
        }
      }
    }
    & .progress{
      height: 150px;
      padding-top: 18px;
      box-sizing: border-box;
      text-align: center;
      position: relative;
      & img{
        width: 364px;
        height: 93px;
      }
      &>div{
        position: absolute;
        width: 100%;
        font-size:12px;
        color:rgba(64,255,230,1);
        // flex-wrap: wrap;
        top: 34px;
        &>div{
          display: flex;
          &:nth-of-type(2){
            margin-top: 42px;
            flex-direction: row-reverse;
          }
          &>div{
            flex: 33%;
          }
        }
      }
    }
  }
</style>
<style type="text/css">
 /* 直线 */
	.st0{fill:none;stroke:#244985;stroke-width:2;stroke-miterlimit:10;}
  .st1{fill:none;stroke:#3CEBEA;stroke-width:2;stroke-miterlimit:10;}
/* 圆点 */
	.st2{fill:#3CEBEA;}
	.st3{fill:#244985;}  
</style>

