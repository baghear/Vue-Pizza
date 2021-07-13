export default {
    CART_STATE(state){
        return state.cartState
    },

    CART_ITEMS(state){
        return state.cartState.cartItems
    },

    TYPES_OF_PIZZA_STATE(state){
        return state.pizzaTypes
    },

    DATA_PIZZA_STATE(state){
        return state.dataPizza
    },

    TYPE_CAKE_STATE(state){
        return state.typeCake
    },

    SIZE_CAKE_STATE(state){
        return state.sizeCake
    },

}