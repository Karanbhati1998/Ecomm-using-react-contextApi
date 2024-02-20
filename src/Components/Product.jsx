import { useCart } from "../Contexts/CartProvider"
import style from './product.module.css'
import { toast } from 'react-toastify';
function Product({id,title,price,img}) {
    const{addToCart,cart,dispatch}=useCart()
    function handleAddToCart(){
      for (const cartdata of cart) {
        if(cartdata.id===id){
          return toast.error("item already in cart",{position: "bottom-right",
          autoClose: 500,
          hideProgressBar: true})
        }
      }

      const newCart={
            id:id,
            title:title,
            price:price,
            img:img,
            quantity:1
        }
        addToCart(newCart)
        return toast.info("item added in cart",{position: "top-right",
        autoClose: 500,
        hideProgressBar: true})
    }

  return (
    <div className={style.productCard}>
       <img src={img} alt={title} className={style.img}/>

        <p className={style.title}>{title}</p>
        <p className={style.price}>&#8377;{price}</p>
        <button className={style.btn} onClick={handleAddToCart}>Add To Cart</button>
    </div>
  )
}

export default Product