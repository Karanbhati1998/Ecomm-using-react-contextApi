import React, { useEffect, useState } from 'react'
import Modal from './UI/Modal'
import Cart from './Cart'
import { useCart } from '../Contexts/CartProvider'
import Container from './UI/Container'
import style from './header.module.css'
import { FaShoppingCart } from "react-icons/fa";
function HeaderCart() {
 const[model,setModel]= useState(false)
 useEffect(()=>{
  if(model){
    document.documentElement.style.overflowY="hidden"
  }else{
    document.documentElement.style.overflowY="auto"

  }
 },[model])
 function removeModel(params) {
   setModel(false)
 }
 const {cart}=useCart()
 const cartQuantity=cart.reduce((prev,current)=>{
return prev + current.quantity
 },0)
  return (
    <header className={style.header}>
      <Container>
        <nav className={style.nav}>
        <h1 className="logo">ARC Logo</h1>
        <button className={style.showCart} onClick={()=>{
          setModel(true)
        }}>
          <div className={style.cart}>
            <FaShoppingCart className={style.icon}/>
            {cartQuantity>0 &&  <span className={style.quantity}>{cartQuantity}</span> }
          
          </div>
          <p className={style.showCart}>Cart</p>
        </button>
        </nav>
      </Container>
        {model &&   <Modal removeModel={removeModel} >
         <Cart/>
        </Modal>
        }
    </header>
  )
}

export default HeaderCart