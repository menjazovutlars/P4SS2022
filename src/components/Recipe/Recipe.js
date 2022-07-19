import styles from "../Recipe/Recipe.module.css";
import React,{ useState } from "react";
import CategoryList from "../Category/CategoryList";
import IngredientList from "../Ingredient/IngredientList";
import StepList from "../Steps/StepList";
import uuid from 'uuid'

export default function Recipe({name, categories, ingredients, steps}) {
  return (
    <div className="recipe">
      <h1>{name}</h1>
      <CategoryList key={uuid.v4()} categories={categories} />
      <IngredientList key={uuid.v4()} ingredients={ingredients} />
      <StepList key={uuid.v4()} steps={steps} />
    </div>
  );
}

