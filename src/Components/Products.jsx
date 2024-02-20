import { productData } from "../data/product"
import Product from "./Product"
import Container from "./UI/Container"
import style from './products.module.css'
function Products() {
  return (
    <Container>
      <h1>Best of ARC</h1>
    <div className={style.products}>
        {
            productData.map(product=>{
                return <Product key={product.id} {...product}/>
            })
        }
    </div>
    </Container>
  )
}

export default Products