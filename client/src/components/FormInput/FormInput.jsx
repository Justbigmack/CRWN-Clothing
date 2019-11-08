import React from 'react'

import styles from './FormInput.module.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={styles.group}>
    <input
      className={styles.formInput}
      onChange={handleChange}
      {...otherProps}
    />
    {label && (
      <label
        className={[
          styles.formInputLabel,
          otherProps.value.length && styles.shrink
        ].join(' ')}
      >
        {label}
      </label>
    )}
  </div>
)

export default FormInput
