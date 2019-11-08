import React, { Component } from 'react'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton'
import {
  emailSignInStart,
  googleSignInStart
} from '../../redux/user/userActions'
import FormInput from '../FormInput/FormInput'
import styles from './SignIn.module.scss'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = this.state
    const { emailSignInStart } = this.props

    emailSignInStart(email, password)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { email, password } = this.state
    const { googleSignInStart } = this.props
    return (
      <div className={styles.signIn}>
        <h2 className={styles.title}>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <div className={styles.buttons}>
            <CustomButton type="submit" inverted>
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
})

export default connect(
  null,
  mapDispatchToProps
)(SignIn)
