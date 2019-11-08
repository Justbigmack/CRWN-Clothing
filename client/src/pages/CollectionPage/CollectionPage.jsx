import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/CollectionItem/CollectionItem'
import { selectShopCollection } from '../../redux/shop/shopSelectors'
import styles from './CollectionPage.module.scss'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className={styles.collectionPage}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
