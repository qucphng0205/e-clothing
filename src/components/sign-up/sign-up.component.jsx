import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
        } catch (e) {
            console.error("--PROFILE--:", e);
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (<div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type="text" name="displayName" label="Name" value={displayName} onChange={this.handleInputChange} />
                <FormInput type="email" name="email" label="Email" value={email} onChange={this.handleInputChange} />
                <FormInput type="password" name="password" label="Password" value={password} onChange={this.handleInputChange} />
                <FormInput type="password" name="confirmPassword" label="Confirm Password" value={confirmPassword} onChange={this.handleInputChange} />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>)
    }
}

export default SignUp;