export default {
    ADD_PIZZA_IN_CART({commit}, obj){
        commit('ADD_PIZZA_IN_CART', obj)
    },

    CHOOSE_TYPE_PIZZA({commit}, obj){
        commit('CHOOSE_TYPE_PIZZA', obj)
    },

    SORT_BY_PRICE({commit}, obj){
        commit('SORT_BY_PRICE', obj)
    },

    SORT_BY_ALPHABET({commit}, obj){
        commit('SORT_BY_ALPHABET', obj)
    },

    SELECT_CAKE({commit}, obj){
        commit('SELECT_CAKE', obj)
    },

    SELECT_SIZE({commit}, obj){
        commit('SELECT_SIZE', obj)
    },

    DELETE_ITEM({commit}, obj){
        commit('DELETE_ITEM', obj)
    },

    CLEAR_CART({commit}){
        commit('CLEAR_CART')
    },

    PLUS_ITEM({commit}, obj){
        commit('PLUS_ITEM', obj)
    },

    MINUS_ITEM({commit}, obj){
        commit('MINUS_ITEM', obj)
    },
}