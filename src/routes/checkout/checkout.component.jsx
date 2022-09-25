import { useContext } from "react"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { CartContext } from "../../contexts/cart.context"

const Checkout = () => {

    const {cartItems,addItemToCart,removeCarItem} = useContext(CartContext)

return (
    <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block"><span>Product</span></div>
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>quantity</span></div>
            <div className="header-block"><span>price</span></div>
            <div className="header-block"><span>remove</span></div>
        </div>
   
            {cartItems.map(item=>{

            return (
                <CheckoutItem key={item.id} CheckoutItem={item}></CheckoutItem>
          )
            })}
    <span className="total">Total : 0</span>
    </div>
)
}
export default Checkout