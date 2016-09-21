<template lang="html">
  <div>
    <!-- header -->
    <div class="header">
      <x-header :left-options="{showBack: false}" style="background-color:#009dd7;">知乎日报</x-header>
    </div>
    <!-- router-view -->
    <router-view :transition="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')"></router-view>
    <!-- navbar -->
    <div class="">
      <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="!isTabbarDemo" slot="bottom">
        <tabbar-item v-link="{path:'/'}">
          <span class="iconfont vux-demo-tabbar-icon-home" slot="icon">&#xe64f;</span>
          <span slot="label">Home</span>
        </tabbar-item>
        <tabbar-item v-link="{path:'/themes'}" :selected="isDemo" badge="9">
          <span class="iconfont" slot="icon">&#xe62c;</span>
          <span slot="label"><span v-if="componentName" class="vux-demo-tabbar-component">{{componentName}}</span><span v-else>Demos</span></span>
        </tabbar-item>
        <tabbar-item v-link="{path:'/info'}" show-dot>
          <span class="iconfont" slot="icon">&#xe653;</span>
          <span slot="label">Donate</span>
        </tabbar-item>
      </tabbar>
    </div>
  </div>
</template>

<script>
// import Group from 'vux-components/group'
// import Cell from 'vux-components/cell'
// import XHeader from 'vux-components/x-header'
import { Tabbar, TabbarItem, XHeader } from 'vux-components'
export default {
  data () {
    return {
      routerTransition: {
        forward: 'slideRL',
        back: 'slideLR'
      }
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    XHeader,
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="css">
@import "./assets/css/reset.css";
@import '~vux/dist/vux.css';
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
@font-face {font-family: 'iconfont';
  src: url('./assets/icon/iconfont.eot'); /* IE9*/
  src: url('./assets/icon/iconfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('./assets/icon/iconfont.woff') format('woff'), /* chrome、firefox */
  url('./assets/icon/iconfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url('./assets/icon/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:24px;
  font-style:normal;
  color: #35495e;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
/**
* vue-router transition
*/
.vux-pop-out-transition,
.vux-pop-in-transition {
  width: 100%;
  animation-duration: 0.5s;
  animation-fill-mode: both;
  backface-visibility: hidden;
}
.vux-pop-out-enter,
.vux-pop-out-leave,
.vux-pop-in-enter,
.vux-pop-in-leave {
  will-change: transform;
  height: 100%;
  position: absolute;
  left: 0;
}
.vux-pop-out-enter {
  animation-name: popInLeft;
}
.vux-pop-out-leave {
  animation-name: popOutRight;
}
.vux-pop-in-enter {
  perspective: 1000;
  animation-name: popInRight;
}
.vux-pop-in-leave {
  animation-name: popOutLeft;
}
@keyframes popInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutLeft {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes popInRight {
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes popOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
