import {Outlet, Link} from "react-router-dom";
import {Fragment, useContext} from "react";
import CartIcon from "../../componets/cart-icon/cart-icon.component";
import CartDropdown from "../../componets/cart-dropdown/cart.dropdown.component";
import {ReactComponent as Nyklogo } from '../../assets/download.svg';
import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return(
        <Fragment>
            <div className='navigation'>
                <Link className = 'logo-container' to='/'>
                    <Nyklogo className = 'logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to = '/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGNOUT</span>
                        ) : (
                            <Link className='nav-link' to = '/auth'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;