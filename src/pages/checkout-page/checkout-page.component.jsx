import React from "react";
import './checkout-page.style.scss';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartTotalPrice, selectCartItems } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = (props) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            props.cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)
        }
        <div className="total"><span>TOTAL: ${props.totalPrice}</span></div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage);