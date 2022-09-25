import {createContext,useEffect,useState} from 'react'

const addCartItem = (cartItems,productToAdd) => {

    const existingCartItem = cartItems.find((item)=>item.id === productToAdd.id)

    if(existingCartItem){
        return cartItems.map((item)=>{
            
          return  item.id === productToAdd.id ? {...item,quantity:item.quantity + 1} : item
        });
    }

    return [...cartItems,{...productToAdd,quantity:1}]

}

const removeCarItem = (cartItems,cartItemToRemove) => {

   const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id)

   if(existingCartItem.quantity==1){
    return cartItems.filter((item => cartItems.id != cartItemToRemove.id));
   }

   return cartItems.map((item)=>{
            
    return  item.id === cartItemToRemove.id ? {...item,quantity:item.quantity - 1} : item
  });
    
} 

const clearCartItem = (cartItems,cartItemToClear) => {
    return cartItems.filter((item => cartItems.id !== cartItemToClear.id));
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen : () =>{},
    cartItems :[],
    addItemToCart : ()=> {},
    cartCount:0,
    removeItemFromCart :() =>{},
    clearItemFromCart : ()=>{},
    cartTotal:0
})

export const CartProvider = ({children}) =>{

    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)

    const addItemToCart = (productToAdd) =>{
        console.log(addCartItem(cartItems,productToAdd),'addCartItem(cartItems,productToAdd)')
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) =>{
       
        setCartItems(removeCarItem(cartItems,cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) =>{
        setCartItems(clearCartItem(cartItems,cartItemToClear));
    }

    useEffect(()=>{

        const totalItems = cartItems.reduce((total,item)=>total + item.quantity,0);
        setCartCount(totalItems)

    },[cartItems]);

    useEffect(()=>{

        const total = cartItems.reduce((total,item)=>total + item.quantity * item.price,0);
        setCartTotal(total)

    },[cartItems]);

    const value = {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}