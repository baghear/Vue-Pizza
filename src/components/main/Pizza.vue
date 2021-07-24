<template>
<!--  :src="dataPizza.image"-->
  <div class="pizza-card">
    <img :src="dataPizza.image" alt="" width="250px" height="250px">
    <div class="pizza-card__title">{{ dataPizza.name }}</div>
    <div class="pizza-param">
      <div class="pizza-param__crust">
        <div v-for="(itemType, index) in dataPizza.cake.type" :key="itemType.title"
             class="pizza-param__data"
             :class="{ pizzaParam__color: itemType.isActive }"
             @click="selectCake(index)"
        >
          {{ TYPE_CAKE_STATE[itemType.id] }}
        </div>
      </div>
      <div class="pizza-param__size">
        <div v-for="(itemSize, index) in dataPizza.cake.size" :key="itemSize.title"
             class="pizza-param__data"
             :class="{ pizzaParam__color: itemSize.isActive }"
             @click="selectSize(index)"
        >
          {{ SIZE_CAKE_STATE[itemSize.id] }}
        </div>
      </div>
    </div>
    <div class="pizza-footer">
      <span class="pizza-footer__price">от {{dataPizza.price}} P</span>
      <button class="pizza-footer__btn" @click="addPizza">
        +Добавить <span v-if="CART_STATE.countPizza[pizzaIndex]" class="pizza-footer__count">{{CART_STATE.countPizza[pizzaIndex]}}</span>
      </button>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Pizza",
  props: {
    dataPizza: {},
    pizzaIndex: Number
  },

  data: function () {
    return {}
  },

  methods:{
    addPizza: function (){
      this.$store.dispatch('ADD_PIZZA_IN_CART', {pizzaPrice: this.dataPizza.price, selectedId: this.pizzaIndex})
      /*this.$emit('pizzaHasBeenAdded', /!*{selectedId: this.pizzaIndex}*!/ )*/
    },
    selectCake: function (index){
      this.$store.dispatch('SELECT_CAKE', {cakeId: index, selectedId: this.pizzaIndex})
    },
    selectSize: function (index){
      this.$store.dispatch('SELECT_SIZE', {sizeId: index, selectedId: this.pizzaIndex})
    },
    ...mapActions([
      'SELECT_CAKE',
      'SELECT_SIZE',
      'ADD_PIZZA_IN_CART'

    ]),
  },

  computed: {
    ...mapGetters([
      'CART_STATE',
      'TYPE_CAKE_STATE',
      'SIZE_CAKE_STATE',
    ])
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pizza-card{
  width: 23%;
  margin: 0 auto;
}

.pizza-card__title{
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
}

.pizza-param{
  padding: 5px;
  background-color: #f3f3f3;
  border-radius: 10px;

  font-size: 14px;
  font-weight: 600;
}

.pizza-param__crust{
  display: flex;
  margin-bottom: 5px;
}

.pizza-param__size{
  display: flex;
  justify-content: space-around;
}

.pizza-param__data{
  width: 50%;

  padding: 7px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.pizza-footer{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.pizza-footer__btn{
  padding: 10px 20px;
  margin-bottom: 50px;
  color: #fe5f1e;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
  outline: none;
  border: 1px solid #fe5f1e;
  background-color: white;
  cursor: pointer;
}

.pizza-footer__btn:hover{
  color: white;
  background-color: #fe5f1e;
}

.pizza-footer__price{
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
}

.pizza-footer__count{
  display: inline-block;
  background-color: #fe5f1e;
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding-top: 2px;
}

.pizzaParam__color {
  background-color: white !important;
}
</style>
