import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../Data/product";
import CartReducer from "../reducer/cartReducer";

//ceate context
const CartContext = createContext()

//state store in context
const intiState = {
    products: products,
    totel: 0,
    amount: 0
}

//create Provider
export const CartProvider = ({ children }) => {
    //ceate state for reducer
    const [state, dispatch] = useReducer(CartReducer, intiState)
    //function cal 
    function formatMoney(money) {
        return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    //check effect
    useEffect(() => {
        dispatch({type:"calculate_total"})
    }, [state.products])
    //delete item
    const removeItem = (id) =>{
        dispatch({type:"remove",playload:id})
    }
    //incre quanity
    const increItem = (id) => {
        dispatch({type:"incre",playload:id})
    }
    //decre
    const decreItem = (id) => {
        dispatch({type:"decre",playload:id})
    }


    //export context to reducer
    return (
        <CartContext.Provider value={{ ...state,formatMoney, removeItem, increItem, decreItem }}>
            {children}
        </CartContext.Provider>
    )
}


//export,use context
export const useCart = () => {
    return useContext(CartContext)
}

