// imports
import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";

//Initial State
const cartInitialState = {
    cartList: [],
    total: 0
}

// Card Context
const CartContext = createContext(cartInitialState);

// Cart Provider
export const CartProvider = ({children}) =>{
    // connecting Reducer 
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    // function that will update our lists
    // add to cart function
    function addToCart(product){
        // adding product to our updated list
        const updatedList = state.cartList.concat(product);

        // Total 
        const updatedTotal = state.total + product.price;

        //dispatch updated list and dispatch updated state from reducer
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    // remove from cart function
    function removeFromCart(product){
        // filter the items from updated list
        const updatedList = state.cartList.filter(item => item.id !== product.id);

          // Total 
          const updatedTotal = state.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        })
    }

    // Clear Cart
    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        })
    }

    
    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart
    }

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

// useCart hook
export const useCart = () =>{
    const context = useContext(CartContext);
    return context;
}