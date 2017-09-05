<template>
  <div class="synthesise">
    <section class="grid">
      <!-- //vue的循环数据 -->
      <a href='#' v-for="items in book.books">
        <div class='img'>
          <img :src='items.image' />
        </div>
        <div class='name'>
          {{items.title}}
        </div>
        <div class='cove'>
          评分：
          <span>9.8</span>
        </div>
      </a>

    </section>
  </div>
</template>
<script>
export default {
  props: {

  }, data() {
    return {
      book: {}
    }
  },
  created() {
    this.$ajax({
      methods: 'get',
      url: 'douban/v2/book/search?q=python&fields=all'
    }).then((response) => {
      console.log(response.data);
      this.book = response.data;
      //  console.log(this.book.books[0].image);
    })
  }
}
</script>

<style>
.synthesise {
  padding: 20px 0px;
  background-color: #fbfbfb;
  overflow: hidden;
}

.synthesise ul {
  width: 100%;
}

.synthesise .grid {

  float: left;
  padding: 5px;
  /* margin-left: 3%; */
}

.synthesise ul li:first-child {
  margin-left: 0;
}

.synthesise .grid a {
  float: left;
  display: inline-block;
  font-size: 12px;
  box-sizing: border-box;
  width: 33.33333%;
  padding-left: 4%;
  padding-right: 4%;
  margin-bottom: 20px;
  overflow: hidden;
}

.synthesise .grid .img {
  height: 120px;

  overflow: hidden;
  border: 5px solid #fff;
  box-shadow: 0 0 3px #a6a5a5;
  border-radius: 3px;
}

.synthesise .grid .img img {
  width: 100%;
}

.synthesise .grid a div {}

.synthesise .grid .name {
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
}

.synthesise .grid .cove {
  margin-top: 10px;
  font-size: 11px;
}
</style>

