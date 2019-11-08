import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { toggleCart } from '../../redux/cart/cartActions'
import styles from './CartDropdown.module.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems}>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className={styles.emptyMessage}>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      inverted
      onClick={() => {
        history.push('/checkout')
        dispatch(toggleCart())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
