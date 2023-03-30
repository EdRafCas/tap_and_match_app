import React,{useState} from 'react';
import LeftJigSaw from './Components/LeftJigSaw';
import Columns from './Components/Columns'
import './App.css';
import './App.scss';




const App = () => {

  
  

  const WordList = [
    {
      id:1,
      english:"Chair",
      spanish:"Silla",
      completed:false
    },
    {
      id:2,
      english:"House",
      spanish:"Casa",
      completed:false
    },
    {
      id:3,
      english:"Orange",
      spanish:"Naranja",
      completed:false
    },
    {
      id:4,
      english:"Tree",
      spanish:"Arbol",
      completed:false
    },
    {
      id:5,
      english:"Cellphone",
      spanish:"Celular",
      completed:false
    }
  ]

  var ShuffledList = [...WordList]
  var ShuffledList = ShuffledList.sort((a, b)=> 0.5 - Math.random());
  var ShuffledList2 = [...WordList]
  var ShuffledList2 = ShuffledList2.sort((a, b)=> 0.5 - Math.random());
  console.log(WordList)
  console.log(ShuffledList)
  

  return ( 
    <div className='container' >
      <Columns
        ShuffledList={ShuffledList}
        ShuffledList2={ShuffledList2}/>
      {/* <div className='inner-container first-column'>
        {ShuffledList.map((item, index)=>{
          return(
            <LeftJigSaw item={item}
                        leftColumn={leftColumn}
                        changeLeftColumn={changeLeftColumn}/>

          )})}
      </div> */}
     {/*  <div className='inner-container second-column'>
        {ShuffledList2.map((item, index)=>{
          return(
          <div className='item-container' key={ShuffledList2.index}>
            <div className='right-jigsaw'></div>
            <span>{item.id}, {item.spanish}</span>
          </div>
          )
        })}
      </div> */}
    </div>
   );
}
 
export default App;