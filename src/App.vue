<template>
  <div>
    <!-- <h1 v-upper="msg"></h1> -->
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      msg: 'ABC'
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    //派发一个action，获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
