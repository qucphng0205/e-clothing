import React from 'react';
import './checkout-item.style.scss';
import { removeItem, decreaseItem, addItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';

class CheckoutItem extends React.Component {
    render() {
        console.log('CHECKOUT ITEM RE-RENDER', this.props.item);
        return (
            <div className="checkout-item">
                <div className="image-container">
                    <img src={this.props.item.imageUrl} alt="item" />
                </div>
                <span className="name">{this.props.item.name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => this.props.decreaseItemFromCart(this.props.item)}>&#10094;</div>
                    <span className="value">{this.props.item.quantity}</span>
                    <div className="arrow" onClick={() => this.props.increaseItemFromCart(this.props.item)}>&#10095;</div>
                </span>
                <span className="price">{this.props.item.price}</span>
                <div className="remove-button" onClick={() => this.props.removeItemFromCart(this.props.item)}>&#10005;</div>
            </div>);
    }
}
const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (item) => dispatch(removeItem(item)),
    decreaseItemFromCart: (item) => dispatch(decreaseItem(item)),
    increaseItemFromCart: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);