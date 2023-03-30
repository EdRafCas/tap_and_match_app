import React,{useState, useEffect} from 'react';
import LeftJigSaw from './LeftJigSaw';
import RightJigsaw from './RightJigsaw';
import '../App.scss'

const Columns = ({ShuffledList, ShuffledList2}) => {
      const [leftColumn, changeLeftColumn] = useState("none")
      const [rightColumn, changeRightColumn] = useState("none")
      const [existingShuffledList, changeExistingShuffledList] = useState(ShuffledList)

      useEffect(()=>{
          console.log("columna izquierda=> "+leftColumn.id)
          console.log("columna derecha=> "+rightColumn.id)
          if(leftColumn.id === rightColumn.id){
            console.log("they match")
      }
          
      
      },[leftColumn,rightColumn])


      

      return (   
            <>
            <div className='inner-container first-column'>
                  {existingShuffledList.map((item, index)=>{
                        return(
                              <LeftJigSaw item={item}
                                          ShuffledList={ShuffledList}
                                          leftColumn={leftColumn}
                                          rightColumn={rightColumn}
                                          changeLeftColumn={changeLeftColumn}
                                          existingShuffledList={existingShuffledList}
                                          changeExistingShuffledList={changeExistingShuffledList}/>
                  )})}
            </div>
            <div className='inner-container second-column'>
                  {ShuffledList2.map((item, index)=>{
                        return(
                        <RightJigsaw item={item}
                        leftColumn={leftColumn}
                        rightColumn={rightColumn}
                        changeRightColumn={changeRightColumn}/>

                  )})}
            </div>
            </> 
       );
}
 
export default Columns;