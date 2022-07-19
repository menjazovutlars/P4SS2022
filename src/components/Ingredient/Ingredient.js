import React from 'react'

export default function Ingredient({ ingredient }) {
    console.log(ingredient)
  return (
    <div>{ingredient.name}</div>
  )
}
