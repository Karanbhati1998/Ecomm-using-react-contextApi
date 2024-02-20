import React from 'react'
import { useCart } from '../Contexts/CartProvider'
import style from './cartitem.module.css'
import { LuPlus,LuMinus  } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
function CartItem({quantity,id,title,price,img}) {
    const {removeQuantity,increaseQuantity,decreaseQuantity }=useCart()
  return (
    <div className={style.cartitem}>

            <div className={style.left}>
                <img src={img} alt={title} className={style.img}/>
                <h3>{title}</h3>
            </div>
            <div className={style.right}>
                <div className={style.quantityInput}>
                    <button className={style.btn}  onClick={()=>{
                        if(quantity==1){
                            removeQuantity(id)
                        }else{
                            decreaseQuantity(id)
                        }
                    }}><LuMinus/></button>
                    <span className={style.quantity}>{quantity}</span>
                    <button className={style.btn} onClick={()=>{
            increaseQuantity(id)
        }}><LuPlus/></button>
                </div>
                <p>&#8377;{price*quantity}</p>
                <button className={style.btn} onClick={()=>{
            removeQuantity(id)
        }}><RxCross2/></button >
            </div>
    </div>
  )
}

export default CartItem