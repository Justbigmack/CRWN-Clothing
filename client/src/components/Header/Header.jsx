import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartDropdown from '../CartDropdown/CartDropdown'
import CartIcon from '../CartIcon/CartIcon'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { selectCartVisible } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'
import { signOutStart } from '../../redux/user/userActions'
import styles from './Header.module.scss'

const Header = ({ currentUser, cartVisible, signOutStart }) => (
  <div className={styles.header}>
    <Link className={styles.logoContainer} to="/">
      <Logo className={styles.logo} />
    </Link>
    <div className={styles.options}>
      <Link className={styles.option} to="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <div className={styles.option} onClick={signOutStart}>
          SIGN OUT
        </div>
      ) : (
        <Link className={styles.option} to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {cartVisible && <CartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartVisible: selectCartVisible
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
