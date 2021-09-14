<template>
  <div id="main">
    <div class="container">
      <Header
          :cartState = CART_STATE
      />
      <div class="content__top">
        <ul class="categories">
          <li v-for="(pizzaType,index) in TYPES_OF_PIZZA_STATE"
              :key="index"
              :class="{ backgroundColor: pizzaType.isActive}"
              class="categories__item"
              @click=updatePizzaType(index)>
            {{pizzaType.title}}
          </li>
        </ul>
        <div class="sort" @click="selectActive = !selectActive">
          Сортировка по:
          <span class="sort__default">{{selectText}}</span>
          <div class="sort__select" v-show="selectActive">
            <ul>
              <li @click="sortByPrice">цене</li>
              <li @click="sortByAlphabet">алфавиту</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="title">Все пиццы</div>
      <div class="content">
        <Pizza v-for="(itemPizza, index) in DATA_PIZZA_STATE"
               :key="itemPizza.name"
               :dataPizza="itemPizza"
               :pizzaIndex = "index"
        />
<!--@pizzaHasBeenAdded = "pizzaHasBeenAdded"-->

      </div>
    </div>
  </div>
</template>
<!--$store.state.cartState.orderPrice-->
<script>
import axios from "axios";
import {mapGetters, mapActions} from 'vuex'

import Header from '../common/Header.vue'
import Pizza from './Pizza.vue'

export default {
  name: 'Main',

  components: {
    Pizza,
    Header,
  },

  data: function () {
    return {
      selectActive: false,
      selectText: 'алфавиту'
      /*popupActive: false,
      popupData: {}*/
    }
  },

  async mounted() {
    await axios
        .get('/api/db.json')
        .then(response => {
          this.$store.state.dataPizza = response.data.dataPizza;
          this.$store.dispatch('SORT_BY_ALPHABET')
          /*console.log(this.brands[0].slug);*/
        })

    window.addEventListener("click",   (e) =>{
        if (!e.target.className.includes('sort')) {
          this.selectActive = false
         /* console.log(this.selectActive)*/
        }
    });
  },

  methods: {
    updatePizzaType: function (index){
      this.$store.dispatch('CHOOSE_TYPE_PIZZA', {index : index})
    },
    sortByPrice: function (){
      this.$store.dispatch('SORT_BY_PRICE')
      this.selectText = 'цене'
    },
    sortByAlphabet: function (){
      this.$store.dispatch('SORT_BY_ALPHABET')
      this.selectText = 'алфавиту'
    },
    ...mapActions([
      'CHOOSE_TYPE_PIZZA', // проксирует `this.increment()` в `this.$store.dispatch('increment')`
    ]),
    /*pizzaHasBeenAdded: function (){
      let cartItem = this.$store.state.cartState.cartItems
      this.popupActive = true
      this.popupData = cartItem[cartItem.length-1]
      /!*console.log(cartItem.length-1)
      console.log(cartItem[cartItem.length-1])*!/
    },*/
  },

  computed: {
    ...mapGetters([
        'CART_STATE',
        'TYPES_OF_PIZZA_STATE',
        'DATA_PIZZA_STATE',
    ])
  },

}
</script>

<style scoped>
#main{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffdf8c;
  padding: 60px 15%;
}

.container{
  background-color: white;
  border-radius: 10px;
  padding: 10px 50px;
}

.content{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  z-index: 1;
}

.content__top{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.categories{
  display: flex;
  list-style: none;
  flex-wrap: wrap;
}

.categories__item{
  margin-bottom: 10px;
}

ul{
  padding-inline-start: 0;
}

.sort__default{
  color: #fe5f1e;
  border-bottom: 1px dashed #fe5f1e;
  text-decoration: none;
  padding-bottom: 2px;
}

.title{
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
  margin: 25px 0;
  text-align: left;
}

.categories li{
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: 700;
  cursor: pointer;
}

.sort{
  position: relative;
  padding: 29px 0;
  color: #232323;
  font-weight: 600;

}

.sort__select{
  position: absolute;
  right: 0;
  top: 60px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 15px rgb(0 0 0 / 9%);
  width: 160px;
  z-index: 10;
}

.sort__select ul li{
  list-style-type: none;
  padding: 12px 20px;
  font-weight: 400;
}

.sort__select ul li:hover{
  font-weight: 700;
  color: #fe5f1e;
  background: rgba(254,95,30,.05);
}

.sort__select ul li.active{
  font-weight: 700;
  color: #fe5f1e;
}

.backgroundColor {
  color: white;
  background-color: #282828 !important;
}

</style>

