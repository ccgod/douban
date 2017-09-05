<template>
<div class='vogue'>
  <!-- <ul>
    <li>
      <div class="vogue-img">
        <img src="http://p1.music.126.net/0rDENkVX0tBU6Ih0v7XmJA==/109951163007567060.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"/>
      </div>
      <div class="vogue-text">
        <div class="name">是时候 </div>
         <div class="scoring">评分：<span>9.8</span> </div>
         <div class="author">孙燕姿</div>
      </div>
    </li>
    <li>
      <div class="vogue-img">
        <img src="http://p1.music.126.net/0rDENkVX0tBU6Ih0v7XmJA==/109951163007567060.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"/>
      </div>
      <div class="vogue-text">
        <div class="name">是时候 </div>
         <div class="scoring">评分：<span>9.8</span> </div>
         <div class="author">孙燕姿</div>
      </div>
    </li>
    <li>
      <div class="vogue-img">
        <img src="http://p1.music.126.net/0rDENkVX0tBU6Ih0v7XmJA==/109951163007567060.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"/>
      </div>
      <div class="vogue-text">
        <div class="name">是时候 </div>
         <div class="scoring">评分：<span>9.8</span> </div>
         <div class="author">孙燕姿</div>
      </div>
    </li>
    <li>
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=188204&auto=0&height=66"></iframe>
    </li>
  </ul> -->
  <iframe id="myiframe" frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=3150 src="//music.163.com/outchain/player?type=0&id=19723756&auto=1&height=430"></iframe>

</div>
</template>

<script>
export default {

}
</script>

<style>
.vogue{

width: 100%;
overflow: hidden;
background-color: #f2f2f2;
}
.vogue  ul{
padding: 10px;
width: 100%;
display: inline-block;
}
.vogue  ul li{
  /* padding: 10px; */
  height: 100px;
  margin: 10px 0;
 margin-right: 10px;
  padding-bottom: 10px;
  border-bottom:1px solid #d2d2d2;
  overflow: hidden;
}
.vogue .vogue-img{
  width: 100px;
  padding-right: 15px;
  float:left;
}
.vogue .vogue-img img{
  width: 100%;
}
.vogue .vogue-text{
  float: left;

  font-size: 13px;
}
.vogue .vogue-text div{
  margin-top: 10px;
  color: #717171;
}
.vogue .vogue-text div:first-child{
  font-weight: bold;
  color: #000;
}
</style>


