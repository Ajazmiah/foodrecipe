import React, {Component} from 'react';
import Recipe from './Recipe'
/////////////
///   https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
const id = '3b511dba';
const key = '152a9f0fe331d6bdd9b8e36f51152eb4'

class FormContainer extends Component{
    constructor() {
      super();
      this.state={
        searchedItem: '',
        recipedData: [],
        formSubmit: false


      };
    }
///////////////////////////////////////////
////
handleChange = (event)=>{
  this.setState({
   searchedItem: event.target.value
 })
}

handleSubmit =(event)=>{
  event.preventDefault();
  this.setState({
    formSubmit: true
  })
}
async componentDidUpdate(){
  if(this.state.formSubmit){
    try{
      const results = await fetch(`https://api.edamam.com/search?q=${this.state.searchedItem}&app_id=${id}&app_key=${key}`);
      const data =  await results.json()
      const recipe = data.hits;

      this.setState({
        recipedData: recipe
        // loading: "loading.."
    })
    this.setState({
      formSubmit: false
    })
  }
    catch(error){
      console.log(error)
    }
  }
}

render(){
    const searchBtn = {
      flex: '0 0 10%',
      borderRadius: '10px',
      border: 'none',
      outline: 'none',
      color: '#fff',
      background: '#8400ff',
      cursor: 'pointer'
    }
    const inputStyle ={
      padding: '1rem',
      borderRadius: '10px',
      outline: 'none',
      border:'none',
      flex: '0 0 40%',
      marginRight: '1rem'
    }
    const formStyle = {
      padding:'2rem',
      background: '#FF5722',
      display: 'flex',
      justifyContent: 'center'
    }

return(
    <div>
      <form onSubmit={this.handleSubmit} style={formStyle} >
        <input style={inputStyle}
              placeholder="Search for Recipe"
              value={this.state.searchedItem}
              onChange={this.handleChange}
              name='recipe'
              />

        <button style={searchBtn}>Search</button>
      </form>

      <div className= 'main'>
      {
        this.state.recipedData.map(data=>
          <Recipe
            label={data.recipe.label}
            img={data.recipe.image}
            calories={data.recipe.calories}
            url={data.recipe.url}
            key={data.recipe.url}
            ingridient={data.recipe.ingredientLines}
            />
          )
        }
      </div>
    <h1>{}</h1>
    </div>
    )
  }
}

export default FormContainer;
