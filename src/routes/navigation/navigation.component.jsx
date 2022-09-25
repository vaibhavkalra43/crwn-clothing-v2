import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/card-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signout } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {

  const {CurrentUser} = useContext(UserContext);
  console.log(CurrentUser)
  const {isCartOpen} = useContext(CartContext)

  const handleSignout = async() =>{
    const res = await signout();

  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {CurrentUser ? (<span onClick={handleSignout} className='nav-link'>signout</span>) : (
             <Link className='nav-link' to='/auth'>
             SIGN IN
           </Link>
          )}
         <CartIcon></CartIcon>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
