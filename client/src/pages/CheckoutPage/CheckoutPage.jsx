import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cartSelectors'
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton'
import styles from './CheckoutPage.module.scss'

const CheckoutPage = ({ cartItems, total }) =>
  cartItems.length > 0 ? (
    <table className={styles.checkoutTable}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.tableHeaderRowCell}>
            <span>Product</span>
          </th>
          <th className={styles.tableHeaderRowCell}>
            <span>Description</span>
          </th>
          <th className={styles.tableHeaderRowCell}>
            <span>Quantity</span>
          </th>
          <th className={styles.tableHeaderRowCell}>
            <span>Price</span>
          </th>
          <th className={styles.tableHeaderRowCell}>
            <span>Remove</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <tr className={styles.tableRowTotal}>
          <td colSpan="5">TOTAL: ${total}</td>
        </tr>
        <tr>
          <td colSpan="5">
            <div className={styles.tableRowWarning}>
              *Please use the following test credit card for payments*
              <br />
              4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <StripeCheckoutButton price={total} />
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <div>
      <EmptyCart />
    </div>
  )

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
