import React,{useState, useEffect} from 'react';
import LeftJigSaw from './LeftJigSaw';
import RightJigsaw from './RightJigsaw';
import AnimationCheck from './AnimationCheck';
import '../App.scss'

const Columns = ({ShuffledList, ShuffledList2}) => {
      const [leftColumn, changeLeftColumn] = useState("left")
      const [rightColumn, changeRightColumn] = useState("right")
      const [existingShuffledList, changeExistingShuffledList] = useState(ShuffledList)
      const [existingShuffledList2, changeExistingShuffledList2] = useState(ShuffledList2)
      const [animationFunction, changeAnimationFunction] = useState(false)


      useEffect(()=>{
          console.log("columna izquierda=> "+leftColumn.id)
          console.log("columna derecha=> "+rightColumn.id)
          if(leftColumn.id === rightColumn.id && leftColumn.id !== undefined && rightColumn.id !== undefined){
            console.log("they match")
            changeAnimationFunction(true)
            const updateexistingShuffledList = existingShuffledList.map((listed)=>listed.id === leftColumn.id ? {...listed, completed:true}: listed)
            const updateexistingShuffledList2 = existingShuffledList2.map((listed)=>listed.id === rightColumn.id ? {...listed, completed:true}: listed)
            console.log("columna izquierda=> "+leftColumn.completed)
            console.log("starting updating left shuffle")
            changeExistingShuffledList(updateexistingShuffledList)
            changeExistingShuffledList2(updateexistingShuffledList2)
            console.log("finished updating left shuffle")
            console.log("columna izquierda=> "+leftColumn.completed)
      }
          
      
      },[leftColumn,rightColumn,])


      

      return (   
            <>
            <div className='inner-container first-column'>
                  <>
                  {existingShuffledList.map((item, index)=>{
                        return(
                              <LeftJigSaw key={item.index}
                                          item={item}
                                          ShuffledList={ShuffledList}
                                          leftColumn={leftColumn}
                                          rightColumn={rightColumn}
                                          changeLeftColumn={changeLeftColumn}
                                          existingShuffledList={existingShuffledList}
                                          changeExistingShuffledList={changeExistingShuffledList}/>
                  )})}
                   {/* <div  >
                                    
                              {animationFunction?
                              <AnimationCheck/>
                              :""}
                  </div> */}
                  </>
            </div>
            <div className='inner-container second-column'>
                  <>
                  {ShuffledList2.map((item, index)=>{
                        return(
                              <RightJigsaw key={item.index}
                                          item={item}
                                          ShuffledList2={ShuffledList2}
                                          leftColumn={leftColumn}
                                          rightColumn={rightColumn}
                                          changeRightColumn={changeRightColumn}
                                          existingShuffledList2={existingShuffledList2}
                                          changeExistingShuffledList2={changeExistingShuffledList2}/>

                  )})}
                  {/* <div  >
                              {animationFunction?
                              <AnimationCheck/>
                              :""}
                  </div> */}
                  </>
            </div>
            </> 
       );
}
 
export default Columns;