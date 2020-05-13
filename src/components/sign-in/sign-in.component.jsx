import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    this.setState({ email: "", password: "" });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleInputChange}
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleInputChange}
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn type="submit">SIGN IN WITH GOOGLE</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
