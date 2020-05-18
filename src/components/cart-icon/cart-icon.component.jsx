import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import "./cart-icon.style.scss";
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';


class CartIcon extends React.Component {
    render() {
        console.log("CartIcon re-render");
        return (
            <div className="cart-icon" onClick={() => this.props.toggleHidden()}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{this.props.itemCount}</span>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
    toggleHidden: () => { dispatch(toggleCartDropdown()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);