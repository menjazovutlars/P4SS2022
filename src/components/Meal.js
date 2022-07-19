import React, { Component, createElement, ReactDOM } from "react";
import {db} from '../database'
const mealsContainer = document.getElementById('mealsContainer');



class Meal extends Component {
    constructor(props) {
           super(props);
           this.state = {
            name: props.name,
            categories: props.categories,
           ingredients: props.ingredients,
           steps: props.steps,
           mounted: false,
           }
    }
    
    componentDidMount() {
        this.setState(
          {
            mounted: true
          },
          () => {
            console.log(this.state, "state2");
          }
        )
    }
    
    
    
    render() {
        console.log(this.state)
        console.log(this.props)
        console.log(this.state.steps)
        if (this.state.mounted === false) {
            return null
        } else {
           return (
             <div>
               <h1>{this.state.name}</h1>
               <ol>
                 {this.state.categories.map((category) => (
                   <li>{category.name}</li>
                 ))}
               </ol>
               <ol>
                 {this.state.ingredients.map((ingredient) => (
                   <li>{ingredient.name}</li>
                 ))}
               </ol>
               <ul>
                 {this.state.steps.map((step) => ( 
                    
                
                   <li>{step}</li>
                 ))}
               </ul>
             </div>
           ); 
        }
        
        
        
    }
    
}

export default Meal;