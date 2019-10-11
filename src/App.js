import React, { Component } from 'react';
import './App.css' 
import {recipes} from './tempList'
import RecipeList from './Components/RecipeList'
import RecipeDetails from './Components/RecipeDetails'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
       <RecipeList/>
       <RecipeDetails/>
      </React.Fragment>
    );
  }
}

