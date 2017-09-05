<template>
<div>
<div class="music-navigation">
<div class="tab">
<div class="tab-item">
<router-link to="/music/vogue">流行</router-link>
</div>
<div class="tab-item">
<router-link to="/music/musics">经典</router-link>
</div>
<div class="tab-item">
<router-link to="/music/tops">排行</router-link>
</div>
<div class="tab-item">
<router-link to="/music/euramerican">欧美</router-link>
</div>

</div>
<div >
  <router-view :heat='heat'></router-view>
</div>
</div>
</div>
</template>
<script>
export default {

  props:{

  },data(){
      return{
        heat:{}
      }
  },
//     watch: {
//     // a: function (val, oldVal) {
//     //   // a=$router.path;
//     //   //   console.log(a);
//     // },
// '$route' (val,oldval) {
//         // console.log('222222');
//         // this.a=val;
//         console.log(val,oldval)
//         console.log(val.path);
//         // console.log(a);
//         if(val.path.indexOf('music')==true){
//           methods:{
//             this.detailShow=false
//           }
//         }
//         else{
//             methods:{
//             this.detailShow=true
//           }
//         }
// },
  created(){
   this.$ajax({
      method: 'get',
       dataType : "jsonp",
      url: 'douban/v2/movie/in_theaters',
   }).then((response)=>{
     console.log(response.data);
     this.heat=response.data;
     console.log('1111');
      // console.log(this.heat.subjects[0].images.medium)
      //  console.log(this.heat.title)
      //  console.log(response.data.id);
  })

//   });
//   }
}

}
</script>

<style>
.music-navigation .tab{
display: flex;
width: 100%;
	box-shadow: 0px 0px 3px #888888;

border-bottom: 1px solid rgba(7,17,27,0.1);
line-height: 40px;
height: 40px;
}
.music-navigation .tab .tab-item{
flex: 1;
text-align: center;
font-size: 12px;
}
.music-navigation .tab .tab-item a{
  display: block;
}
.tab .tab-item .router-link-exact-active {
  border-bottom: 2px solid #fb5b81;

}
</style>


