import React from 'react'
import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cartActions'
import CustomButton from '../CustomButton/CustomButton'
import styles from './CollectionItem.module.scss'

const CollectionItem = ({ addItem, item }) => {
  const { name, price, imageUrl } = item
  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <CustomButton
        className={styles.collectionItemButton}
        onClick={() => addItem(item)}
      >
        Add to Cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem)
