import React, { Component } from 'react'
import { connect } from 'react-redux'

import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import { signUpStart } from '../../redux/user/userActions'
import styles from './SignUp.module.scss'

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    const { signUpStart } = this.props

    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    signUpStart({ email, password, displayName })
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className={styles.signUp}>
        <h2 className={styles.title}>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Nickname"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit" inverted>
            Sign Up
          </CustomButton>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(
  null,
  mapDispatchToProps
)(SignUp)
