import React,{useState, useEffect, useContext} from 'react';
import LeftJigSaw from './LeftJigSaw';
import RightJigsaw from './RightJigsaw';
import AnimationCheck from './AnimationCheck';
import '../App.scss'
import { CounterContext } from '../Context/CounterContext';
import {ReactComponent as IconLikeColor} from '../img/like_icon.svg'
import {ReactComponent as IconLike} from '../img/like_icon_color.svg'

const LeftColumn = ({existingShuffledList,ShuffledList,leftColumn,rightColumn,changeLeftColumn,changeExistingShuffledList}) => {
      /* const {counterBar} =useContext(CounterContext);
      const {changeCounterBar} =useContext(CounterContext);
      const [loader, changeLoader] = useState(true)
      
      let countCompleted = existingShuffledList.filter(x => x.completed === true).length; */


      useEffect(()=>{
          /*  const setShuffle = async() =>{
                  console.log("check")
                  changeExistingShuffledList(existingShuffledList.sort((a, b)=> 0.5 - Math.random()))
                  changeExistingShuffledList2(existingShuffledList2.sort((a, b)=> 0.5 - Math.random()))

            changeLoader(false)
            }

            setShuffle(); */

      if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined &&      rightColumn.id !== undefined){

            const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn.id ? {...listed, completed:true}: listed)

            changeExistingShuffledList(updateexistingShuffledList)

            }
      
      },[leftColumn, rightColumn])


      

      return (  
            <>
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
                                          existingShuffledList={existingShuffledList}/>
                  )})}
                  </>
            </div>
            </>
      );
}
 
export default LeftColumn;