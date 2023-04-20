import React,{useState, useEffect, useContext} from 'react';
import LeftJigSaw from './LeftJigSaw';
import RightJigsaw from './RightJigsaw';
import AnimationCheck from './AnimationCheck';
import '../App.scss'
import { CounterContext } from '../Context/CounterContext';
import {ReactComponent as IconLikeColor} from '../img/like_icon.svg'
import {ReactComponent as IconLike} from '../img/like_icon_color.svg'

const RightColumn = ({existingShuffledList2,ShuffledList2,leftColumn,rightColumn,changeRightColumn,changeExistingShuffledList2}) => {
      /* const {counterBar} =useContext(CounterContext);
      const {changeCounterBar} =useContext(CounterContext);
      const [loader, changeLoader] = useState(true)
      
      let countCompleted = existingShuffledList2.filter(x => x.completed === true).length; */


      useEffect(()=>{
            /* const setShuffle = async() =>{
                  console.log("check")
                  changeExistingShuffledList(existingShuffledList.sort((a, b)=> 0.5 - Math.random()))
                  changeExistingShuffledList2(existingShuffledList2.sort((a, b)=> 0.5 - Math.random()))

            changeLoader(false)
            }

            setShuffle(); */
            
            if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined){

            const updateexistingShuffledList2 = existingShuffledList2.map((listed)=>listed.id === rightColumn.id ? {...listed, completed:true}: listed)

            changeExistingShuffledList2(updateexistingShuffledList2)

            }
      
      },[rightColumn, leftColumn])


      

      return (  
            <>
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
            </>
      );
}
 
export default RightColumn;