import React,{useEffect, useState} from 'react';
import '../App.scss'
import MatchGif from '../Components/CheckMarkOnce.gif'
import styled from 'styled-components';


const CheckIcon = styled.div`
      position:absolute;
      left:76px;
      display:flex;
      flex-direction:center;
      justify-content:center;
      align-items:center;
      z-index:1;
      border:1px black solid;

`

const OverlayContainer =styled.div`
      position:absolute;
      top:0px;
      left:0px;
      height:60px;
      width:200px;
      border:1px black solid;
      border-radius: 8px;
      display:flex;
      justify-content: center;
      align-items:center;
      cursor:pointer;
      background-color: grey;
`


const AnimationCheck= ({item}) => {
      const [loadGif, changeLoadGif] = useState(false)
      const [loadingComponent, changeLoadingComponent] =useState(true)

      useEffect(()=>{
            const checkLoad = ()=>{
                  if(item.completed === true){
                        changeLoadGif(true)
                        console.log(loadGif)
                        setTimeout(()=>{
                              changeLoadGif(false)
                              console.log("timeout")
                        }, 1000)
                  } else{
                  } 
            }
            checkLoad();
            changeLoadingComponent(false)
      
      },[item])

      const checkContainer = item.completed? (
            <img src={MatchGif} alt={"Completed"}/>
      ) : ("meh");

      
      

      return ( 
            <>
            {!loadingComponent?
            <>
                  {loadGif?
                  <CheckIcon className='check_container'>
                  {checkContainer}
                  </CheckIcon>
                  :
                  <OverlayContainer onClick={(e)=>{e.stopPropagation();}}>
                       <span>{item.id}, {item.english}</span>
                  </OverlayContainer>
                  }
            </>
            :""}
            </>
       );
}
 
export default AnimationCheck;