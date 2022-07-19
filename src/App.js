/* eslint-disable react-hooks/exhaustive-deps */
// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
// 1. TODO - Import required model here
import * as cocossd from "@tensorflow-models/coco-ssd";
import { loadGraphModel } from "@tensorflow/tfjs-converter";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as IMAGE_NET_LABELS from "./ImageNetLabels";

import Webcam from "react-webcam";
import "./App.css";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import { drawRect } from "./utilities";
import { norm } from "@tensorflow/tfjs";
import { db } from "./database";
import Meal from "./components/Meal";

const MODEL_URL = "food_classifier_tfjs/model.json";
const mealCompArray = [];

console.log(IMAGE_NET_LABELS);




function Gallery(mealArray) {
  console.log(mealArray.data[0].length, 'data length');
  console.log(mealArray, 'data')
  if (mealArray.data.length < 1) {
    return null
  } else {
  return(
               mealArray.data[0].map((item) => (
                 <Meal
                   name={item.name}
                   categories={item.categories}
                   ingredients={item.ingredients}
                   steps={item.steps}
                   style={{ width: "500px", height: "500px" }}
                 />
               ))
               )
    
               }
}

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [mealsList, updateMealsList] = useState([]);
  
  
  let mealComp = {};
    mealComp.ingredients = [];
    mealComp.steps = [];
    mealComp.categories = [];

  
  
  
  
  

  // Main function
  /*
  const runCoco = async () => {
    // 3. TODO - Load network 
    // e.g. const net = await cocossd.load();
    //const net = await cocossd.load();
    /*const net = await tf.loadGraphModel(
      "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_130_224/classification/3/default/1",
      { fromTFHub: true }
    );
    
    console.log(net);
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };
  */

  const convertImage = async (imageData) => {
    let imageTensor = tf.browser
      .fromPixels(imageData)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();

    /*
    console.log(imageTensor);
    const offset = tf.scalar(255.0);
    const normalized = tf.scalar(1.0).sub(imageTensor.div(offset));
        const reshaped = normalized
          .resizeBilinear([224, 224])
          

    const batched = reshaped.expandDims(0);
    //const reshaped = batched.reshape([-1, 224, 224, 3]);
    console.log(batched);
    return batched;
    */
    return imageTensor;
  };

  

  const getNeeds = (members) => {
    
    
    //mealComp.possibleMeals = [];
      
      
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
      
   
  
    
    //getCategoriesOfNeeds(needsIdArray);
  };
  
  
 

  const getCategoriesOfNeeds = (needs) => {
    
    const recipe = new Meal(mealComp);
    if (mealCompArray.includes(recipe)) {
    } else {
      mealCompArray.push(recipe);
    }
    updateMealsList([...mealsList, mealComp]);
    
    
    
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
    
    getIngredients(categoriesIdArray);
  };
  
  
  const getIngredients = (categories) => {


    const ingredientsIdArray = [];

    for (let i = 0; i < categories.length; i++) {
      for (let j = 0; j < categories[i].length; j++) {
      const ingredients = db.ingredients_categories.filter(
        (ingredient) =>
          Object.values(ingredient.categories_id).includes(categories[i][j]) === true
      );
      
      if (mealComp.categories.includes(categories[i][j])) {
        
      } else {
        mealComp.categories.push(db.categories[categories[i][j] - 1])
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
          mealComp.name = db.meals[meals[j].meals_id - 1].name;
          getStepsForMeal(mealsIdArray, mealComp);
        }
      }
      
    }

  
  };
  
  const getStepsForMeal = (meals) => {
    let stepsIdArray = [];
    
    for (let i = 0; i < meals.length; i++) {
      const steps = db.meals_steps.filter(
        (step) => step.meals_id === meals[i]
  
      );
      

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
    mealComp.steps = [];
    steps.forEach(step => {
      console.log(
            "step ID " +
              step +
              "  step " +
              db.steps[step -1 ].step
          );
          mealComp.steps.push(db.steps[step - 1].step);
          
    })
    
    
    /*
    updateMealsList(...mealsList, () => {
      if(!mealsList.includes(mealComp)) {
         return mealComp
      }
    });
    */
      
    
    console.log(mealsList);
    console.log(mealCompArray);
  
    //updateMealsList([...mealsList, mealComp])
    debugger
    //recipe.setProperties(mealComp);
    
    
  }
  


  const runMobilenet = async () => {
    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    //const net = await cocossd.load();
    const net = await tf.loadGraphModel(
      "https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_130_224/classification/3/default/1",
      { fromTFHub: true }
    );

    const model = await mobilenet.load({
      version: 2,
      alpha: 1.0,
    });
    console.log(model);
    console.log(net);
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 1000);
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
      drawRect(top5, ctx);
    }
  };

  //useEffect(()=>{runCoco()},[runCoco]);
  /*useEffect(() => {
    runMobilenet();
  }, [runMobilenet]);
*/
  /*
  useEffect(() => {
    getIngredients(["Zwiebel", "Karotte"]);
  }, [getIngredients]);
  */
  
  
  useEffect(() => {
    getNeeds([1,2, 3]);
  }, [getNeeds]);
  
   useEffect(() => {
     console.log("meals changed", mealsList);
   }, [mealsList]); 
  
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
      
      <Gallery data={[mealsList]}></Gallery>
      </div>
    </div>
  );
}

export default App;
