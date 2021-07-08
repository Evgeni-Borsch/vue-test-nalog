<template>
  <div id="app">
    <div class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import defaultPage from './components/defaultPage.vue'


export default {
  name: 'App',
  components: {
  }
}
</script>

<style >
*{
  box-sizing: border-box;
}
body{
  margin: 0;
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100vh;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
}
.container{
  display: flex;
  padding: 50vh 0;

}

</style>
