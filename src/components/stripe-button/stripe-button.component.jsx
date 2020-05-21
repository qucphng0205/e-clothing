import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
    console.log(token);
    alert("Payment Successful");
}

const StripeCheckoutButton = ({ price }) => {
    const cents = price * 100;
    const publishableKey = 'pk_test_dlvois9OXLWxl6LFcX9q4Hqc00cFFCBs4w';

    return (<StripeCheckout
        key={publishableKey}
        amount={cents}
        label='Pay Now'
        name='Func Ltd.'
        billingAddress
        shippingAddress
        description={`Your total payment is $${price}`}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />);
}

export default StripeCheckoutButton;