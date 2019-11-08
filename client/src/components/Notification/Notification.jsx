import React from 'react'
import ee from 'event-emitter'

import styles from './Notification.module.scss'

const emitter = new ee()

export const triggerNotification = notificationText => {
  emitter.emit('notification', notificationText)
}

export default class Notification extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bottom: -100,
      notificationText: ''
    }

    this.timeout = null

    emitter.on('notification', notificationText => {
      this.onShow(notificationText)
    })
  }

  onShow = notificationText => {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.setState({ bottom: -100 }, () => {
        this.timeout = setTimeout(() => {
          this.showNotification(notificationText)
        }, 500)
      })
    } else {
      this.showNotification(notificationText)
    }
  }

  showNotification = notificationText => {
    this.setState(
      {
        bottom: 16,
        notificationText
      },
      () => {
        this.timeout = setTimeout(() => {
          this.setState({
            bottom: -100
          })
        }, 3000)
      }
    )
  }

  hideNotification = () => {
    clearTimeout(this.timeout)
    this.setState({
      bottom: -100
    })
  }

  render() {
    return (
      <div
        className={styles.notification}
        style={{ bottom: this.state.bottom }}
      >
        <div className={styles.notificationText}>
          {this.state.notificationText}
        </div>
        <div className={styles.dismiss} onClick={this.hideNotification}>
          &#10005;
        </div>
      </div>
    )
  }
}
