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

const MODEL_URL = "food_classifier_tfjs/model.json";



console.log(IMAGE_NET_LABELS);

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

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
    
    let imageTensor = tf.browser.fromPixels(imageData).resizeNearestNeighbor([224,224]).toFloat().div(tf.scalar(255.0)).expandDims();
    
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
    return imageTensor
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
     version: 2, alpha: 1.0
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
      const top5 = Array.from(obj).map(function (p, i) {
        return {
          probability: p,
          className: IMAGE_NET_LABELS.label[i]
        };
      }).sort(function (a,b) {
        return b.probability - a.probability;
      }).slice(0, 5);
      
      
     

      //const obj = await net.predict(img).print();
      
      console.log()
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
  useEffect(() => {
    runMobilenet();
  }, [runMobilenet]);

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
    </div>
  );
}

export default App;
