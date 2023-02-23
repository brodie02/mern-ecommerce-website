import React from 'react'
import Auth from '../../utils/auth'
import { Link } from "react-router-dom"
import './style.css'

export default function Nav() {

  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <nav>
          <Link to="/orderHistory">
            Order History
          </Link>
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </nav>
      )
    } else {
      return (
        <nav>
          <Link to="/signup">
            Sign Up/Login
          </Link>
        </nav>
      )
    }
  }

  return (
    <header>
      <h1>
        <Link to="/">
          Shöp
        </Link>
      </h1>

      <div id='header-body'>
        {showNav()}
        <div>
          <p>Cart</p>
        </div>
      </div>
    </header>
  )
}