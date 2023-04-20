import React,{useState, useEffect} from 'react';
import '../App.scss'
import '../Components/AnimationCheck'
import AnimationCheck from '../Components/AnimationCheck';
import AnimationWrong from './AnimationWrong';



const LeftJigSaw = ({item, leftColumn, rightColumn, changeLeftColumn,existingShuffledList, changeExistingShuffledList}) => {
      const [play, changePlay] = useState(false)
      const [playWrong, changePlayWrong] = useState(false)

      useEffect(()=>{
            if(leftColumn.id === item.id && leftColumn.id === item.id && leftColumn.id === rightColumn.id && leftColumn.id !== undefined){
                  console.log("they match")
                  changePlay(true)
                  changeLeftColumn("")
            } if(leftColumn.id === item.id && leftColumn.id !== rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined){
                  changePlayWrong(true)
                  console.log("picked but dont match")
                  changeLeftColumn("")

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
            {item.completed?
            <AnimationCheck item={item}/>
            :
            ""}
            {playWrong?
            <AnimationWrong item={item} leftColumn={leftColumn} />
            :
            ""}
            
      </div>
       );
}
 
export default LeftJigSaw;