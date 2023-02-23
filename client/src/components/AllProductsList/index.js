import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ALL_PRODUCTS } from '../../utils/queries'
import './style.css'

import Product from '../Product'

export default function AllProductList({addItemToCart}) {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS)

  const products = data?.products || []

  return (
    <div id='all-product-list'>
      <h2>Products</h2>
      <div id='all-product-list-products'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((item) => (
            <Product 
              key={item._id}
              item={item}
              addItemToCart={addItemToCart}
            />
          ))
        )}
      </div>
    </div>
  )
}