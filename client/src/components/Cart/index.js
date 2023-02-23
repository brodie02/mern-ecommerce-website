import React from 'react'
import './style.css'

export default function Cart({cart, setCartOpen, removeItemFromCart}) {
  return (
    <div id='cart'>
      <div id='cart-header'>
        <h2>Cart</h2>
        <p onClick={() => setCartOpen(false)}>close</p>
      </div>
      {cart.map((item) => {
        return (
          <div id='cart-item' key={item._id}>
            <img alt={item.name} src={`/images/${item.image}`}/>
            <div id='cart-item-body'>
              <div id='cart-item-body-top'>
                <p>{item.name}</p>
                <p>AU${item.price}</p>
              </div>
              <div id='cart-item-body-bottom'>
                <p>Qty:</p>
                <input placeholder={item.amount}/>
                <span onClick={() => removeItemFromCart(item._id)}>🗑️</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}