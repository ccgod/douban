<template>
  <div>
    <div class="music-navigation">
      <div class="tab">
        <div class="tab-item">
          <router-link to="/book/synthesise">综合</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/music/musics">文学</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/music/tops">流行</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/music/euramerican">文化</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/music/euramerican">生活</router-link>
        </div>
      </div>
      <div>
        <router-view :heat='heat'></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  props: {

  }, data() {
    return {
      heat: {}
    }
  },
  created() {
    this.$ajax({
      method: 'get',
      url: 'https://api.douban.com/v2/movie/in_theaters',
    }).then((response) => {
      console.log(response.data);
      this.heat = response.data;
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
/* //到时候会换less或者sass */
.music-navigation .tab {
  display: flex;
  width: 100%;
  box-shadow: 0px 0px 3px #888888;

  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  line-height: 40px;
  height: 40px;
}

.music-navigation .tab .tab-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}

.music-navigation .tab .tab-item a {
  display: block;
}

.tab .tab-item .router-link-exact-active {
  border-bottom: 2px solid #fb5b81;
}
</style>


