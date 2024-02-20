import { useState } from "react"
import { useCart } from "../Contexts/CartProvider"
import CartItem from "./CartItem"
import style from './cart.module.css'
function Cart() {
  const {cart}=useCart()
  if(cart.length==0){
    return <h1>NO Item Found !</h1>
  }
  const data =   cart.reduce((prev,curent)=>{
 return prev+curent.price * curent.quantity
  },0)

  return (
    <div className={style.cart}>
      <h1>Cart</h1>

      {
        cart.map(cartItem=>{
          return <CartItem key={cartItem.id} {...cartItem} />
        })
      }
      <h1>Total Amount:&#8377;{data}</h1>
     
    </div>
  )
}

export default Cart