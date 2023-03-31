import React,{useState, useEffect} from 'react';
import '../App.scss'


const LeftJigSaw = ({item, leftColumn, rightColumn, changeLeftColumn,existingShuffledList, changeExistingShuffledList}) => {
      const [turnGreen, changeTurnGreen] = useState(false)
      const [mutableitem, changeMutableItem] =useState(item)


      
      useEffect(()=>{
            if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined){
                  console.log("this is meant to trigger something in both sides")

                  

                  /* const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn ? {...listed, completed:true}: listed)
                  changeExistingShuffledList(updateexistingShuffledList)
                  console.log(leftColumn.completed) */
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
            "match":
            ""}
      </div>
       );
}
 
export default LeftJigSaw;