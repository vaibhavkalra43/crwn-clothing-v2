import './cart-dropdown.style.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {

    const navigate = useNavigate();

    const checkoutHandler = () =>{
        navigate('/checkout')
    }


    const {cartItems} = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                 {cartItems.map((item)=>{
                    return <CartItem key={item.id} cartItem={item}></CartItem>
                 })}
            </div>
            <Button onClick={checkoutHandler}>Checkout</Button>

        </div>
    )
}
export default CartDropdown