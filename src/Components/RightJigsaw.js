import React,{useState, useEffect} from 'react';
import '../App.scss'
import '../Components/AnimationCheck'
import AnimationCheck from '../Components/AnimationCheck';

const RightJigsaw = ({item, leftColumn, rightColumn, changeRightColumn,existingShuffledList2, changeExistingShuffledList2}) => {

      useEffect(()=>{
            if(leftColumn.id === rightColumn.id && rightColumn.id !== undefined){
                  console.log("this is meant to trigger something in right side")
            }else{
                  /* console.log("they dont match") */
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
            {item.completed?
            <AnimationCheck item={item} rightside/>:
            ""}
      </div>
       );
}
 
export default RightJigsaw;