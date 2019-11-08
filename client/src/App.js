import React, { Component, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { checkUserSession } from './redux/user/userActions'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Header from './components/Header/Header'
import Notification from './components/Notification/Notification'
import {
  selectCurrentUser,
  selectIsUserLoading
} from './redux/user/userSelectors'
import Spinner from './components/Spinner/Spinner'
import WithSpinner from './HOC/WithSpinner/WithSpinner'
import './App.scss'

const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const SignInAndSignUpPage = lazy(() =>
  import('./pages/SignInAndSignUpPage/SignInAndSignUpPage')
)

const SignInAndSignUpPageWithSpinner = WithSpinner(SignInAndSignUpPage)

class App extends Component {
  unsuscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth()
  }

  render() {
    const { currentUser, isUserLoading } = this.props
    return (
      <div>
        <Notification />
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPageWithSpinner isLoading={isUserLoading} />
                  )
                }
              />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isUserLoading: selectIsUserLoading
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
