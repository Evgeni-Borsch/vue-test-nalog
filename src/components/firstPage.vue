<template>
  <div class="firstPage_container">
    <router-link :to="{name: 'last'}"></router-link>
    <div class="firstWindow">
        <img src="@/assets/Vector.svg" alt="close" class="close_img">
        <div class="header">
          <h2 class="title">Налоговый вычет</h2>
        </div>
        <div class="title_ctx">
          <p>
            Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
          </p>
        </div>
        <div class="currentSalary">
          <p>Ваша зарплата в месяц</p>
          <input type="text" placeholder="Введите данные">
          <span>Рассчитать</span>
        </div>
        <div class="choiceOfPayment">
          <p> Что уменьшаем? </p>
          <button type="button" class="btn_pay">Платеж</button>
          <button type="button" class="btn_pay">Срок</button>
        </div>
        <button type="button" class="btn_add"> Добавить </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    // цвет фона при открытии страницы
    if(document.location.pathname == "/first"){
      let mainColor = document.querySelector(".main");
      if( null === mainColor || undefined === mainColor){
        return;
      }
      mainColor.style.background = '#b3b3b3';
    }
  },

}
</script>

<style >
*{
  text-decoration: none;
  margin: 0;
}
.firstPage_container{
  padding-top: 120px;
}
.firstWindow{
  position: relative;
  margin: 0 auto;
  width: 552px;
  height: 476px;
  background: #FFFFFF;
  border-radius: 30px;
/* шрифты в компоненте */
  font-family: Lab Grotesque;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: black;
}
.close_img{
  position: absolute;
  right: 5%;
  top: 7%;
}
.title {
  font-size: 28px;
  line-height: 40px;
  padding: 32px;
}
.title_ctx{
  padding-left: 32px;
  width: 448px;
}
.title_ctx > p {
  color: rgba(128, 128, 128, 1);
  text-align: left;
  vertical-align: top;
}
.currentSalary{
  padding-left: 32px;
  padding-top: 24px;
  padding-bottom: 28px;
}
.currentSalary > p {
  color: rgba(0, 0, 0, 1);
  padding-bottom: 8px;
}
.currentSalary > input {
  width: 488px;
  height: 40px;
  border: 1px solid #DFE3E6;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 10px;
}
.currentSalary > span {
  color: #EA0029;
  line-height: 24px;
  margin-top: 8px;
}
.choiceOfPayment{
  display: flex;
  padding-left: 32px;
}
.btn_pay{
  width: 57px;
  height: 36px;
  background: #EEF0F2;
  border-radius: 50px;
  border:none;
  margin-right: 26px;
  margin-left: 32px;
}
.btn_pay:hover{
  color: #fff;
  width: 73px;
  height: 36px;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  border-radius: 50px;
  border:none;
}
.btn_add { 
  margin-top: 40px;
  margin-left: 32px;
  width: 488px;
  height: 56px;
  left: 32px;
  top: 388px;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border-radius: 6px;
  border:none;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
}
</style>