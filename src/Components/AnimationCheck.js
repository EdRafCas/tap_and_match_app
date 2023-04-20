import React,{useEffect, useState} from 'react';
import '../App.scss'
import MatchGif from '../img/CheckMarkOnce.gif'
import WrongGif from '../img/heart_icon_2.png'
import styled from 'styled-components';


const CheckIcon = styled.div`
      position:absolute;
      display:flex;
      height:60px;
      width:200px;
      border-radius: 8px;
      flex-direction:center;
      justify-content:center;
      align-items:center;
      z-index:1;
      /* border:1px red solid; */
      background-color:white;
      
      @media(max-width: 600px){ 
            width:150px;
      }
`
const CheckJigsawRight =styled.div`
      position:absolute;
      left:-10px;
      width:10px;
      height:20px;
      border-radius: 10px 0px 0px 10px;
      border:1px black solid;
      border-right:none;
      background-color: white;
      overflow:hidden;
      opacity:1;
      box-sizing: content-box;

`
const CheckJigsawLeft =styled.div`
      position:absolute;
      right:-1px;
      top:20px;
      width:10px;
      height:20px;
      border-radius: 10px 0px 0px 10px;
      border:1px black solid;
      border-right:none;
      background-color: white;
      overflow:hidden;
      opacity:1;
      box-sizing: content-box;

`

const OverlayContainer =styled.div`
      position:absolute;
      top:0px;
      left:0px;
      height:60px;
      width:200px;
      /* border:1px black solid; */
      border-radius: 8px;
      display:flex;
      justify-content: center;
      align-items:center;
      cursor:pointer;
      background-color: hsl(233, 11%, 84%);
      box-sizing: content-box;
      @media(max-width: 600px){ 
            width:150px;
      }
`


const CheckInner =styled.div`
      border-radius:50%;
      border:1px blue solid;
      display:flex;
      flex-direction:center;
      max-height:50px;
      max-width:50px;
      overflow:hidden;


      img{
            border:1px red solid;
            border-radius:50%;
            }

`

const AnimationCheck= ({item, rightColumn, rightside}) => {
      const [loadGif, changeLoadGif] = useState(false)
      const [wronGif, changeWrongGif] = useState(false)
      const [loadingComponent, changeLoadingComponent] =useState(true)

      useEffect(()=>{
            const checkLoad = ()=>{
                  if(item.completed === true ){
                        changeLoadGif(true)
                        console.log(loadGif)
                        setTimeout(()=>{
                              changeLoadGif(false)
                              console.log("animation timeout")
                        }, 1500)
                  } else{
                  } 
            }
            checkLoad();
            changeLoadingComponent(false)
      
      },[item])

      const checkContainer = loadGif? (
            <img src={MatchGif} alt={"Completed"}/>
      ) : ("meh");

      const wrongContainer = wronGif? (
            <img src={MatchGif} alt={"Completed"}/>
      ) : ("meh");

      
      

      return ( 
            <>
            {!loadingComponent?
            <>
                  {loadGif?
                  <>
                        {rightside?
                        <CheckIcon className='check_container'>
                              <CheckJigsawRight/>
                              {checkContainer}
                        </CheckIcon>
                        :
                        <CheckIcon className='check_container'>
                              <CheckJigsawLeft/>
                              {checkContainer}
                        </CheckIcon>
                        }
                  </>
                  :
                  <OverlayContainer onClick={(e)=>{e.stopPropagation();e.preventDefault();}}>
                        {rightside?
                        <>
                        <span>{item.id}, {item.spanish}</span>
                        <div className='right-inner-jigsaw completed'></div>
                        </>
                        :
                        <>
                        <span>{item.id}, {item.english}</span>
                        <div className='left-inner-jigsaw left-jigsaw completed' ></div>
                        </>}
                  </OverlayContainer>
                  }
            </>
            :""}
            </>
       );
}
 
export default AnimationCheck;