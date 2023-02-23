import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default function Product({ item, addItemToCart }) {
  const {
    _id,
    image,
    name,
    price
  } = item

  return (
    <div id='product'>
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`}/>
        <p>{name}</p>
      </Link>
      <div id='product-price'>
        <p>AU${price}</p>
        <button onClick={() => addItemToCart(item)}>Add to Cart</button>
      </div>
    </div>
  )
}