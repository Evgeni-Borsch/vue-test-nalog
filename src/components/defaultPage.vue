<template>
  <div class="container">
    <button class="main_btn" type="button" @click="$router.push({name:'calculate'})">
      <span class="main_btn_text"> Налоговый вычет </span>
    </button> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
  display: flex;
  padding: 50vh 0;
}
.main {
  width: 100%;
  height: 100vh;
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
  pointer-events: visible;
}
.main_btn_text{
  color: #FFFFFF;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
}
</style>