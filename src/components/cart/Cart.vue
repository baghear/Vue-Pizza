<template>
  <div class="cart">
    <Popup
        v-show="popupActive"
        @closePopup = "closePopup"
    >
<!--      <div>{{popupData.name}}</div>
      <div>{{$store.state.typeCake[popupData.cakeType]}} тесто {{$store.state.sizeCake[popupData.cakeSize]}}</div>
      <div>добавлена в корзину</div>
      <img :src="popupData.image" alt="" width="100px" height="100px">-->
    </Popup>
    <div class="container">
      <Header
          :cartState = CART_STATE
      />

      <div v-if="!CART_STATE.totalCountPizza" class="cart-empty">
        <div class="cart-empty__title">
          Корзина пустая
        </div>
        <div class="cart-empty__text">
          Вероятней всего, вы не заказывали ещё пиццу.<br>
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </div>
        <img src="../../../public/img/empty-cart.png" alt="" class="cart-empty__image">
        <router-link to="/">
          <button class="cart-empty__btn">Вернуться назад</button>
        </router-link>
      </div>

      <div v-if="CART_STATE.totalCountPizza" class="cart-content">
        <div class="cart-top">
          <div class="cart-top__text">
            <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="#232323" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="#232323" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="#232323" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            Корзина
          </div>
          <div>
            <button class="cart-top__btn" v-on:click="clearCart">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              Очистить корзину
            </button>
          </div>
        </div>

        <CartItem
          v-for="(cartItem, cartIndex) in CART_ITEMS"
          :key="cartIndex"
          :cartItem="cartItem"
          :cartIndex="cartIndex"
        />

        <div class="cart-bottom">
          <div class="cart-bottom__text">
            Всего пицц:
            <span class="cart-bottom__count">{{CART_STATE.totalCountPizza}} шт.</span>
          </div>
          <div class="cart-bottom__text">
            Сумма заказа:
            <span class="cart-bottom__price">{{CART_STATE.orderPrice}} Р</span>
          </div>
        </div>

        <div class="cart-btn">
          <router-link to="/" class="links">
            <button class="cart-btn__back button">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="cart-btn__text">Вернуться назад</span>
            </button>
          </router-link>
          <button class="cart-btn__pay button" @click="payOrder">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import {mapActions, mapGetters} from "vuex";
import Popup from "@/components/cart/Popup";
import CartItem from "@/components/cart/CartItem";

export default {
  name: "Cart",

  components: {
    CartItem,
    Header,
    Popup,
  },

  data: function () {
    return {
      popupActive: false
    }
  },

  methods: {
    clearCart: function (){
      this.$store.dispatch('CLEAR_CART')
    },
    ...mapActions([
      'CLEAR_CART',
    ]),
    payOrder: function (){
      this.popupActive = true
    },
    closePopup: function (){
      this.popupActive = false
    }
  },

  computed: {
    ...mapGetters([
      'CART_STATE',
      'CART_ITEMS',
    ])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Proxima+Nova');
.cart{
  font-family: "Proxima Nova",Roboto,system-ui,Tahoma,sans-serif;
  color: #2c3e50;
  background-color: #ffdf8c;
  padding: 60px 250px;
}

.container{
  background-color: white;
  border-radius: 10px;
  padding: 10px 50px;
}

.cart-content{
  width: 840px;
  margin: 130px auto 0;
}

.cart-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 20px;
  margin-bottom: 50px;
}

.cart-empty{
  width: 560px;
  margin: 130px auto;
}

.cart-empty__title{
  font-size: 32px;
  font-weight: 600;
  line-height: 30px;
  color: #232323;
  text-align: center;
  margin-bottom: 10px;
}

.cart-empty__text{
  font-size: 18px;
  line-height: 145.4%;
  letter-spacing: .01em;
  color: #777;
  text-align: center;
}
.cart-empty__image{
  display: block;
  width: 300px;
  margin: 45px auto 60px;
}

.cart-empty__btn{
  padding: 12px 0 14px;
  width: 230px;
  display: block;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  background-color: #232323;

  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  border: none;
  outline: none;
}

.cart-top__text{
  /*position: relative;*/
  font-size: 32px;
  font-weight: 600;
  line-height: 30px;
  color: #232323;
}

/*.cartText:before{
  content: "";
  display:block;
  position: absolute;
  left: -40px;
  bottom: -2px;
  height:30px;
  width:30px;
  background-size: 30px 30px;
  background-image: url(../assets/cart.svg);
  background-repeat: no-repeat;
}*/

.cart-top__btn{
  background-color: transparent;
  border: none;
  cursor:pointer;
  outline:none;

  color: #b6b6b6;
  font-size: 18px;
}

/*------------*/

.cart-bottom{
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.cart-bottom__text{
  font-size: 22px;
  color: #232323;
}

.cart-bottom__price{
  color: #fe5f1e;
  font-weight: bold;
}

.cart-bottom__count{
  color: #232323;
  font-weight: bold;
}

.cart-btn{
  display: flex;
  justify-content: space-between;
  margin: 50px 0 100px;
}

.button{
  display: inline-block;
  background-color: #fe5f1e;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color .15s ease-in-out,border-color .15s ease-in-out;
  border: 1px solid transparent;
}

.cart-btn__pay{
  font-size: 16px;
  font-weight: 600;
  width: 210px;
  padding: 16px;
  color: #fff;
}

.cart-btn__back{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #c3c3c3;
  border-color: #ddd;
  background-color: #fff;
}

.cart-btn__text{
  margin-left: 10px;
}

.links{
  text-decoration: none;
}
</style>