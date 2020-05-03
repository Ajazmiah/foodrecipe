import React from 'react';

const Recipe = (props)=> {

const styleLi = {
          listStyleType:'decimal',
          textAlign: 'left'}

const headerStyle= {
    fontSize: '1.2rem',
    fontFamily: 'initial'
}
const imgBorder = {border: '4px solid #d843155c', borderRadius: '50%' , width:'60%'}
const list = props.ingridient.map(li=> <li style={styleLi}>{li}</li>);

  return(


      <div className='eachRecipe'>
        <h1 style={headerStyle}>{props.label}</h1>
        <img src ={props.img} style={imgBorder}/>
        <p className='calories'> CALORIES: {props.calories}</p>
        <a href={props.url} className='moreBtn'>More</a>

        <ul className='ingridient-list'>
        <h1>ingridients</h1>
        {list}
        </ul>
      </div>
    );
}
export default Recipe;
