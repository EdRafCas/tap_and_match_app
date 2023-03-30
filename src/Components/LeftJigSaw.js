import React,{useState, useEffect} from 'react';
import '../App.scss'


const LeftJigSaw = ({item, leftColumn, rightColumn, changeLeftColumn,existingShuffledList, changeExistingShuffledList}) => {
      const [turnGreen, changeTurnGreen] = useState(false)
      const [mutableitem, changeMutableItem] =useState(item)

      /* const matching = mutableitem.completed? (
            <div>
                  <span>match</span>
            </div>
      )
      : (""); */

      
      useEffect(()=>{
            if(leftColumn === rightColumn){
                  console.log("cheking if reachs")
                  const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn ? {...listed, completed:true}: listed)
                  changeExistingShuffledList(updateexistingShuffledList)
                  console.log(leftColumn.completed)
            }else{
                  console.log("they dont match")
            }
          
      
      },[leftColumn,rightColumn, changeLeftColumn, item, changeMutableItem])

      const handleChange = ()=>{
            changeLeftColumn(item);
            console.log(leftColumn.completed);
      }


      const leftBlock = leftColumn.id === item.id ?
      'item-container green'
      :'item-container';

      return (    
      <div className={leftBlock} key={item.index} onClick={()=>changeLeftColumn(item)}>
            <div className='left-jigsaw'></div>
            <span>{item.id}, {item.english}</span>
            {/* {matching} */}
      </div>
       );
}
 
export default LeftJigSaw;