import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default function Product({_id, image, name, price}) {
  return (
    <div id='product'>
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`}/>
        <p>{name}</p>
      </Link>
      <div id='product-price'>
        <p>AU${price}</p>
      </div>
    </div>
  )
}