import React,{useState} from 'react';
import './App.css';
import './App.scss';




const App = () => {

  const [leftColumn, changeLeftColumn] = useState("none")
  const [rightColumn, changeRightColumn] = useState("none")
  
  const WordList = [
    {
      id:1,
      english:"Chair",
      spanish:"Silla"
    },
    {
      id:2,
      english:"House",
      spanish:"Casa"
    },
    {
      id:3,
      english:"Orange",
      spanish:"Naranja"
    },
    {
      id:4,
      english:"Tree",
      spanish:"Arbol"
    },
    {
      id:5,
      english:"Tree",
      spanish:"Arbol"
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
      <div className='inner-container first-column'>
        {ShuffledList.map((item, index)=>{
          return(
          <div className='item-container' key={WordList.index}>
            <div className='left-jigsaw'></div>
            <span>{item.id}, {item.english}</span>
          </div>
          )
        })}
      </div>
      <div className='inner-container second-column'>
        {ShuffledList2.map((item, index)=>{
          return(
          <div className='item-container' key={ShuffledList2.index}>
            <div className='right-jigsaw'></div>
            <span>{item.id}, {item.spanish}</span>
          </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default App;