import React from 'react'

export default function Category( {category} ) {
    console.log(category);
  return (
    <div>{category.name}</div>
  )
}
