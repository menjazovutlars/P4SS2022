import styles from "../Recipe/Recipe.module.css";
import React,{ useState } from "react";
import CategoryList from "../Category/CategoryList";
import IngredientList from "../Ingredient/IngredientList";
import StepList from "../Steps/StepList";
import uuid from 'uuid'

export default function Recipe({name, categories, ingredients, steps}) {
  return (
    <div className="recipe">
      <div className="image"></div>
      
      <h1>{name}</h1>
      <h4>Jodies & Brians Kompromiss</h4>
      <h4 id="headline-category">Kategorien:</h4>
      <CategoryList key={uuid.v4()} categories={categories} />
      <div className="container">
      <div className="preparing" id="zutaten">
      <h2>Zutaten:</h2>
      <IngredientList key={uuid.v4()} ingredients={ingredients} />
      </div>
      <div className="preparing">
      {/* <h2>Zubereitungsschritte:</h2>
      <StepList key={uuid.v4()} steps={steps} /> */}
      </div>
      </div>
      

    </div>
  );
}

