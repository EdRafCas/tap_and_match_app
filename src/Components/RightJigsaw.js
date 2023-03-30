import React,{useState, useEffect} from 'react';
import '../App.scss'

const RightJigsaw = ({item, leftColumn, rightColumn, changeRightColumn}) => {
      const [turnGreen, changeTurnGreen] = useState(false)

      useEffect(()=>{
          
      
      },[leftColumn,rightColumn])

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
      </div>
       );
}
 
export default RightJigsaw;