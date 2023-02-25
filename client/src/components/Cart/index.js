import React, { useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import Auth from '../../utils/auth';
import './style.css'

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')

export default function Cart({cart, setCartOpen, removeItemFromCart}) {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function calculateTotal() {
    let sum = 0
    cart.forEach((item) => {
      sum += item.price * item.amount
    });
    return sum.toFixed(2)
  }

  function submitCheckout() {
    const productIds = [];

    cart.forEach((item) => {
      for (let i = 0; i < item.amount; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <div id='cart'>
      <div id='cart-header'>
        <h2>Cart</h2>
        <p onClick={() => setCartOpen(false)}>close</p>
      </div>
      {cart.length ? (
        <div>
          {cart.map((item) => {
            return (
              <div id='cart-item' key={item._id}>
                <img alt={item.name} src={`/images/${item.image}`}/>
                <div id='cart-item-body'>
                  <p>{item.name}, AU${item.price}</p>
                  <div id='cart-item-body-bottom'>
                    <p>Qty:</p>
                    <input placeholder={item.amount}/>
                    <span onClick={() => removeItemFromCart(item._id)}>🗑️</span>
                  </div>
                </div>
              </div>
            )
          })}
          <div id='cart-footer'>
            <strong>Total: ${calculateTotal()}</strong>
            {Auth.loggedIn() ? (
              <button onClick={submitCheckout} className='button'>Checkout</button>
            ) : (
              <span>please log in to checkout</span>
            )}
          </div>
        </div>
      ) : (
        <div id='cart-error'>Cart is empty!</div>
      )}
      
    </div>
  )
}