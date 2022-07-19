import "./App.css";
import Recipe from "./components/Recipe/Recipe";
import React, { useRef, useState, useEffect } from "react";
import {db} from "./database"
import * as util from './utilities'
import Webcam from "react-webcam";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { loadGraphModel } from "@tensorflow/tfjs-converter";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as IMAGE_NET_LABELS from "./ImageNetLabels";
import Meal from "./components/Meal";
import uuid from 'uuid'

function Gallery(data) {
  return null /*data.map((item) =>
      <Recipe
        name={item.name}
        categories={item.categories}
        ingredients={item.ingredients}
        steps={item.steps}
      />
      
    )
    */
}

/*
function Slideshow() {
  const [slideCount, setSlideCount] = useState(0);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setSlideCount((slideCount + 1) % data.length);
    }, 5000);
    return () => clearTimeout(timeout);
  });
  // console.log(slideCount);
  console.log(data[slideCount]);
  const x = data[slideCount];
  return x.type === "pic" ? (
    <Recipe name={x.id} src={x.src} title={x.title} info={x.info} />
  ) : (
    <Quote
      key={x.id}
      title={x.title}
      info={x.info}
      description={x.description}
    />
  );
}
*/

function App() {
    const [recipes, setRecipes] = useState([
     
    ]);
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
  const [showSlide, setShowSlide] = useState(false);
  const toggleSlideshow = () => {
    setShowSlide(!showSlide);
  };
  console.log(showSlide);
  
  
  const recipeMap = new Map();
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
  const recipe = {};
  
  const recipeArray = [];
  
 

   //database 
   
   
  
   
 
  const initRecipeObj = () => {
    recipe.frames = [];
    recipe.categories = [];
    recipe.ingredients = [];
    recipe.name = "";
    recipe.steps = [];
  }
   
  const resetRecipeObj = () => {
    recipe.frames = [];
    recipe.categories = [];
    recipe.ingredients = [];
    recipe.name = "";
     recipe.steps = [];
  }
  
   const handleAddRecipe =  (e) => {
    const recipesToBeAdded = recipeArray
    recipesToBeAdded.forEach(r => {
        if (recipes.includes(r)) {
          return;
        }
        setRecipes((prevRecipes) => {
          return [
            ...prevRecipes,
            {
              name: r.name,
              categories: r.categories,
              ingredients: r.ingredients,
              steps: r.steps,
            },
          ];
        });
    })
    
  }
  
  useEffect(() => {
    handleAddRecipe();
  })
  
  const getFrames = (members) => {
    initRecipeObj();
    
    let framesIdArray = [];
    for (const item of members) {
        
        
      for (const entry in db.members_frames) {
        if (db.members_frames[entry].members_id === item) {
          const framesId = db.members_frames[entry].frames_id;

          console.log(
            "frames ID " + framesId + "  need " + db.frames[framesId - 1].name
          );
            recipe.frames.push(db.frames[framesId - 1]);
          framesIdArray.push(framesId);
          getCategoriesOfFrames(framesIdArray);
          ;
        }
      }

      //getCategoriesOfframes(framesIdArray);
      
      console.log(recipeMap.size);
      if (recipeMap.size > 0) {
        recipeArray.push(Object.fromEntries(recipeMap));
      }
      recipeMap.clear();
      resetRecipeObj();
      
      framesIdArray = [];
      
      console.log(recipe);
      console.log(recipeArray)
    }
  };
  
  const getCategoriesOfFrames = (frames) => {
    const categoriesIdArray = [];
    for (const item of frames) {
        
      for (const entry in db.frames_categories) {
        if (db.frames_categories[entry].frames_id === item) {
          const categoriesId = db.frames_categories[entry].categories_id;

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


    getIngredients(categoriesIdArray);
  };
  
  
  const getIngredients = (categories) => {
    const ingredientsIdArray = [];
   

    for (let i = 0; i < categories.length; i++) {
      for (let j = 0; j < categories[i].length; j++) {
        const ingredients = db.ingredients_categories.filter(
          (ingredient) =>
            Object.values(ingredient.categories_id).includes(
              categories[i][j]
            ) === true
        );
        
        recipe.categories.push(db.categories[categories[i][j]]);
        
    

        for (let k = 0; k < ingredients.length; k++) {
          if (ingredientsIdArray.includes(ingredients[k].ingredients_id)) {
          } else {
            ingredientsIdArray.push(ingredients[k].ingredients_id);
            recipe.ingredients.push(
              db.ingredients[ingredients[k].ingredients_id - 1]
            );
            console.log(
              "ingredient ID " +
                ingredients[k].ingredients_id +
                "  ingredient " +
                db.ingredients[ingredients[k].ingredients_id - 1].name
            );
           
          }
        }
      }
    }
    


    getMeals(ingredientsIdArray);
  };
  
  const getMeals = (ingredients) => {
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
          
          recipe.name = db.meals[meals[j].meals_id - 1].name;
          
     
    
          
          getStepsForMeal(mealsIdArray);
        }
      }
    }
  };
  
  const getStepsForMeal = (meals) => {
    let stepsIdArray = [];
    recipe.steps = [];

    for (let i = 0; i < meals.length; i++) {
      const steps = db.meals_steps.filter((step) => step.meals_id === meals[i]);

      for (let j = 0; j < steps.length; j++) {
        if (stepsIdArray.includes(steps[j].steps_id)) {
        } else {
          stepsIdArray = steps[j].steps_id;
        }
      }
    }
    
    printSteps(stepsIdArray);
  };
  
  const printSteps = (steps) => {
    
    
    steps.forEach((step) => {
      console.log("step ID " + step + "  step " + db.steps[step - 1].step);
        
      recipe.steps.push(db.steps[step - 1]);
      
    });
    
    console.log(recipe, 'recipe');
    
    
    
    recipeMap.set(recipe.name, {
      name: recipe.name,
      frames: recipe.frames,
      ingredients: recipe.ingredients,
      steps: recipe.steps
      
    })
    
    console.log(recipeMap);
    


    
    /*
    setRecipes(prevRecipes => {
        return[...prevRecipes, recipe]
    })
    
    */
    console.log(recipes)
    console.log(recipeArray)
    
    
    
    
  };
  
  // Object detection
  
   const convertImage = async (imageData) => {
     let imageTensor = tf.browser
       .fromPixels(imageData)
       .resizeNearestNeighbor([224, 224])
       .toFloat()
       .div(tf.scalar(255.0))
       .expandDims();
     return imageTensor;
   };
   
   
   
   const detect = async (net) => {
     // Check data is available
     if (
       typeof webcamRef.current !== "undefined" &&
       webcamRef.current !== null &&
       webcamRef.current.video.readyState === 4
     ) {
       // Get Video Properties
       const video = webcamRef.current.video;
       const videoWidth = webcamRef.current.video.videoWidth;
       const videoHeight = webcamRef.current.video.videoHeight;

       // Set video width
       webcamRef.current.video.width = videoWidth;
       webcamRef.current.video.height = videoHeight;

       // Set canvas height and width
       canvasRef.current.width = videoWidth;
       canvasRef.current.height = videoHeight;

       // 4. TODO - Make Detections
       // e.g. const obj = await net.detect(video);

       const img = webcamRef.current.getScreenshot();
       const imageTensor = await convertImage(video);
       //console.log(img);
       //console.log(typeof img);
       const predictions = await net.predict(imageTensor);

       const obj = await net.predict(imageTensor).data();
       const top5 = Array.from(obj)
         .map(function (p, i) {
           return {
             probability: p,
             className: IMAGE_NET_LABELS.label[i],
           };
         })
         .sort(function (a, b) {
           return b.probability - a.probability;
         })
         .slice(0, 5);

       //const obj = await net.predict(img).print();

       console.log();
       console.log(predictions);
       console.log(top5);

       // Draw mesh
       const ctx = canvasRef.current.getContext("2d");

       // 5. TODO - Update drawing utility
       // drawSomething(obj, ctx)
       util.drawRect(top5, ctx);
     }
   };
   
  
  useEffect(() => {
    getFrames([1, 2, 3]);
  });
  

  
  console.log(recipes);
  
  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>

      <div></div>
      <div id="mealContainer" style={{ height: 500 }}>
        <Gallery data={[]}></Gallery>
        
      </div>
      <button onClick={toggleSlideshow}>Change Viewmode</button>
    </div>
  );
}

export default App;
