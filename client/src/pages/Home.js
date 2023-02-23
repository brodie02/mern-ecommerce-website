import React, { useState, useEffect } from 'react'

import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import AllProductsList from '../components/AllProductsList'


export default function Home({addItemToCart}) {
  const [currentCategory, setCurrentCategory] = useState()

  useEffect(() => {
    setCurrentCategory()
  }, [])
  
  return (
    <div>
      <CategoryList setCurrentCategory={setCurrentCategory} />
      {!currentCategory ? (
        <AllProductsList addItemToCart={addItemToCart}/>
      ) : (
        <ProductList currentCategory={currentCategory} />
      )}
    </div>
  )
}