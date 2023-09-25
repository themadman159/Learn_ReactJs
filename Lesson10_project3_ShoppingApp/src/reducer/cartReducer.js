
const CartReducer = (state, action) => {

    if (action.type === "calculate_total") {
        const { total, amount } = state.products.reduce((cartTotal, item) => {
            const { price, quantity } = item
            const totalprice = price * quantity //sum price product 
            cartTotal.total += totalprice // sum total price
            cartTotal.amount += quantity // sum quantity
            return cartTotal
        }, {
            total: 0,
            amount: 0
        })
        return {
            ...state,
            total,
            amount
        }
    }

    if (action.type === "remove") {
        return {
            ...state,
            products: state.products.filter((item) => item.id !== action.playload)
        }
    }

    if (action.type === "incre") {
        let updateProduct = state.products.map((item) => {
            if (item.id === action.playload) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        return {
            ...state,
            products: updateProduct
        }
    }

    if (action.type === "decre") {
        let updateProduct = state.products.map((item) => {
            if (item.id === action.playload) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        }).filter((item) => item.quantity !== 0)
        return {
            ...state,
            products: updateProduct
        }
    }

}

export default CartReducer
