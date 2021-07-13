export default {
    ADD_PIZZA_IN_CART(state, payload) {
        let currentSize = 0
        for(let i=0; i<state.countSize; i++){
            if(state.dataPizza[payload.selectedId].cake.size[i].isActive){
                currentSize = i
            }
        }

        let currentCake = 0
        for(let i=0; i<state.countCake; i++){
            if(state.dataPizza[payload.selectedId].cake.type[i].isActive){
                currentCake = i
            }
        }

        let cartItem ={
            name: state.dataPizza[payload.selectedId].name,
            image: state.dataPizza[payload.selectedId].image,
            price: state.dataPizza[payload.selectedId].price,
            cakeSize: currentSize,
            cakeType: currentCake,
        }
        /*console.log(cartItem)*/
        state.cartState.totalCountPizza++;
        state.cartState.orderPrice = state.cartState.orderPrice + parseInt(payload.pizzaPrice);
        state.cartState.countPizza.splice(payload.selectedId, 1, state.cartState.countPizza[payload.selectedId] + 1);

        if(state.cartState.cartItems.length === 0){
            state.cartState.cartItems.splice(state.cartState.totalCountPizza - 1, 1, cartItem);
            /*console.log(state.cartState.cartItems)*/
            state.cartState.countItems[0] = 1;
            return
        }

        let flag = 0
        let length = state.cartState.cartItems.length

        for(let i=0; i<length; i++){
            if(JSON.stringify(state.cartState.cartItems[i])===JSON.stringify(cartItem)){
                state.cartState.countItems[i]++;
                /*console.log('M')*/
                flag = 1
                break
                /*console.log(state.cartState.countItem)*/
            }
        }
        if(!flag){
            state.cartState.cartItems.splice(state.cartState.totalCountPizza - 1, 1, cartItem);
            state.cartState.countItems[length] = 1;
            /*console.log('U')*/
        }
        /*console.log(state.cartState.cartItems)*/
    },

    CHOOSE_TYPE_PIZZA(state, payload) {
        state.pizzaTypes[state.indexTypePizza].isActive = false
        state.indexTypePizza = payload.index
        state.pizzaTypes[state.indexTypePizza].isActive = true
        /*console.log(this.pizzaTypes)*/
    },

    SORT_BY_PRICE(state){
        /*Object.assign(this.$store.state.sortPizza, this.$store.state.dataPizza)
       console.log(this.$store.state.sortPizza)*/

        state.dataPizza.sort(function (a, b) {
            return a.price - b.price
        })
    },

    SORT_BY_ALPHABET(state){
        state.dataPizza.sort(
            function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name  < b.name) {
                    return -1;
                }
                return 0;
            });
    },

    SELECT_CAKE(state, payload) {
        for(let i=0; i<state.countCake; i++){
            state.dataPizza[payload.selectedId].cake.type[i].isActive = 0
        }
        state.dataPizza[payload.selectedId].cake.type[payload.cakeId].isActive = 1
    },

    SELECT_SIZE(state, payload) {
        for(let i=0; i<state.countSize; i++){
            state.dataPizza[payload.selectedId].cake.size[i].isActive = 0
        }
        state.dataPizza[payload.selectedId].cake.size[payload.sizeId].isActive = 1
    },

    CLEAR_CART(state) {
        let arrItems = state.cartState.cartItems
        let arrPizza = state.cartState.countPizza
        arrItems.splice(0, arrItems.length)
        arrPizza.splice(0, arrPizza.length)
        state.cartState.totalCountPizza = 0
        state.cartState.orderPrice = 0
    },

    DELETE_ITEM(state, payload) {
        state.cartState.totalCountPizza -= state.cartState.countItems[payload.index]
        state.cartState.orderPrice -= state.cartState.cartItems[payload.index].price*state.cartState.countItems[payload.index]

        for(let i=0; i<4; i++)
        {
            /*console.log(state.cartState.cartItems[payload.index].name)*/
            if(state.cartState.cartItems[payload.index].name === state.dataPizza[i].name){
                state.cartState.countPizza[i] -= state.cartState.countItems[payload.index]
            }
        }

        state.cartState.cartItems.splice(payload.index, 1)
        state.cartState.countItems.splice(payload.index, 1)
    },

    PLUS_ITEM(state, payload) {
        if(state.cartState.countItems[payload.index] >= 10) {
            return
        }
        let qty = state.cartState.countItems[payload.index] + 1
        state.cartState.countItems.splice(payload.index, 1, qty)
        /*console.log(state.cartState.countItems[payload.index])*/
        state.cartState.totalCountPizza++
        state.cartState.orderPrice += parseInt(state.cartState.cartItems[payload.index].price)

        for (let i = 0; i < 4; i++) {
            /*console.log(state.cartState.cartItems[payload.index].name)*/
            if (state.cartState.cartItems[payload.index].name === state.dataPizza[i].name) {
                state.cartState.countPizza[i]++
            }
        }
    },

    MINUS_ITEM(state, payload) {
        if (state.cartState.countItems[payload.index] <= 1) {
            return
        }
        let qty = state.cartState.countItems[payload.index] - 1
        state.cartState.countItems.splice(payload.index, 1, qty)
        /*console.log(state.cartState.countItems[payload.index])*/
        state.cartState.totalCountPizza--
        state.cartState.orderPrice -= parseInt(state.cartState.cartItems[payload.index].price)

        for (let i = 0; i < 4; i++) {
            /*console.log(state.cartState.cartItems[payload.index].name)*/
            if (state.cartState.cartItems[payload.index].name === state.dataPizza[i].name) {
                state.cartState.countPizza[i]--
            }
        }

    },
}