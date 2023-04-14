import React,{useState, useEffect, useContext} from 'react';
import LeftJigSaw from './LeftJigSaw';
import RightJigsaw from './RightJigsaw';
import AnimationCheck from './AnimationCheck';
import '../App.scss'
import { CounterContext } from '../Context/CounterContext';
import {ReactComponent as IconLikeColor} from '../img/like_icon.svg'
import {ReactComponent as IconLike} from '../img/like_icon_color.svg'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const Columns = ({WordList, ShuffledList, ShuffledList2,changeShuffledList, changeShuffledList2, reset, countReset}) => {
      const {counterBar} =useContext(CounterContext);
      const {changeCounterBar} =useContext(CounterContext);
      const {leftColumn} =useContext(CounterContext);
      const {rightColumn} =useContext(CounterContext);
      const {changeLeftColumn} =useContext(CounterContext);
      const {changeRightColumn} =useContext(CounterContext);
      const [existingShuffledList, changeExistingShuffledList] = useState([...WordList])
      const [existingShuffledList2, changeExistingShuffledList2] = useState([...WordList])
      const [loader, changeLoader] = useState(true)
      
      let countCompleted = existingShuffledList.filter(x => x.completed === true).length;


      useEffect(()=>{
            const setShuffle = async() =>{
                  console.log("check")
                  const newList1 = [].concat(existingShuffledList)
                  changeExistingShuffledList(newList1.sort((a, b)=> 0.5 - Math.random()))
                  changeExistingShuffledList2(existingShuffledList2.sort((a, b)=> 0.5 - Math.random()))
                  console.log(existingShuffledList)
            
            }
            changeLoader(false)

            setShuffle();

       if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined &&      rightColumn.id !== undefined){
            console.log("match")

            /* const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn.id ? {...listed, completed:true}: listed)

            const updateexistingShuffledList2 = existingShuffledList2.map((listed)=>listed.id === rightColumn.id ? {...listed, completed:true}: listed)

            changeExistingShuffledList(updateexistingShuffledList)
            changeExistingShuffledList2(updateexistingShuffledList2) */
      } else{
            console.log("dont match")
      }
      
      },[reset, countReset])


      

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
                        <div className='trackContainer'>{counterBar+"/20"}</div>
                  </div>
                  <div className='column-container'>
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
            </>
            :
            ""}
      </>
       );
}
 
export default Columns;