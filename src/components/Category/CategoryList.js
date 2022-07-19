import React from 'react'
import Category from './Category'
import uuid from 'uuid'

export default function CategoryList({ categories }) {
    console.log(categories)
    
  return (
    categories.map(category => {
        return <Category key={uuid.v4()} category={category.categories}></Category>
    })
  )
}
