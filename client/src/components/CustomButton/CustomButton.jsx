import React from 'react'

import styles from './CustomButton.module.scss'

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  collectionItem,
  ...otherProps
}) => {
  return (
    <button
      className={[
        styles.customButton,
        inverted && styles.inverted,
        isGoogleSignIn && styles.googleSignIn
      ].join(' ')}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton
