export default {
    sizeCake: {
        0: '26 см',
        1: '30 см',
        2: '36 см',
    },
    typeCake: {
        0: 'тонкое',
        1: 'традиционное',
    },

    countCake: 2,
    countSize: 3,
    indexTypePizza: 0,


    cartState: {
        totalCountPizza: 0,
        orderPrice: 0,
        countPizza: [0,0,0,0],

        countItems: [

        ],
        cartItems: [

        ]

    },

    pizzaTypes: [
        {
            title: 'Все',
            isActive: true,
            type: 'all'
        },
        {
            title: 'Мясные',
            isActive: false,
            type: 'meat'
        },
        {
            title: 'Вегетарианские',
            isActive: false,
            type: 'vegan'
        },
        {
            title: 'Гриль',
            isActive: false,
            type: 'grill'
        },
        {
            title: 'Острые',
            isActive: false,
            type: 'spicy'
        },
        {
            title: 'Зыкрыте',
            isActive: false,
            type: 'close'
        }
    ],

    dataPizza: [

    ],
}
