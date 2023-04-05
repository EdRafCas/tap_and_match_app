import React,{useState, useEffect} from 'react';
import '../App.scss'
import AnimationCheck from '../Components/AnimationCheck';

const RightJigsaw = ({item, leftColumn, rightColumn, changeRightColumn,existingShuffledList2, changeExistingShuffledList2}) => {

      useEffect(()=>{
            if(leftColumn.id === rightColumn.id && rightColumn.id !== undefined){
                  console.log("cheking if reachs left side")

            }else{
                  console.log("they dont match")
            }

      },[leftColumn,rightColumn, item, existingShuffledList2, changeExistingShuffledList2])

      const handleChange = ()=>{
            changeRightColumn(item);
      }

      const rightBlock = rightColumn.id === item.id ?
      'item-container green'
      :'item-container';

      return (    
      <div className={rightBlock} key={item.index} onClick={handleChange}>
            <div className='right-jigsaw'></div>
            <span>{item.id}, {item.spanish}</span>
            {/* {(leftColumn.id === rightColumn.id && leftColumn.id === item.id && leftColumn.id !== undefined)?
            <div>
                  <span>match</span>
            </div>:
            ""} */}
            {item.completed?
            <AnimationCheck item={item}/>:
            ""}
      </div>
       );
}
 
export default RightJigsaw;