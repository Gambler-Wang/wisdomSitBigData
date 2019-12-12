<template>
  <section id="mapCoordinate">
    <divShell :viewTitle="'企业语录:  ' + mission" 
    fontSize="18px" 
    :showLink="false" 
    conPadding="0 14px">
      <div id="Map">

      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from '../components/divShell'
import styleJson from '../assets/mapStyle.json'
import iconGif from '../assets/img/a.gif';
export default {
  name:'mapCoordinate',
  components:{
    divShell
  },
  props:{
    mission:{
       type:String,
       default:'  行稳致远  百年长安'
    },
    projectCoordinateList:{
      type:Array,
      default:[]
     }
  },
  data() {
    return {
      mapObj:null,
      // projectCoordinateList:[
      //   {
      //     y:112.306679,
      //     x:31.907237,
      //     label:'[在建] 元泰未来城1期'
      //   },
      //   {
      //     y:111.041865,
      //     x:30.60731,
      //     label:'[在建] 元泰未来城2期'
      //   },
      //   {
      //     y:114.426968,
      //     x:30.948851,
      //     label:'[在建] 元泰未来城3期'
      //   },
      //   {
      //     y:113.134557,
      //     x:29.627651,
      //     label:'[在建] 元泰未来城4期'
      //   },
      // ]
    }
  },
  watch:{
    projectCoordinateList(){
        this.mapObj.clearOverlays();
        if(this.projectCoordinateList.length>0){
          var point = new BMap.Point(this.projectCoordinateList[0].y,this.projectCoordinateList[0].x); 
          this.mapObj.centerAndZoom(point, 9); 
        }
        this.addMarkerList();
    }
  },
  created(){
    
  },
  mounted() {
    this.$nextTick(()=>{
      this.mapObj = new BMap.Map("Map",{minZoom:5,maxZoom:18}); 
      var point = new BMap.Point(112.205494,30.960743); 
      this.mapObj.centerAndZoom(point, 8); 
      this.mapObj.enableScrollWheelZoom(true);
      this.mapObj.setMapStyleV2({styleJson:styleJson});
      if(this.projectCoordinateList.length>0){
        var point = new BMap.Point(this.projectCoordinateList[0].y,this.projectCoordinateList[0].x); 
        this.mapObj.centerAndZoom(point, 8); 
      }
      this.addMarkerList();
    })
  },
  methods: {
    addMarker(point){
      var myIcon = new BMap.Icon(iconGif, new BMap.Size(44,126));
      var marker = new BMap.Marker(point,{
        icon:myIcon,
        offset: new BMap.Size(0 , -63)    //设置文本偏移量
      });
      this.mapObj.addOverlay(marker);
    },
    addLabel(point,txt){
      var opts = {
        position: point,    // 指定文本标注所在的地理位置
        offset: new BMap.Size(-80 , 10)    //设置文本偏移量
      }
      var label = new BMap.Label(txt, opts);  // 创建文本标注对象
        label.setStyle({
          color : "#A1D6EC",
          fontSize : "16px",
          // width:'200px',
          height : "44px",
          lineHeight : "44px",
          fontFamily:"微软雅黑",
          background:'rgba(0,0,0,0.3)',
          border:'none',
          borderRadius:'8px',
          textAlign:'center',
          padding:'0 20px',
          boxSizing:'border-box',
        });
      this.mapObj.addOverlay(label); 
    },
    addMarkerList(){
      this.projectCoordinateList.forEach(item=>{
        var point=new BMap.Point(item.y,item.x);
        this.addMarker(point);
        this.addLabel(point,item.label)
      })
    }
  }
}
</script>

<style scoped lang="less">
  #mapCoordinate {
    // width: 250px;
    width: 100%;
    height: 100%;
    & #Map{
      width: 100%;
      height: ~'calc(100% - 50px)';
      // border-bottom-left-radius: 20px;
      // border-bottom-right-radius: 20px;
    }
  }
</style>
<style>
</style>

