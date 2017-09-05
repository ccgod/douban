<template>
<div class='heat'>
<div class="heat-content" >
<ul>
  <li v-for="item in heat.subjects">
    <div class='heat-img'>
      <router-link :to="{name: 'moviedetail', params: {id: item.id}} " >
      <img :src="item.images.large" v-on:click="greet" :id='item.id' />
      </router-link>
    </div>
  <div class='text'>{{item.title}}</div>
        <div class='scoring'>评分<span>{{item.rating.average}} </span></div>
  </li>

</ul>
</div>
</div>
</template>

<script>
export default {


  props:{
    heat:{
      type:Object
    }
  },data(){
    return{
      // id:{}
    }
  },
   methods:{
  greet: function (event) {
    // const id='';
      // `this` 在方法里指当前 Vue 实例
      // alert(event.target.id)
      // `event` 是原生 DOM 事件
    }
  },watch: {
    // a: function (val, oldVal) {
    //   // a=$router.path;
    //   //   console.log(a);
    // },
'$route' (val,oldval) {
        // console.log('222222');
        // this.a=val;
        console.log(val,oldval)
        console.log(val.path)
        // console.log(a);
        if(val.path==='/moviedetail'){
          methods:{
            this.detailShow=false
          }
        }
        else{
            methods:{
            this.detailShow=true
          }
        }
}
        },

  created(){

  }
}
</script>
<style>

.heat{
  background:#f2f2f2;
  width:100%;

  overflow: hidden;
}
.heat-content{
padding: 3px;
}
.heat-img{
  height: 145px;
    padding-left:3%;
  padding-right: 3%;
  min-height: 87px;
  overflow: hidden;
}
.heat ul{
  padding: 6px 0;
  max-width: 660px;
  box-sizing: border-box;
  margin:0 auto;
  width: 100%;
  overflow:hidden;
}
.heat ul li {

  width:33.33%;
  margin-bottom: 10px;
  float:left;
  overflow:hidden;
  /* padding:3px; */
}
.heat ul li img{
  width:100%;
  min-height: 150px;
}
.heat ul li .text{
  font-size:14px;
  padding:8px 0 4px 4px;
   white-space: nowrap;
  /*font-size: 0;*/
  overflow: hidden;
  text-overflow: ellipsis;

}
.heat ul li .scoring{
  font-size:12px;
  color:#6a6a6a;
  padding-left: 4px;
}
</style>


