<template>
  <div id="popup-fade">
    <div class="popup">
      <div class="popup__text">
        Подключение к серверу оплаты
        <!--<slot></slot>-->
      </div>
      <button class="popup__btn" @click="closePopup">Прервать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",

  methods: {
    closePopup: function() {
      this.$emit('closePopup')
    }
  },
}
</script>

<style>
#popup-fade:before{
  content: '';
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 5;
}
.popup{
  position: fixed;
  margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;
  width: 300px;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 9%);
  background-color: white;
  z-index: 10;
}
.popup__text{
  text-align: center;
  margin-bottom: 10px;
}
.popup__btn{
  display: block;
  margin: 0 auto;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
  outline: none;
  border: 1px solid #fe5f1e;
  background-color: white;
  color: #fe5f1e;
  cursor: pointer;
}

</style>