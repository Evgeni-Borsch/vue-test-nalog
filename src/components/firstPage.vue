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
          <input 
            type="text" 
            placeholder="Введите данные"
            v-model="salary"
            @keydown.enter="add"
          >
          <span>Рассчитать</span>
        </div>

        <div v-if="showCalculations === true" class="calculations">
          <p> Итого можете внести в качестве досрочных: </p>
          <div class="repaymentPerYear">
            <input type="checkbox">
            <p>78000 тыс руб <span> в 1-й год </span> </p>
          </div>
          <div class="repaymentPerYear">
            <input type="checkbox">
            <p>78000 тыс руб <span> в 2-й год </span> </p>
          </div>
          <div class="repaymentPerYear">
            <input type="checkbox">
            <p>78000 тыс руб <span> в 3-й год </span> </p>
          </div>
          <div class="repaymentPerYear">
            <input type="checkbox">
            <p>26000 тыс руб <span> в 4-й год </span> </p>
          </div>
        </div>

        <div class="choiceOfPayment">
          <p> Что уменьшаем? </p>
          <button type="button" class="btn_pay">Платеж</button>
          <button type="button" class="btn_pay">Срок</button>
        </div>
        <div class="add">
          <button type="button" class="btn_add"> Добавить </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showCalculations: true,
      salary: null,
      taxFree:null,
      returnMoneyInYear: null,
      fullReturn: []
    }
  },
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
  methods:{
    add(){
      let curSalary = Number(this.salary);
      if( isNaN(curSalary) ) {
      return alert('Введите число!'); 
      }
      // налог ежемесячный
      this.taxFree = curSalary *0.13;
      // налог в год
      this.returnMoneyInYear = this.taxFree*12;
      // возвращаем 260тыс если слишком большая зарплата
      if(this.returnMoneyInYear >= 260000){
        this.returnMoneyInYear = 260000;
        return this.fullReturn.push(this.returnMoneyInYear)
      }
      this.amoundOfMoney(this.returnMoneyInYear);
      console.log(this.amoundOfMoney(this.returnMoneyInYear));
    },
    amoundOfMoney(n){
      let maxReturn = 260000;
      let res = maxReturn - n;
      this.fullReturn.push(n);
      while(res >= 0){
        this.fullReturn.push(this.amoundOfMoney(260000-res));
      } 
      return this.fullReturn;
    },
  },
  computed:{
      
  },
}
</script>

<style >
@font-face {
  font-family: 'Lab Grotesque Reg';
  src: local('/font/Lab Grotesque Regular'), local('/font/Lab-Grotesque-Regular'),
      url('/font/LabGrotesque-Regular.woff2') format('woff2'),
      url('/font/LabGrotesque-Regular.woff') format('woff'),
      url('/font/LabGrotesque-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Lab Grotesque Med';
  src: local('/font/Lab Grotesque Medium'), local('/font/Lab-Grotesque-Medium'),
      url('/font/LabGrotesque-Medium.woff2') format('woff2'),
      url('/font/LabGrotesque-Medium.woff') format('woff'),
      url('/font/LabGrotesque-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

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
  height: 100%;

/* шрифты в компоненте */
  font-family: 'Lab Grotesque Med', Fallback, sans-serif;
  font-size: 14px;
  color: black;
}
.close_img{
  position: absolute;
  right: 5%;
  top: 4%;
}
.title {
  font-size: 28px;
  line-height: 40px;
  padding: 32px;
}
.title_ctx{
  padding: 0 52px 0 32px;
}
.title_ctx > p {
  color: rgba(128, 128, 128, 1);
  text-align: left;
  vertical-align: top;
}
.currentSalary{
  padding: 24px 32px 16px 32px;
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
  align-items: baseline;
  margin-top: 8px;
}
.btn_pay{
  width: 57px;
  height: 36px;
  background: #EEF0F2;
  border-radius: 50px;
  border:none;
  margin-left: 32px;
}
.btn_pay:hover{
  color: #fff;
  width: 73px;
  height: 36px;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  border-radius: 50px;
  border:none;
  margin-left: 20px;

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
.add {
  padding-bottom: 32px;
}
.calculations {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0 32px;
}
.repaymentPerYear{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.repaymentPerYear > input {
  margin-right: 12px;
}
.repaymentPerYear > p{
  line-height: 24px;
}
.repaymentPerYear > p >  span{
  opacity: 0.5;
}
</style>