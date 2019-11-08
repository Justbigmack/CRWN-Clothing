import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { toggleCart } from '../../redux/cart/cartActions'
import styles from './CartIcon.module.scss'

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className={styles.cartIcon} onClick={toggleCart}>
    <ShoppingIcon className={styles.shoppingIcon} />
    <span className={styles.itemCount}>{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
