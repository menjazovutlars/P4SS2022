import React from 'react'
import Ingredient from './Ingredient'
import uuid from 'uuid'

export default function IngredientList({ ingredients}) {
  return (
    ingredients.map(ingredient => {
        return (
          
            <Ingredient
              key={uuid.v4()}
              ingredient={ingredient.name}
            ></Ingredient>
        
        );
    })
  )
}
