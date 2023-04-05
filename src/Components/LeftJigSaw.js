import React,{useState, useEffect} from 'react';
import '../App.scss'
import '../Components/AnimationCheck'
import AnimationCheck from '../Components/AnimationCheck';


const LeftJigSaw = ({item, leftColumn, rightColumn, changeLeftColumn,existingShuffledList, changeExistingShuffledList}) => {

      useEffect(()=>{
            if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined){
                  console.log("this is meant to trigger something in both sides")

            }else{
                  console.log("they dont match")
            }
          
      },[leftColumn,rightColumn, changeLeftColumn, item, changeExistingShuffledList, existingShuffledList])

      const handleChange = ()=>{
            changeLeftColumn(item);
      }


      const leftBlock = leftColumn.id === item.id ?
      'item-container green'
      :'item-container';



      return (    
      <div className={leftBlock} key={item.index} onClick={handleChange}>
            <div className='left-jigsaw'></div>
            <span>{item.id}, {item.english}</span>
            {/* {(leftColumn.id === rightColumn.id && leftColumn.id === item.id && leftColumn.id !== undefined)?
            <div>
                  <span>{item.completed}</span>
            </div>:
            ""} */}
            {item.completed?
            <AnimationCheck item={item}/>:
            ""}
            
      </div>
       );
}
 
export default LeftJigSaw;