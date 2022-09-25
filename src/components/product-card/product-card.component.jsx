import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import './product-card.style.scss'

const ProductCard = ({product}) =>{

    const {name,imageUrl,price} = product;

    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (

        <div className='product-card-container'>
            <img src={imageUrl} alt="" />
            <div className='footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType='inverted'>Add to Cart</Button>
        </div>

    )

}
export default ProductCard