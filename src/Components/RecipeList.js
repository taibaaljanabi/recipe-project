import React, { Component } from 'react';
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'
import { recipe } from '../tempDetails';


export default class RecipeList extends Component {
  render() {
    const {recipes, handelDetails, value, handelChange, handelSubmit} = this.props
  
    
    return (
     <React.Fragment>
         <RecipeSearch value = {value} handelChange = {handelChange} handelSubmit = {handelSubmit}/>
         <div className = 'container my-5'>
         {/*title*/}
         <div className = 'row'>
         <div className = 'col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
         <h1 className = 'text-slanted'> Recipe list</h1>
         </div> 
         </div>
         {/* end of title*/}
         <div className='row'>
         {
           recipes.map(recipe =>{
             return (
               <Recipe key={recipe.recipe_id}
                      recipe = {recipe} handelDetails = {
                      ()=>handelDetails(0,recipe.recipe_id)
                }
                      />
             )
           })}
         </div>
         </div>
     </React.Fragment>
    );
  }
}
