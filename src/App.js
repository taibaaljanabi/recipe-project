import React, { Component } from 'react';
import './App.css' 
import {recipes} from './tempList'
import RecipeList from './Components/RecipeList'
import RecipeDetails from './Components/RecipeDetails'

export default class App extends Component {
  state={
    recipes : recipes,
    url : 'https://www.food2fork.com/api/search?key=08205ce5e66a94eabe16ae3e402ea812&q'
  }



  // async  getRecipes(){
  //   try{
  //     const data =  await fetch(this.state.url)
  //     const jsonData = await data.json()
  //     this.setState({
  //       recipes : jsonData.recipes
  //     })
    
  //   }catch(error){
  //    console.log(error)
  //   }
  // }
  // componentDidMount(){
  //   this.getRecipes()
  // } 

  render() {
    console.log(this.state.recipes)
    return (
      <React.Fragment>
       <RecipeList recipes= {this.state.recipes}/>
       <RecipeDetails/>
      </React.Fragment>
    );
  }
}

