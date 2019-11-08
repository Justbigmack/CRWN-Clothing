import React from 'react'
import { connect } from 'react-redux'

import { addItem, removeItem, clearItem } from '../../redux/cart/cartActions'
import styles from './CheckoutItem.module.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <tr className={styles.checkoutItemRow}>
      <td className={styles.checkoutItemRowCell}>
        <img src={imageUrl} alt={name} className={styles.checkoutItemImage} />
      </td>
      <td className={styles.checkoutItemRowCell}>{name}</td>
      <td className={styles.checkoutItemRowCell}>
        <div className={styles.quantity}>
          <div className={styles.arrow} onClick={() => removeItem(cartItem)}>
            &#10094;
          </div>
          <span className={styles.value}>{quantity}</span>
          <div className={styles.arrow} onClick={() => addItem(cartItem)}>
            &#10095;
          </div>
        </div>
      </td>
      <td className={styles.checkoutItemRowCell}>
        <span>${price}</span>
      </td>
      <td className={styles.checkoutItemRowCell}>
        <div
          className={styles.removeButton}
          onClick={() => clearItem(cartItem)}
        >
          &#10005;
        </div>
      </td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem)
