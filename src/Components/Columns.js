import React,{useState, useEffect, useContext} from 'react';
import '../App.scss'
import { CounterContext } from '../Context/CounterContext';
import {ReactComponent as IconLikeColor} from '../img/like_icon.svg'
import {ReactComponent as IconLike} from '../img/like_icon_color.svg'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import styled from 'styled-components';
import Heart from './../img/Heart_icon.png'
import Flag from './../img/flag_icon.png'
import GameOver from './../img/game_over.png'

const IconContainer=styled.div`
      display:flex;
      flex-direction:row;
      justify-content:flex-end;
      gap:0.5em;
      height:1rem;
      padding-right:0rem;
      padding-left:0rem;
      z-index:1;
`
const Icons=styled.div`
      /* border:1px solid white; */
      svg{
            height:100%;
            max-height:3rem;
            width:auto;
            min-width:1rem;
            @media(max-width: 375px){ 
                  max-height:1rem;}
      }
`


const Columns = ({WordList,reset, countReset}) => {
      const {counterBar} =useContext(CounterContext);
      const {changeCounterBar} =useContext(CounterContext);
      const {counterSkips} =useContext(CounterContext);
      const {changeCounterSkips} =useContext(CounterContext);
      const {changeRightColumn} =useContext(CounterContext);
      const {changeLeftColumn} =useContext(CounterContext);
      const {rightColumn} =useContext(CounterContext);
      const {leftColumn} =useContext(CounterContext);


      const [existingShuffledList, changeExistingShuffledList] = useState([{}])
      const [existingShuffledList2, changeExistingShuffledList2] = useState([{}])

      const [loader, changeLoader] = useState(true)
      
      let countCompleted = existingShuffledList.filter(x => x.completed === true).length;


      useEffect(()=>{
            const setShuffle = async() =>{
                  console.log("check")
                 
                  if(counterBar <= 0){
                        const slicedArray = WordList.slice(counterBar, counterBar+5);
                        const newList1 = [].concat([...slicedArray])
                        changeExistingShuffledList(newList1.sort((a, b)=> 0.5 - Math.random()))
                        
                        const newList2 = [].concat([...slicedArray])
                        changeExistingShuffledList2(newList2.sort((a, b)=> 0.5 - Math.random()))
                        console.log(rightColumn)
                  } else{
                        const slicedArray = WordList.slice(counterBar*5, (counterBar*5)+5);
                        const newList1 = [].concat([...slicedArray])
                        changeExistingShuffledList(newList1.sort((a, b)=> 0.5 - Math.random()))
                        
                        const newList2 = [].concat([...slicedArray])
                        changeExistingShuffledList2(newList2.sort((a, b)=> 0.5 - Math.random()))
                        console.log(rightColumn)
                        
                  }
                  changeLeftColumn("")
                  changeRightColumn("")
            
            }
            changeLoader(false)

            setShuffle();

      
      },[reset, countReset, changeLeftColumn, changeRightColumn])


      

      return (  
      <>
            {!loader? 
            <>
            <div className='container' >
                  <div className='progressBar' >
                        <div className='smallDivsContainer'>
                              {Array.from({length:counterBar},(_,index)=>{
                                    return(
                                          <div key={index}></div>
                                    )
                              })}
                        </div>
                        <div className='trackContainer'>
                              <div className='trackInner flag'>
                                    <IconContainer>
                                          <Icons><img  src={Flag} alt ={'Flag icon'}/></Icons>
                                    </IconContainer>
                                    <span>{counterBar+"/10"}</span>
                              </div>
                              <div className='trackInner'>
                                    <>
                                    {counterSkips>0?
                                    <>
                                    {Array.from({length:counterSkips},(_,index)=>{
                                          return(
                                                <IconContainer key={index}>
                                                      <Icons><img  src={Heart} alt ={'Hearts left'}/></Icons>
                                                </IconContainer>
                                          )
                                    })}
                                    </>
                                    :<span className='noLives'>Good Luck</span>

                                    }
                                    </>
                              </div>
                        </div>
                        
                  </div>
                  <div className='column-container'>
                        {counterBar <10?
                        <>
                        <LeftColumn 
                              existingShuffledList={existingShuffledList}
                              leftColumn={leftColumn}
                              rightColumn={rightColumn}
                              changeLeftColumn={changeLeftColumn}
                              changeExistingShuffledList={changeExistingShuffledList}/>
                        <RightColumn
                              existingShuffledList2={existingShuffledList2}
                              leftColumn={leftColumn}
                              rightColumn={rightColumn}
                              changeRightColumn={changeRightColumn}
                              changeExistingShuffledList2={changeExistingShuffledList2}/>
                        </>
                        :
                        <div className='inner-container'>
                              <img  src={GameOver} alt ={'Game over'}/>
                              <div className='button-container'>

                              <button onClick={()=>{changeCounterBar(0);countReset(reset+1)}}>Play Again</button>
                              </div>
                        </div>
                        }
                  </div>
                  <div className='progressCounter' >
                        <span>{countCompleted +"  "}</span>
                        {countCompleted>0? 
                        <IconLike/>
                        :<IconLikeColor/>}                    
                  </div> 
                  <div className='button-container'>
                        {counterSkips === 0 || counterBar > 8?
                        <button disabled={true}>Skip This one</button>
                        : 
                        <button  onClick={()=>{changeCounterBar(counterBar+1);countReset(reset+1);changeCounterSkips(counterSkips-1)}}>Skip This one</button>
                        
                        }
                        {countCompleted !==5  || counterBar >= 10 ?
                        <button disabled={true} >Continue</button>
                        :
                        <button onClick={()=>{changeCounterBar(counterBar+1);countReset(reset+1)}}>Continue</button>
                        }
                  </div> 
            </div>
            </>
            :
            ""}
      </>
       );
}
 
export default Columns;