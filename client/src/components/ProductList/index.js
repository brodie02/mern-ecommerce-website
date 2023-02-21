import React from 'react'
import Product from '../Product'
import { useQuery } from '@apollo/client'
import { QUERY_PRODUCTS } from '../../utils/queries'

export default function ProductList({currentCategory}) {
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: currentCategory },
  });

  const products = data?.products || []

  return (
    <div>
      <h2>Products</h2>
      <div>
        <Product />
      </div>
    </div>
  )
}