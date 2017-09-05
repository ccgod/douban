<template>
  <div class='v-header'>
    <div class='header_headers' v-show="detailShow">
      <span class='more_icon'><img src='./icon001.png'></span>
      <ul>
        <router-link to="../nusicnt/heat">
          <li>
            <i class="icon iconfont icon-music" :class="{active:aActive}"></i>
          </li>
        </router-link>
        <router-link to="/book/synthesise">
          <li>
            <i class="icon iconfont icon-men-f" :class="{active:bActive}"></i>
          </li>
        </router-link>
        <router-link to="/music/vogue">
          <li>
            <i class="icon iconfont icon-musicnote" :class="{ active: isActive }"></i>
          </li>
        </router-link>
      </ul>

    </div>
    <div class='navigation'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import './iconfont.js';
import './iconfont.eot';
import './iconfont.woff';
import './iconfont.ttf';
export default {
  data() {
    return {
      detailShow: true,
      isActive: false,
      bActive: false,
      aActive: false
    }
  },
  watch: {
    // a: function (val, oldVal) {
    //   // a=$router.path;
    //   //   console.log(a);
    // },
    '$route'(val, oldval) {
      // console.log('222222');
      // this.a=val;
      console.log(val, oldval)
      console.log(val.path);
      // console.log(a);
      if (val.path.indexOf('moviedetail') == true) {
        methods: {
          this.detailShow = false
        }
      }
      else {
        methods: {
          this.detailShow = true
        }
      }
      if (val.path.indexOf('music') == true) {
        methods: {
          this.isActive = true
          this.bActive = false
          this.aActive = false
        }
      } else if (val.path.indexOf('book') == true) {
        methods: {
          this.isActive = false
          this.bActive = true
          this.aActive = false
        }
      } else if (val.path.indexOf('nusicnt') == true) {
        methods: {
          this.isActive = false
          this.bActive = false
          this.aActive = true
        }
      }
      else {
        methods: {
          this.isActive = false
          this.bActive = false
          this.aActive = false
        }
      }
    }

    // 方法名
    // b: 'someMethod',
    // // 深度 watcher
    // c: {
    //   handler: function (val, oldVal) { /* ... */ },
    //   deep: true
    // }
  }
}
</script>

<style>
@import './iconfont.css';

.active {
  opacity: 1 !important;
}

.header_red {}

.header_headers {
  overflow: hidden;
  background-color: #fb5b81;
  height: 2.7rem;
  box-shadow: 0 0 3px #bc6b7f;
  width: 100%;
}

.header_headers span {
  width: 30%;
}

.more_icon {
  float: left;
}

.more_icon img {
  height: 1.5rem;

  margin-left: 0.5rem;
  margin-top: 0.6rem;
}

.header_headers ul {
  float: left;
  width: 50%;
  margin-left: 0;
  padding: 0;
  text-align: center;
}

.header_headers ul li i {
  font-size: 1.5rem;
  opacity: 0.5;
  color: #fff;
}

.header_headers ul li {
  float: left;
  padding-top: 0.6rem;
  text-align: center;
  width: 33.333%;
}

.header_headers ul .router-link-active li i {
  opacity: 1;
}
</style>
