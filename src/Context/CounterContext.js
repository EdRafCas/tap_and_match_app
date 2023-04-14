import React,{useState} from 'react';

const CounterContext= React.createContext();

const CounterContextProvider = ({children}) => {
      const [counterBar, changeCounterBar] = useState(0)
      const [counterCompleted, changeCounterCompleted] = useState(0)
      const [reload, changeReload] = useState (0)
      const [leftColumn, changeLeftColumn] = useState("left")
      const [rightColumn, changeRightColumn] = useState("right")


      return ( 
            <CounterContext.Provider value={{
                                    house:"house",
                                    counterBar:counterBar,
                                    changeCounterBar:changeCounterBar,
                                    counterCompleted:counterCompleted,
                                    changeCounterCompleted:changeCounterCompleted,
                                    reload:reload,
                                    changeReload:changeReload,
                                    leftColumn:leftColumn,
                                    changeLeftColumn:changeLeftColumn,
                                    rightColumn: rightColumn,
                                    changeRightColumn:changeRightColumn
                                    }}>
                  {children}
            </CounterContext.Provider>
       );
}
 
export {CounterContextProvider, CounterContext};