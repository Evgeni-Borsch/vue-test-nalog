<template>
  <button class="main_btn" type="button" @click="$router.push({name:'last'})">
    <span class="main_btn_text"> Налоговый вычет </span>
  </button> 
</template>

<script>
export default {

}
</script>

<style scoped>
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