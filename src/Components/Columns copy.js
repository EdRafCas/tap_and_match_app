import React,{useState, useEffect, useContext} from 'react';
import LeftJigSaw from './LeftJigSaw';
import RightJigsaw from './RightJigsaw';
import AnimationCheck from './AnimationCheck';
import '../App.scss'
import { CounterContext } from '../Context/CounterContext';
import {ReactComponent as IconLikeColor} from '../img/like_icon.svg'
import {ReactComponent as IconLike} from '../img/like_icon_color.svg'

const Columns = ({ShuffledList, ShuffledList2, reset, countReset}) => {
      const {counterBar} =useContext(CounterContext);
      const {changeCounterBar} =useContext(CounterContext);
      const [leftColumn, changeLeftColumn] = useState("left")
      const [rightColumn, changeRightColumn] = useState("right")
      const [existingShuffledList, changeExistingShuffledList] = useState(ShuffledList)
      const [existingShuffledList2, changeExistingShuffledList2] = useState(ShuffledList2)
      const [animationFunction, changeAnimationFunction] = useState(false)
      

      let countCompleted = existingShuffledList.filter(x => x.completed === true).length;


      useEffect(()=>{
           
            /* 
            console.log("columna izquierda=> "+leftColumn.id)
            console.log("columna derecha=> "+rightColumn.id) */
            if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined){

            /* console.log("they match") */

            const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn.id ? {...listed, completed:true}: listed)

            const updateexistingShuffledList2 = existingShuffledList2.map((listed)=>listed.id === rightColumn.id ? {...listed, completed:true}: listed)
            /* 
            console.log("columna izquierda=> "+leftColumn.completed)
            console.log("starting updating left shuffle") 
            */
            changeExistingShuffledList(updateexistingShuffledList)
            changeExistingShuffledList2(updateexistingShuffledList2)
            /* 
            console.log("finished updating left shuffle")
            console.log("columna izquierda=> "+leftColumn.completed) 
            */

      }
          
      
      },[leftColumn,rightColumn,ShuffledList, reset, countReset])


      

      return (   
            <div className='container' >
                  <div className='progressBar' >
                        <div className='smallDivsContainer'>
                              {Array.from({length:counterBar},(_,index)=>{
                                    return(
                                          <div key={index}></div>
                                    )
                              })}
                        </div>
                        <div className='trackContainer'>{counterBar+"/20"}</div>
                  </div>
                  <div className='column-container'>
                        <div className='inner-container first-column'>
                              <>
                              {existingShuffledList.map((item, index)=>{
                                    return(
                                          <LeftJigSaw key={item.index}
                                                      item={item}
                                                      ShuffledList={ShuffledList}
                                                      leftColumn={leftColumn}
                                                      rightColumn={rightColumn}
                                                      changeLeftColumn={changeLeftColumn}
                                                      existingShuffledList={existingShuffledList}
                                                      changeExistingShuffledList={changeExistingShuffledList}/>
                              )})}
                              </>
                        </div>
                        <div className='inner-container second-column'>
                              <>
                              {existingShuffledList2.map((item, index)=>{
                                    return(
                                          <RightJigsaw key={item.index}
                                                      item={item}
                                                      ShuffledList2={ShuffledList2}
                                                      leftColumn={leftColumn}
                                                      rightColumn={rightColumn}
                                                      changeRightColumn={changeRightColumn}
                                                      existingShuffledList2={existingShuffledList2}
                                                      changeExistingShuffledList2={changeExistingShuffledList2}
                                                      />

                              )})}
                              </>
                        </div>
                  </div>
                  <div className='progressCounter' >
                        <span>{countCompleted +"  "}</span>
                        {countCompleted>0? 
                        <IconLike/>
                        :<IconLikeColor/>}                    
                  </div> 
                  <div className='button-container'>
                        {countCompleted !==5  || counterBar >= 20 ?
                        <button disabled={true} >Continue</button>
                        :
                        <button onClick={()=>changeCounterBar(counterBar+1)}>Continue</button>
                        }
                  </div> 
                  <div className='button-container'>
                  <button onClick={()=>countReset(reset+1)}>reset</button>

                  </div>
            </div>
       );
}
 
export default Columns;