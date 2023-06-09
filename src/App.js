import React,{useState, useEffect} from 'react';
import Columns from './Components/Columns'
import './App.css';
import './App.scss';
import {CounterContextProvider} from './Context/CounterContext';
import { store } from './Redux/store'
import { Provider } from 'react-redux';


const App = () => {
  const [reset, countReset] = useState(0)
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
      english:"Cup",
      spanish:"Copa",
      completed:false
    },
    {
      id:21,
      english:"Compass",
      spanish:"Brújula",
      completed:false
    },
    {
      id:22,
      english:"Hawk",
      spanish:"Águila",
      completed:false
    },
    {
      id:23,
      english:"Notebook",
      spanish:"Cuaderno",
      completed:false
    },
    {
      id:24,
      english:"Book",
      spanish:"Libro",
      completed:false
    },
    {
      id:25,
      english:"Disk",
      spanish:"Disco",
      completed:false
    },
    {
      id:26,
      english:"Glass",
      spanish:"Vidrio",
      completed:false
    },
    {
      id:27,
      english:"Glass",
      spanish:"Vidrio",
      completed:false
    },
    {
      id:28,
      english:"Axe",
      spanish:"Hacha",
      completed:false
    },
    {
      id:29,
      english:"Tire",
      spanish:"Neumatico",
      completed:false
    },
    {
      id:30,
      english:"Watch",
      spanish:"Reloj",
      completed:false
    },
    {
      id:31,
      english:"Wheel",
      spanish:"Rueda",
      completed:false
    },
    {
      id:32,
      english:"Cloth",
      spanish:"Ropa",
      completed:false
    },
    {
      id:33,
      english:"Fabric",
      spanish:"Tela",
      completed:false
    },
    {
      id:34,
      english:"Flower",
      spanish:"Flor",
      completed:false
    },
    {
      id:35,
      english:"Iron",
      spanish:"Hierro",
      completed:false
    },
    {
      id:36,
      english:"Rust",
      spanish:"Oxido",
      completed:false
    },
    {
      id:37,
      english:"Egg",
      spanish:"Huevo",
      completed:false
    },
    {
      id:38,
      english:"Foot",
      spanish:"Pie",
      completed:false
    },
    {
      id:39,
      english:"Nose",
      spanish:"Nariz",
      completed:false
    },
    {
      id:40,
      english:"Liver",
      spanish:"Higado",
      completed:false
    },
    {
      id:41,
      english:"Headphone",
      spanish:"Audifonos",
      completed:false
    },
    {
      id:42,
      english:"Knife",
      spanish:"Cuchillo",
      completed:false
    },
    {
      id:43,
      english:"Ear",
      spanish:"Oreja",
      completed:false
    },
    {
      id:44,
      english:"Suit",
      spanish:"Traje",
      completed:false
    },
    {
      id:45,
      english:"Suit",
      spanish:"Traje",
      completed:false
    },
    {
      id:46,
      english:"Cane",
      spanish:"Baston",
      completed:false
    },
    {
      id:47,
      english:"Beer",
      spanish:"Cerveza",
      completed:false
    },
    {
      id:48,
      english:"Factory",
      spanish:"Fabrica",
      completed:false
    },
    {
      id:49,
      english:"Keyboard",
      spanish:"Teclado",
      completed:false
    },
    {
      id:50,
      english:"Bicycle",
      spanish:"Bicicleta",
      completed:false
    }
  ]
  
   

  useEffect(()=>{


  }, [])


  return ( 
    <CounterContextProvider>
      <Provider store={store}>
          <Columns
          WordList={WordList}
          reset={reset}
          countReset={countReset}/>
      </Provider>
    </CounterContextProvider>
   );
}
 
export default App;