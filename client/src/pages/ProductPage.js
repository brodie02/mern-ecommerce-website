import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { QUERY_PRODUCT } from '../utils/queries'
import './css/ProductPage.css'

export default function ProductPage({addItemToCart}) {
  const { id } = useParams()

  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { id: id },
  });

  const product = data?.product || []

  return (
    <div id='product-page'>
      <Link to={'/'}>← Back</Link>
      {loading ? (
          <div>Loading...</div>
        ) : (
        <div id='product-page-content'>
          <div id='product-page-image-section'>
            <img alt={product.name} src={`/images/${product.image}`}/>
            <p>{product.description}</p>
          </div>
          <div id='product-page-body-section'>
            <h2>{product.name}</h2>
            <p><strong>AU${product.price}</strong></p>
            <p>{product.stock} items in stock</p>
            <button className='button' onClick={() => {addItemToCart(product)}}>Add to Cart</button>
          </div>
        </div>
        )}
    </div>
  )
}