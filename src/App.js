import React,{useContext, useState, useEffect} from 'react';
import LeftJigSaw from './Components/LeftJigSaw';
import Columns from './Components/Columns'
import './App.css';
import './App.scss';
import {CounterContextProvider, CounterContext} from './Context/CounterContext';




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
    },
    {
      id:6,
      english:"Pencil",
      spanish:"Lapiz",
      completed:false
    },
    {
      id:7,
      english:"Desktop",
      spanish:"Escritorio",
      completed:false
    },
    {
      id:8,
      english:"Brother",
      spanish:"Hermano",
      completed:false
    },
    {
      id:9,
      english:"Sister",
      spanish:"Hermana",
      completed:false
    },
    {
      id:10,
      english:"Shield",
      spanish:"Escudo",
      completed:false
    },
    {
      id:11,
      english:"Doll",
      spanish:"Muñeca",
      completed:false
    },
    {
      id:12,
      english:"Toy",
      spanish:"Juguete",
      completed:false
    },
    {
      id:13,
      english:"Toy",
      spanish:"Juguete",
      completed:false
    },
    {
      id:14,
      english:"Door",
      spanish:"Puerta",
      completed:false
    },
    {
      id:15,
      english:"Window",
      spanish:"Ventana",
      completed:false
    },
    {
      id:16,
      english:"Key",
      spanish:"Llave",
      completed:false
    },
    {
      id:17,
      english:"Soap",
      spanish:"Jabón",
      completed:false
    },
    {
      id:18,
      english:"Soup",
      spanish:"Sopa",
      completed:false
    },
    {
      id:19,
      english:"Bird",
      spanish:"Pajaro",
      completed:false
    },
    {
      id:20,
      english:"Bird",
      spanish:"Pajaro",
      completed:false
    }
  ]
   const [reset, countReset] = useState(0)
   

  
  /* const [ShuffledList, changeShuffledList] = useState([...WordList])
  const [ShuffledList2, changeShuffledList2] = useState([...WordList]) */


/*     var ShuffledList = [...WordList]
    var ShuffledList = ShuffledList.sort((a, b)=> 0.5 - Math.random());
    var ShuffledList2 = [...WordList]
    var ShuffledList2 = ShuffledList2.sort((a, b)=> 0.5 - Math.random()); */

    /* console.log(WordList)
    console.log(ShuffledList) */

  useEffect(()=>{

    

   /*  changeShuffledList(ShuffledList.sort((a, b)=> 0.5 - Math.random()))
    changeShuffledList2(ShuffledList2.sort((a, b)=> 0.5 - Math.random())) */

    

  }, [])



  return ( 
    <CounterContextProvider>
      
        <div>
          <Columns
          WordList={WordList}
          /* ShuffledList={ShuffledList}
          ShuffledList2={ShuffledList2}
          changeShuffledList={changeShuffledList}
          changeShuffledList2={changeShuffledList2} */
          reset={reset}
          countReset={countReset}/>
        </div>
     
        
      
    </CounterContextProvider>
   );
}
 
export default App;