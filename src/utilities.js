import { db } from "./database";


export const drawRect = (detections, ctx) => {
    // Get prediction results
    let dy = 50;
    detections.forEach(prediction => {
        //const [x, y, width, height] = prediction['bbox'];
        const text = prediction['className'];
        dy += 20
        
        // Styling
        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color
    
        ctx.beginPath()
        ctx.fillText(text, 20, dy)
        //ctx.rect(x, y, width, height)
        ctx.stroke()
        
    })
    
}

export const getNeeds = (members) => {
  let needsIdArray = [];
  for (const item of members) {
    for (const entry in db.members_needs) {
      if (db.members_needs[entry].members_id === item) {
        const needsId = db.members_needs[entry].needs_id;

        console.log(
          "needs ID " + needsId + "  need " + db.needs[needsId - 1].name
        );

        needsIdArray.push(needsId);
      }
    }

    getCategoriesOfNeeds(needsIdArray);
    needsIdArray = [];
  }
};

export const getCategoriesOfNeeds = (needs, mealComp) => {
    
   
 
  const categoriesIdArray = [];
  for (const item of needs) {
    for (const entry in db.needs_categories) {
      if (db.needs_categories[entry].needs_id === item) {
        const categoriesId = db.needs_categories[entry].categories_id;

        /*console.log(
            "category ID " +
              categoriesId +
              "  need " +
              db.categories[categoriesId - 1].name
          );
          */
        categoriesIdArray.push(categoriesId);
        //getIngredients(categoriesIdArray);
      }
    }
  }

  getIngredients(categoriesIdArray, mealComp);
};

export const getIngredients = (categories, mealComp) => {
  const ingredientsIdArray = [];
  mealComp.ingredients = [];

  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < categories[i].length; j++) {
      const ingredients = db.ingredients_categories.filter(
        (ingredient) =>
          Object.values(ingredient.categories_id).includes(categories[i][j]) ===
          true
      );

      if (mealComp.categories.includes(categories[i][j])) {
      } else {
        mealComp.categories.push(db.categories[categories[i][j] - 1]);
      }

      for (let k = 0; k < ingredients.length; k++) {
        if (ingredientsIdArray.includes(ingredients[k].ingredients_id)) {
        } else {
          ingredientsIdArray.push(ingredients[k].ingredients_id);
          console.log(
            "ingredient ID " +
              ingredients[k].ingredients_id +
              "  ingredient " +
              db.ingredients[ingredients[k].ingredients_id - 1].name
          );
          mealComp.ingredients.push(
            db.ingredients[ingredients[k].ingredients_id - 1]
          );
          console.log(mealComp);
        }
      }
    }
  }

  getMeals(ingredientsIdArray, mealComp);
};

export const getMeals = (ingredients, mealComp) => {
  const mealsIdArray = [];

  for (let i = 0; i < ingredients.length; i++) {
    const meals = db.meals_ingredients.filter(
      (meal) =>
        Object.values(meal.ingredients_id).includes(ingredients[i]) === true
    );

    for (let j = 0; j < meals.length; j++) {
      if (mealsIdArray.includes(meals[j].meals_id)) {
      } else {
        mealsIdArray.push(meals[j].meals_id);

        console.log(
          "meal ID " +
            meals[j].meals_id +
            "  meal " +
            db.meals[meals[j].meals_id - 1].name
        );
        mealComp.name = db.meals[meals[j].meals_id - 1].name;
        getStepsForMeal(mealsIdArray, mealComp);
      }
    }
  }
};

export const getStepsForMeal = (meals, mealComp) => {
  let stepsIdArray = [];

  for (let i = 0; i < meals.length; i++) {
    const steps = db.meals_steps.filter((step) => step.meals_id === meals[i]);

    for (let j = 0; j < steps.length; j++) {
      if (stepsIdArray.includes(steps[j].steps_id)) {
      } else {
        stepsIdArray = steps[j].steps_id;
      }
    }
  }
  printSteps(stepsIdArray, mealComp);
};

export const printSteps = (steps, mealComp) => {
    console.log(mealComp);
  mealComp.steps = [];
  steps.forEach((step) => {
    console.log("step ID " + step + "  step " + db.steps[step - 1].step);
    mealComp.steps.push(db.steps[step - 1].step);
  });

};