import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP {props.x}
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        props.currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
          <Link className="option" to='/sign-in'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {!props.cartHidden ? <CartDropdown /> : null}
  </div>
);

const mapStateToProps = (state) => {
  return ({
    currentUser: state.user.currentUser,
    cartHidden: state.cart.hidden,
  })
}

export default connect(mapStateToProps)(Header);
