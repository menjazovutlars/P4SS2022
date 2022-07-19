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
      <h2>Kategorien:</h2>
      <CategoryList key={uuid.v4()} categories={categories} />
      <h2>Zutaten:</h2>
      <IngredientList key={uuid.v4()} ingredients={ingredients} />
      <h2>Zubereitungsschritte:</h2>
      <StepList key={uuid.v4()} steps={steps} />
    </div>
  );
}

