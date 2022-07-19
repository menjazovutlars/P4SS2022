import React from 'react'
import Category from './Category'
import uuid from 'uuid'

export default function CategoryList({ categories }) {
  return (
    categories.map(category => {
        return (
          
            <Category key={uuid.v4()} category={category.name}></Category>
          
        );
    })
  )
}
