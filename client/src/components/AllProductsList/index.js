import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ALL_PRODUCTS } from '../../utils/queries'

import Product from '../Product'

export default function AllProductList() {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS)

  const products = data?.products || []

  return (
    <div>
      <h2>Products</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((item) => (
            <Product 
              key={item._id}
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        )}
      </div>
    </div>
  )
}