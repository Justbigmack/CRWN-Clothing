import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import { purchaseSuccess, purchaseFailure } from '../../redux/cart/cartActions'

const StripeCheckoutButton = ({ price, purchaseSuccess, purchaseFailure }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_GIDJTxoVfcCrmaOUOCsmjOIQ00Wx45cDfK'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => purchaseSuccess())
      .catch(error => {
        purchaseFailure()
        console.error(error)
      })
  }

  return (
    <StripeCheckout
      name="CRWN Clothing Ltd."
      description={`Your total is $${price}`}
      label="Pay Now 💳"
      panelLabel="Pay Now"
      amount={priceForStripe}
      currency="USD"
      stripeKey={publishableKey}
      billingAddress
      shippingAddress
      token={onToken}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  purchaseSuccess: () => dispatch(purchaseSuccess()),
  purchaseFailure: () => dispatch(purchaseFailure())
})

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton)
