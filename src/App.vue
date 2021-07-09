<template>
  <div id="app">
    <div class="main">
        <router-view></router-view>
      
    </div>
  </div>
</template>

<script>


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
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;

}
.main {
  width: 100%;
  height: 100vh;
  box-shadow: 0px -0.11px 16.9495px rgba(183, 187, 225, 0.33);
}


</style>
