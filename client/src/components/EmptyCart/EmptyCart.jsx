import React from 'react'
import { withRouter } from 'react-router-dom'

import CustomButton from '../CustomButton/CustomButton'
import styles from './EmptyCart.module.scss'

const EmptyCart = ({ history }) => {
  return (
    <div className={styles.emptyCart}>
      <p className={styles.emptyCartText}>Your cart is empty</p>
      <CustomButton
        inverted
        onClick={() => {
          history.push('/shop')
        }}
      >
        Go Shopping
      </CustomButton>
    </div>
  )
}

export default withRouter(EmptyCart)
