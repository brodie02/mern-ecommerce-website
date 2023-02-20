import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_CATEGORIES } from '../../utils/queries'
import './style.css'

export default function CategoryList({setCurrentCategory}) {
  // loading animation
  const { loading, data } = useQuery(QUERY_CATEGORIES)

  const categories = data?.categories || []

  return (
    <div id='categories'>
      <h2>Categories</h2>
      <div id='category-buttons'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          categories.map((item) => (
            <button
              className='button'
              key={item._id}
              onClick={() => {
                setCurrentCategory(item.name)
              }}
            >
              {item.name}
            </button>
          ))
        )}
      </div>
    </div>
  )
}
