import React from "react";
import './checkout-page.style.scss';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartTotalPrice, selectCartItems } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

class CheckoutPage extends React.Component {
    render() {
        return (
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
                    this.props.cartItems.map((item) => {
                        return <CheckoutItem key={item.id} item={item} />
                    })
                }
                <div className="total"><span>TOTAL: ${this.props.totalPrice}</span></div>
                <div className="text-warning">
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
                </div>
                <StripeCheckoutButton price={this.props.totalPrice} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage);