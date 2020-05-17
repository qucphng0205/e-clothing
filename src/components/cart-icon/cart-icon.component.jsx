import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import "./cart-icon.style.scss";
import { connect } from 'react-redux';
import toggleCartDropdown from '../../redux/cart/cart.action';

const CartIcon = (props) => (
    <div className="cart-icon" onClick={() => props.toggleHidden()}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapStateToProps = (state) => ({
    hidden: state.cart.hidden,
});

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => {console.log("WTF"); dispatch(toggleCartDropdown())},
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);