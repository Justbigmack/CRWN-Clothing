import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import MenuItem from '../MenuItem/MenuItem'
import { selectDirectorySections } from '../../redux/directory/directorySelectors'
import styles from './Directory.module.scss'

const Directory = ({ sections }) => {
  return (
    <div className={styles.directoryMenu}>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
