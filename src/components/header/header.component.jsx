import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";

import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ user }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        user ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
          <Link className="option" to='/sign-in'>SIGN IN</Link>
      }
      <span className="cart"></span>
    </div>
  </div>
);

export default Header;
