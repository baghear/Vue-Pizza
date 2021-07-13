<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="cartItem.image" alt="" width="80" height="80">
    </div>
    <div class="cart-item__name">
      {{ cartItem.name }}<br>
      <span class="cart-item__description">{{ TYPE_CAKE_STATE[cartItem.cakeType] }}, {{ SIZE_CAKE_STATE[cartItem.cakeSize] }}</span>
    </div>
    <div class="item-count">
      <button class="item-count__btn button-circle" @click="minusItem(cartIndex)">-</button>
      <b>{{CART_STATE.countItems[cartIndex]}}</b>
      <button class="item-count__btn button-circle" @click="plusItem(cartIndex)">+</button>
    </div>
    <div class="cart-item__price">
      <b>{{cartItem.price}} Р</b>
    </div>
    <div>
      <button class="cart-item__btn button-circle" v-on:click="deleteItem(cartIndex)">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#ddd"></path>
          <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#ddd"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartItem",

  props: {
    cartItem: {},
    cartIndex: Number
  },

  methods: {
    deleteItem: function (index) {
      this.$store.dispatch('DELETE_ITEM', {index: index})
    },
    plusItem: function (index) {
      this.$store.dispatch('PLUS_ITEM', {index: index})
    },
    minusItem: function (index) {
      this.$store.dispatch('MINUS_ITEM', {index: index})
    },
    ...mapActions([
      'DELETE_ITEM',
      'PLUS_ITEM',
      'MINUS_ITEM',
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

<style>
.cart-item{
  display: flex;
  align-items: center;
}

.cart-item__name{
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  color: #232323;
  padding-left: 20px;
  width: 310px;
}

.cart-item__description{
  font-size: 18px;
  color: #8d8d8d;
  font-weight: 400;
}

.item-count{
  display: flex;
  align-items: center;
  font-size: 22px;
  width: 260px;
}

.item-count__btn{
  border: 1px solid #fe5f1e;
  background-color: transparent;
  color: #fe5f1e;
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
}

.cart-item__price{
  font-size: 22px;
  width: 170px;
}

.cart-item__btn{
  border: 1px solid #ddd;
  transform: rotate(45deg);
  background-color: transparent;
}

.button-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;

  padding: 0;
  border-width: 2px;
  border-radius: 30px;
  cursor: pointer;
}
</style>