import React, { useState } from 'react'
import Auth from '../../utils/auth'
import { Link } from "react-router-dom"
import './style.css'

import Cart from '../Cart'

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

  const [cartOpen, setCartOpen] = useState(false)

  function checkCart() {
    if(!cartOpen) {
      setCartOpen(true)
      return
    } else {
      setCartOpen(false)
      return
    }
  }

  function showCart() {
    if(cartOpen) {
      return <Cart />
    }
    return
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
          <p onClick={() => checkCart()}>Cart</p>
        </div>
        {showCart()}
      </div>
    </header>
  )
}