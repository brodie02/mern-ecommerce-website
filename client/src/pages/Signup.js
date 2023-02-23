import React from 'react'
import './css/Signup.css'

import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

export default function Signup() {
  return (
    <div id='signup-page'>
      <SignupForm />
      <LoginForm />
    </div>
  )
}