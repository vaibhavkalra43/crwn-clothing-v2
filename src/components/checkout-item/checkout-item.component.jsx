import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.style.scss'

const CheckoutItem = ({cartItem}) => {

    const {name,imageUrl,price,quantity} = cartItem;
    const {clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartContext)

    const removeHandler = () => removeItemFromCart(cartItem)
    const addHandler = () => addItemToCart(cartItem)

    return (
<div className='checkout-item-container'>
    <div className='image-container'>
        <img src={imageUrl} alt={name} />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div onClick={removeHandler} className='arrow'>&#10094;</div>
      <span className='value'>{quantity}</span>  
        <div onClick={addHandler} className='arrow'>&#10095;</div>
        </span>
    <span className='price'>{price}</span>
    <div onClick={clearItemFromCart(cartItem)} className='remove-button'>&#1005;</div>
</div>
        
    )

}
export default CheckoutItem