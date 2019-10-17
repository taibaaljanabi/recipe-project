import React, { Component } from 'react';
import {recipe} from '../tempDetails'

export default class RecipeDetails extends Component {
  constructor(props){
    super(props)

    this.state = {
      recipe: {},
      url: `https://www.food2fork.com/api/get?key=08205ce5e66a94eabe16ae3e402ea812&q&rId=${this.props.id}`
      
    }
  }
  
  render() {
    return (
     <React.Fragment>
         <h1>Hello from details</h1>
     </React.Fragment>
    );
  }
}
