import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import styles from './SignInAndSignUpPage.module.scss'

const SignInAndSignUpPage = () => {
  return (
    <div className={styles.signInAndSignUp}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage
