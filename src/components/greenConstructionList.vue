<template>
  <section id="greenConstructionList">
    <divShell viewTitle="绿色施工" :viewJumpLink="url_+'index.html#modules/env/envdata.html'">
      <div class="row">
        <div style="flex: 0 0 35%">项目名称</div>
        <div style="flex: 0 0 15%">超标项</div>
        <div style="flex: 0 0 20%">超标值</div>
        <div>超标时间</div>
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
                <li v-for="(item,index) in list" :key="index">
                  <div style="flex: 0 0 35%" :title="item.projectName">{{item.projectName}}</div>
                  <div style="flex: 0 0 15%">{{item.overproof}}</div>
                  <div style="flex: 0 0 20%">{{item.overproofValue}}</div>
                  <div>{{item.collectTime}}</div>
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
  name:'greenConstructionList',
  components:{
    divShell,scroll
  },
  props:{
     list:{
      type: Array,
      default: []
     }
  },
  data() {
    return {
      
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
  #greenConstructionList {
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
        flex: 0 0 30%;
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
          flex: 0 0 30%;
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

