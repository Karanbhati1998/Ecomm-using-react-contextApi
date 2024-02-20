import Products from "./Components/Products"
import CartProvider from "./Contexts/CartProvider"
import HeaderCart from "./Components/HeaderCart"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <CartProvider>
 <HeaderCart/>
 <ToastContainer newestOnTop={true}/>
  <Products/>
   </CartProvider>
  )
}

export default App
