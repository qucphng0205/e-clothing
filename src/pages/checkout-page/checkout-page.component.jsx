import React from "react";
import './checkout-page.style.scss';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartTotalPrice, selectCartItems } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

class CheckoutPage extends React.Component {
    render() {
        console.log("CHECKOUT PAGE RERENDER", this.props.cartItems);
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
                        console.log('item ne:', item)
                        return <CheckoutItem key={item.id} item={item} />
                    })
                }
                <div className="total"><span>TOTAL: ${this.props.totalPrice}</span></div>
            </div>
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     totalPrice: selectCartTotalPrice,
// })

var abc = null;

const mapStateToProps = (state) => {
    if (abc != null)
        console.log("??", state.cart.cartItems, state.cart.cartItems === abc, selectCartTotalPrice(state));
    abc = state.cart.cartItems;
    return ({
        cartItems: state.cart.cartItems,
        totalPrice: selectCartTotalPrice(state),
    })
};

export default connect(mapStateToProps)(CheckoutPage);