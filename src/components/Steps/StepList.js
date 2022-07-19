import React from 'react'
import Step from './Step';
import uuid from 'uuid'

export default function StepList( {steps}) {
  return steps.map((step) => {
    return (
      
        
        <Step key={uuid.v4()} step={step.step}></Step>
      
    );
  });
}
