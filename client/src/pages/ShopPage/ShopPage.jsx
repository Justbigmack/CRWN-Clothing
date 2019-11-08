import React, { Component, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStart } from '../../redux/shop/shopActions'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelectors'
import Spinner from '../../components/Spinner/Spinner'
import WithSpinner from '../../HOC/WithSpinner/WithSpinner'

const CollectionsOverview = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverview')
)
const CollectionPage = lazy(() => import('../CollectionPage/CollectionPage'))

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render() {
    const { match, isCollectionLoaded } = this.props
    return (
      <div className="shop-page">
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            render={props => (
              <CollectionsOverviewWithSpinner
                isLoading={!isCollectionLoaded}
                {...props}
              />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={props => (
              <CollectionPageWithSpinner
                isLoading={!isCollectionLoaded}
                {...props}
              />
            )}
          />
        </Suspense>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage)
