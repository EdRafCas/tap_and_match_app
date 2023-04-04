import React,{useEffect, useState} from 'react';
import '../App.scss'
import MatchGif from '../Components/CheckMarkOnce.gif'
import styled from 'styled-components';


const CheckIcon = styled.div`
      position:absolute
      display:flex;
      flex-direction:center;
      justify-content:center;
      align-items:center;

`


const AnimationCheck= ({item}) => {
      const [loadGif, changeLoadGif] = useState(false)

      useEffect(()=>{
           if(item.completed === true){
            changeLoadGif(true)
           } else{
            
           }
          
      
      },[item])

      /* const checkContainer = completed? (
            <img src={MatchGif} alt={"Completed"}/>
      ) : (""); */

      return ( 
            <CheckIcon className='check_container'>
            {/* {checkContainer} */}
            </CheckIcon>
       );
}
 
export default AnimationCheck;