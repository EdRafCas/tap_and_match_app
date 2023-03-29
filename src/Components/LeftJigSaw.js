import React,{useState} from 'react';
import '../App.scss'

const LeftJigSaw = ({item, leftColumn, changeLeftColumn}) => {
      const [turnGreen, changeTurnGreen] = useState(false)

/*       const classesLeft = turnGreen ?
      'item-container green'
      :'item-container'; */

      const leftBlock = leftColumn === item.id ?
      'item-container green'
      :'item-container';

      return (    
      <div className={leftBlock} key={item.index} onClick={(e)=>{
      e.preventDefault();
      e.stopPropagation();
      changeTurnGreen(!turnGreen);
      changeLeftColumn(item.id)}}>
            <div className='left-jigsaw'></div>
            <span>{item.id}, {item.english}</span>
      </div>
       );
}
 
export default LeftJigSaw;