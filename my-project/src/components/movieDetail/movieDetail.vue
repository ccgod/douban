<template>
<div class='movies'>
<div class="detail">
<div class='header'>

<img src='./back.png' onclick="window.history.go(-1)"/>

<span>{{mdetail.title}}</span>
</div>
<div class='detail-content'>
  <div class='img'>
    <img :src='mdetail.images.large'/>
  </div>
  <div class='profile'>
    <div class='scoring'>评分<span>9.8</span> <span class='man'>{{mdetail.ratings_count}}<font>人评分</font></span></div>
    <div class='years'>{{mdetail.year}}<span>年</span><span class='y'>出品</span></div>
    <div class='type'>{{mdetail.genres[0]}}/{{mdetail.genres[1]}}/{{mdetail.genres[2]}}</div>
    <div class='address'>{{mdetail.countries[0]}}</div>
    <div class='name'>{{mdetail.title}}</div>
</div>
</div>
<div class='paper'>
<span class='font'>
  简介：
</span>
<div class='text'>
  {{mdetail.summary}}
</div>
<div class='actor'>
<ul v-for="item in mdetail.casts">
  <li>
    <div class='img'>
<img :src='item.avatars.large'/>
    </div>
    <div class="test">
      <span class="name">{{item.name}}</span>
      <span class="occupation">[演员]</span>
    </div>
  </li>


</ul>
</div>
</div>
</div>
  </div>
</template>

<script>
export default {
  props:{
      // mdetail:{
      //   type:Object
      // }
  },
  data(){
    return{
       id:this.$route.params.id,
mdetail:{},
large:{}
    }

  }
  ,
  created(){

    console.log(this.id);
   this.$ajax({
      method: 'get',
      url: 'douban/v2/movie/subject/'+this.id,
   }).then((response)=>{
     console.log(response);
     this.mdetail=response.data;
    //  console.log('1111');
     console.log(mdetail.images);
      // console.log(this.heat.subjects[0].images.medium)
      //  console.log(this.heat.title)
      //  console.log(response.data.id);
  })
}
}
</script>

<style>
.movies .detail .header{
  height: 40px;
  line-height: 40px;
  width: 100%;
  background-color: #fb5b81;
}
.movies .detail .header img{
  height: 20px;
  float: left;
  padding-right: 20px;
  margin-top: 10px;
  padding-left: 10px;
}
.movies .detail .header span{
  float: left;
  color: #fff;
  font-size: 14px;
}
.movies .detail .detail-content{
  padding: 10px;
  overflow: hidden;

}
.movies .detail .detail-content .img{
  float: left;
  overflow: hidden;
  padding-right: 15px;
  height: 150px;
  width: 100px;
}
.movies .detail .detail-content .img img{
  width: 100%;
  height: 150px;
}
.movies .detail .detail-content .profile{

}
.movies .detail .detail-content .profile div:first-child{
  margin-top: 3px;
  font-size: 13px;
}
.movies .detail .detail-content .profile div{
  margin-top: 13px;
  color:#4b4b4b;
  font-size: 13px;
}

.movies .detail .detail-content .profile .scoring{
  color: #fb5b81;
}
.movies .detail .detail-content .profile .scoring .man{
   color:#4b4b4b;
   padding-left: 5px;
}
.movies .detail .detail-content .years .y{
  padding-left: 10px;
}
.movies .detail .paper{
  /* width: 100%; */
  clear: both;
  /* margin-top: 20px; */
   padding: 10px;
  background-color: #fff;
}
.movies .detail .paper .font{
  background-color: #f2f2f2;
  color: #000;
  font-size: 14px;
  /* display: block; */
  border-radius: 3px;
  padding: 3px 8px;

}
.movies .detail .paper .text{
  font-size: 13px;
  padding: 10px 5px;
  margin-top: 15px;
  background-color: #f2f2f2;
  line-height: 18px;
}
.movies .detail  .actor{
  margin-top: 10px;
}
.movies .detail  .actor ul li{
  overflow: hidden;
  padding: 10px;
  margin-top: 10px;
  height: 100px;
  background-color: #f2f2f2;
}
.movies .detail  .actor ul li .img{
  width: 80px;
  padding-right: 10px;
  height: 100px;
  float: left;
  overflow: hidden;
}
.movies .detail  .actor ul li .img img{
  width: 100%;
}
.movies .detail  .actor ul li  .test{
  float: left;
}
.movies .detail  .actor ul li  .test {
  padding-top: 20px;
}
.movies .detail  .actor ul li  .test span{
  display: block;
  font-size: 13px;
  margin-top: 10px;
}
.movies .detail  .actor ul li  .test span:last-child{
  padding-left: 5px;
}
</style>

