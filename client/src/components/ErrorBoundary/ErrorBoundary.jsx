import React from 'react'

import styles from './ErrorBoundary.module.scss'

class ErrorBoundary extends React.Component {
  constructor() {
    super()
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }

  componentDidCatch(error) {
    console.log(error)
  }

  render() {
    return this.state.hasErrored ? (
      <div className={styles.ErrorImageOverlay}>
        <div className={styles.ErrorImageContainer} />
        <h2 className={styles.ErrorImageText}>A Dog Ate This Page</h2>
        <h3 className={styles.ErrorImageSmallText}>
          This dog is cute but honestly a menace. Where are my shoes? Where is
          my graduation certificate? Where is the chocolate cake I baked for my
          Aunt’s birthday? We are working on figuring it out. In the meantime,
          reload the page and check your internet connection.
        </h3>
      </div>
    ) : (
      this.props.children
    )
  }
}

export default ErrorBoundary
