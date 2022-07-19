import React from 'react'
import uuid from 'uuid'
import Recipe from './Recipe'
import styles from "../Recipe/Recipe.module.css";


export default function RecipeList({ recipes }) { 
  return (
    recipes.map(recipe => {
        return <Recipe key={uuid.v4()} name={recipe[1].name} categories={recipe[1].categories} ingredients={recipe[1].ingredients} steps={recipe[1].steps}></Recipe>
    })
  )
}
