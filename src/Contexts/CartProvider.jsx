import { useContext } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react'
const  CartContext=createContext()

function reducer(cart,action){
    switch(action.type){
        case "ADD_TO_CART":{
            return [...cart,action.payload]
        }
        case "INCREASE_QUANTITY":{
         return   cart.map((cartItem)=>{
                
                if(action.payload.id===cartItem.id){
                    return {...cartItem,quantity:cartItem.quantity+1}
                }else{
                    return cartItem
                }
            })
        }
        case "DECREASE_QUANTITY":{
         return   cart.map((cartItem)=>{
                if(action.payload.id===cartItem.id){
                    return {...cartItem,quantity:cartItem.quantity-1}
                }else{
                    return cartItem
                }
            })
        }
        case "REMOVE_QUANTITY":{
         return   cart.filter((cartItem)=>{
               return cartItem.id!==action.payload.id

            })
        }

    }
    
return cart;
}
function CartProvider({children}) {
    const[cart,dispatch]=useReducer(reducer,[])
    function addToCart(newCart){
        dispatch({
            type:"ADD_TO_CART",
            payload:newCart
        })
    }
    function increaseQuantity(id){
        dispatch({
            type:"INCREASE_QUANTITY",
            payload:{id:id}
        })
    }
    function decreaseQuantity(id){

        dispatch({
            type:"DECREASE_QUANTITY",
            payload:{id:id}
        })
        
    }
    function removeQuantity(id){
        dispatch({
            type:"REMOVE_QUANTITY",
            payload:{id:id}
        })

    }

  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity,removeQuantity,addToCart}}>
        {children}
        </CartContext.Provider>
  )
}
export function useCart(){
    return useContext(CartContext)
}
export default CartProvider