import React from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'

function App() { return (<RecipeList recipes={sampleRecipes}/>) }

const sampleRecipes = [
{
      id: 1,
      name: "Plain Chicken",
      servings: "3",
      cookTime: "1:45",
      instructions: "1.Put Salt On Chicken\n 2.Put Chicken oven\n 3.Eat Chicken",
      ingredients: [ {id: 1, name:"Chicken", amount:"3 Pounds"}, { id: 2,  name:"salt", amount:"2 tbs"} ]
},
{
      id: 2,
      name: "Plain Pork",
      servings: "5",
      cookTime: "5:45",
      instructions: "1.Put Salt On Pork\n 2.Put Pork oven\n 3.Eat Pork",
      ingredients: [ { id: 1,name:"Pork",amount:"3 Pounds"},{id: 2,name:"salt", amount:"2 tbs"} ]
}
]

export default App;