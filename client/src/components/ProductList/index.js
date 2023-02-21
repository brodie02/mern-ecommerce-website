import React from 'react'
import Product from '../Product'
import { useQuery } from '@apollo/client'
import { QUERY_PRODUCTS } from '../../utils/queries'

export default function ProductList({currentCategory}) {
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { categories: currentCategory },
  });

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