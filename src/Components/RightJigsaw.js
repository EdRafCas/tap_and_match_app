import React,{useState, useEffect} from 'react';
import '../App.scss'

const RightJigsaw = ({item, leftColumn, rightColumn, changeRightColumn,existingShuffledList2, changeExistingShuffledList2}) => {
      const [turnGreen, changeTurnGreen] = useState(false)

      useEffect(()=>{
            if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined){
                  console.log("cheking if reachs left side")
                  /* changeTurnGreen(true)
                  const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn ? {...listed, completed:true}: listed)
                  changeExistingShuffledList(updateexistingShuffledList)
                  console.log(leftColumn.completed) */
            }else{
                  console.log("they dont match")
            }
      },[leftColumn,rightColumn, item])

      /*
      const classesLeft = turnGreen ?
      'item-container green'
      :'item-container'; 
      */

      const rightBlock = rightColumn.id === item.id ?
      'item-container green'
      :'item-container';

      return (    
      <div className={rightBlock} key={item.index} onClick={(e)=>changeRightColumn(item)}>
            <div className='right-jigsaw'></div>
            <span>{item.id}, {item.spanish}</span>
            {(leftColumn.id === rightColumn.id && leftColumn.id === item.id && leftColumn.id !== undefined)?
            <div>
                  <span>match</span>
            </div>:
            ""}
      </div>
       );
}
 
export default RightJigsaw;