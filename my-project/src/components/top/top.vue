<template>
<div class="top">
  <ul>
    <li v-for="(item,key) in top.subjects">
      <div class="top_id">0{{key+1}}</div>
      <router-link :to="{name: 'moviedetail', params: {id: item.id}}" class="top-content">
        <div class="top-content-img">
            <img :src="item.images.large" >
        </div>
        <div class="top-content-test">
            <div class="name">{{item.title}} </div>
            <div class="title">{{item.original_title}}  </div>
            <div class="average">评分:<span> {{item.rating.average}}</span></div>
        </div>
      </router-link>
    </li>


  </ul>
</div>
</template>
<script>
export default {
  props:{
    // top:{
    //   type:Object
    // }
  },data(){
    return{
 top:{}
    }
  },
  created(){
      this.$ajax({
        method:'get',

        url:'douban/v2/movie/top250',
      }).then((response)=>{
          // console.log(response);
          this.top=response.data;
               console.log(this.top.subjects[0].desc)
          // console.log(this.top);

      })
        // console.log(this.heat.id)
  }
}
</script>

<style>
.top{
  background-color: #f2f2f2;
  padding-bottom: 10px;
}
.top ul li .top_id{
  height: 26px;
  color:#393939;
  padding-left: 6px;
  line-height: 26px;
  font-size: 13px;
}
.top ul li{
  overflow: hidden
}
.top ul li .top-content{
display: block;
padding: 6px;
padding: 6px  6px 0 6px;
height: 100px;
overflow: hidden;
/* padding: 0 6px; */
background-color: #fff;
width: 100%;
}
.top-content-img{
  float: left;
  width: 80px;
    margin-right: 15px;
  /* margin: 15px 1.12rem 0px; */
}
.top-content-img img{
  width: 100%;
  padding-bottom: 6px;
}
.top-content-test {

}
.top-content-test div:first-child{
  margin-top: 10px;
  font-weight: bold;
  font-size: 13px;
}

.top-content-test div{
  margin-top: 14px;
  font-size: 10px;
}
.top-content-img{
  padding-bottom: 6px;
  overflow: hidden;
  height: 88px;
overflow: hidden;
}
.top-content-test .average{
  color: #fa5b81;
}
</style>

