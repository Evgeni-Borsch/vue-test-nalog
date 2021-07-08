<template>
  <div id="app">
    <div class="main">
      <div class="container">
            <button class="main_btn" type="button" @click="$router.push('/def')">
              <span class="main_btn_text"> Налоговый вычет </span>
            </button> 
        <default-page></default-page>
      </div>
    </div>
  </div>
</template>

<script>
import defaultPage from './components/defaultPage.vue'


export default {
  name: 'App',
  components: {
    defaultPage,
    // lastPage
  }
}
</script>

<style>
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
.main_btn {
  width: 149px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  filter: drop-shadow(0px 0px 44px #CFDAE7);
  border-radius: 6px;
  background: none;
}
.main_btn_text{
  color: #FFFFFF;
  font-family: Lab Grotesque;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}
</style>
