<template>
  <div>
    <NavigationComponent class="nav" />
    <HomeView class="home" />
  </div>
</template>

<script>
import HomeView from "./components/HomeView.vue";
import NavigationComponent from "./components/NavigationComponent.vue";
export default {
  name: "App",
  components: {
    HomeView,
    NavigationComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #272833;
}
</style>
