<template>
  <div class="firstPage_container">
    <router-link :to="{name: 'calculate'}"></router-link>
    <div class="firstWindow">
        <img src="@/assets/Vector.svg" alt="close" class="close_img" @click="returnWindow">
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
          <span v-if="error == true">Поле обязательно для заполнения</span>
          <span v-else @click="add">Рассчитать</span>
        </div>

        <div v-if="showCalculations === true" class="calculations">
          <p> Итого можете внести в качестве досрочных: </p>
          <div class="repaymentPerYear" v-for="(pay,index) in fullReturn" :key="index">
            <md-checkbox v-model="check[index]" ></md-checkbox>
            <p>{{pay.toFixed(0)}} тыс руб <span> {{index+1}}-й год </span> </p>
          </div>
        </div>

        <div class="choiceOfPayment">
          <p> Что уменьшаем? </p>
          <button type="button" class="btn_pay">Платеж</button>
          <button type="button" class="btn_pay">Срок</button>
        </div>
        <div class="add" >
          <button type="button" class="btn_add" > Добавить </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      error: false,
      check:[],
      showCalculations: true,
      salary: null,
      taxFree:null,
      returnMoneyInYear: null,
      fullReturn: []
    }
  },
  mounted(){
    // цвет фона при открытии страницы
    if(document.location.pathname == "/calculate"){
      let mainColor = document.querySelector(".main");
      if( null === mainColor || undefined === mainColor){
        return;
      }
      mainColor.style.background = '#b3b3b3';
    }
  },
  methods:{
    returnWindow(){
      this.$router.push({name:'mainPage'});
      document.querySelector(".main").style.background = 'linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56';
    },
    add(){
      // проверка на наличие символов в инпуте
      if(null === this.salary){
        document.querySelector(".currentSalary > input").style.border = '3px solid #EA0029';
        this.error = true
        return;
      }
        if(this.salary < 12793){
          return  alert('Зарплата не может быть меньше 12792руб (Мин труда РФ от 01.01.2021г');
        }
      document.querySelector(".currentSalary > input").style.border = '3px solid #DFE3E6';
      this.error = false;

      //  обнуление массивов с данными для запроса следующих данных
      this.fullReturn = [];
      this.returnMoneyInYear = [];

      // проверка на тип введенных символов, чтобы было число
      let curSalary = Number(this.salary);
      if( isNaN(curSalary) ) {
        return alert('Введите число!'); 
      }

      // возвращаем 260тыс если слишком большая зарплата
      if(curSalary >= 166666.6){
        this.fullReturn = [];
        return this.fullReturn.push(260000);
      }
      console.log(this.fullReturn);

      // налог ежемесячный
      this.taxFree = curSalary *0.13;
      // налог в год
      this.returnMoneyInYear = this.taxFree*12;
      this.amoundOfMoney(this.returnMoneyInYear);
      console.log(this.amoundOfMoney(this.returnMoneyInYear));
    },

    // функция, которая возвращает массив с годовыми взносами и последним элементов является остаточная сумма 
    amoundOfMoney(n){
      let maxReturn = 260000;
      let res = Math.floor(maxReturn/n);
      if(this.fullReturn.length != res){
        for( let i=0; i<res; i++ ) {
          this.fullReturn.push(n);
        }
      } else{
        let remainder = this.fullReturn.map(i=>n+=i, n=0).reverse()[0];
        if(remainder < maxReturn){
          this.fullReturn.push(maxReturn  - remainder);
        }
      }
      return this.fullReturn;
    },
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
*::-webkit-scrollbar{
  width: 6px;
  height: 6px;
}
*:-webkit-scrollbar-track{
  -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
  background-color: #f9f9fd;
  border-radius: 10px;
}
*::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
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
.close_img:hover{
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);

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
  width: 100%;
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
  cursor: url("/assets/Pointer.svg"), pointer;
}
.currentSalary > span:hover{
  color: #F53A31;
}
.choiceOfPayment{
  display: flex;
  padding: 0 32px;
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
  cursor: url("/assets/Pointer.svg"), pointer;
  color: #fff;
  width: 73px;
  height: 36px;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  border-radius: 50px;
  border: none;
  margin-left: 20px;
  transition: 0.4s;
}
.btn_add { 
  margin-top: 40px;
  width: 100%;
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
  cursor: url("/assets/Pointer.svg"), pointer;
}
.add {
  margin: 0 32px;
  padding-bottom: 32px;
}
.calculations {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0 32px;
  max-height: 240px;
  overflow-y: scroll;
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

@media screen and (max-width: 770px){
  .header > h2 { font-size: 18px; }
  .title { padding: 32px 32px 16px 32px; }
  .title_ctx > p { font-size: 12px; }
  .firstWindow { width: 453px; };
  .close_img { width: 12px; }
}
@media screen and (max-width: 490px){
  .firstPage_container{ padding-top: 40px; }
  .firstWindow{ width: 320px; border-radius:0 }
  .choiceOfPayment { display: block; }
  .choiceOfPayment > p{ margin-bottom: 24px; }
}
</style>