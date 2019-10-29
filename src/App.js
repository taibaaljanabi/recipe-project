import React, { Component } from 'react';
import './App.css' 
import {recipes} from './tempList'
import RecipeList from './Components/RecipeList'
import RecipeDetails from './Components/RecipeDetails'

export default class App extends Component {
  state = {
    recipes : recipes,
    url : 'https://www.food2fork.com/api/search?key=08205ce5e66a94eabe16ae3e402ea812&q',
    baseUrl: 'https://www.food2fork.com/api/search?key=08205ce5e66a94eabe16ae3e402ea812&q',
    details_id: 35389,
    index: 1,
    search: "",
    query: '&q=',
    error:''
  }



  async  getRecipes() {
    try{
      const data =  await fetch(this.state.url)
      const jsonData = await data.json()
      console.log(jsonData)

      if (jsonData.recipes.length == 0){
        this.setState(()=>{
          return {error:'Sorry, but your search did not show any result'}
        })
      }else{
      this.setState(
        ()=>{
          return {recipes: jsonData.recipes}
        }
      )
      }
    }catch(error){
     console.log(error)
    }
  }
  componentDidMount(){
    this.getRecipes()
  } 

  displayPage = index => {
    switch (index){
      default:
      case 1:
      return (<RecipeList 
         recipes = {this.state.recipes}
         handelDetails = {this.handelDetails}
         value = {this.state.value} 
         handelChange = {this.handelChange}
         handelSubmit = {this.handelSubmit}
         error = {this.state.error}
      />)
      case 0:
      return (<RecipeDetails 
        id = {this.state.details_id} 
        handelIndex = {this.handelIndex}
        />)
    }
  }
  handelIndex = index => {
    this.setState({
      index : index
    })

  }

  handelDetails  = (index,id) => {
    this.setState({
      index: index,
      details_id: id
    })
  }
  handelChange = e =>{
   this.setState(
     {
     search: e.target.value
     },
      () => {
     console.log(this.state.search)
     }
   )
  }
  handelSubmit = e =>{
    e.preventDefault()
    const {query, baseUrl, search} = this.state
    this.setState(()=>{
      return {url: `${baseUrl} ${query} ${search}`, search :'' }
    }, ()=>{
      this.getRecipes()
    })

  }


  render() {
    console.log(this.state.recipes)
    return (
      <React.Fragment>
      {this.displayPage(this.state.index)}
      </React.Fragment>
    );
  }
}

