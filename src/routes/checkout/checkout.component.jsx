import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CheckoutItem from "../../componets/checkout-item/checkout-item.component";
import PaymentForm from '../../componets/payment-form/payment-form.component';

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-bar'>
                    <span>Description</span>
                </div>
                <div className='header-bar'>
                    <span>Quantity</span>
                </div>
                <div className='header-bar'>
                    <span>Price</span>
                </div>
                <div className='header-bar'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) =>( <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <span className='total'>Total: ₹ {cartTotal}</span>
            <PaymentForm />
        </div>
    )
}

export default Checkout;