<template>
  <div class="header">
    <router-link to="/" class="header-links">
      <div class="logo">
        <a href="">
          <img src="img/pizza-logo.svg" class="logo__img" alt="" width="38px"></a>
        <div class="logo__data">
          <div class="logo__title">Vue Pizza</div>
          <div class="logo__text">самая вкусная пицца во вселенной</div>
        </div>
      </div>
    </router-link>
    <router-link to="/cart" class="header-links">
      <div class="cart">
        <span class="cart__price">{{cartState.orderPrice}} P</span>
        <div class="cart__line"></div>
        <div class="cart__wrap">
          <img src="img/cart.svg" alt="" class="cart__image">
        </div>
        <span class="cart__count">{{cartState.totalCountPizza}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    cartState: {},
  },
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 30px;
  margin-bottom: 20px;
  margin-top: 30px;
}
.header-links{
  text-decoration: none;
}

.logo{
  display: flex;
  cursor: pointer;
}
.logo__img{
  margin-bottom: 0px;
}
.logo__data{
  padding-left: 10px;
}

.logo__title{
  color: #181818;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: left;
}

.logo__text{
  color: #7b7b7b;
}


.cart{
  display: flex;
  background-color: #fe5f1e;
  color: #f3f3f3;
  border-radius: 30px;
  padding: 12px 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}

.cart__price{
  margin-right: 14px;
  line-height: 23px;
}

.cart__line{
  height: 25px;
  width: 1px;
  background-color: hsla(0,0%,100%,.25);
}

.cart__image{

}

.cart__wrap{
  margin: 0 5px 0 14px;
  /*margin-left: 14px;
  margin-right: 5px;*/
}

.cart__price{
  margin-left: 5px;
}
</style>