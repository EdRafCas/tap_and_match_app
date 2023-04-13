import React,{useState} from 'react';

const CounterContext= React.createContext();

const CounterContextProvider = ({children}) => {
      const [counterBar, changeCounterBar] = useState(0)
      const [counterCompleted, changeCounterCompleted] = useState(0)
      const [reload, changeReload] = useState (0)


      return ( 
            <CounterContext.Provider value={{
                                    house:"house",
                                    counterBar:counterBar,
                                    changeCounterBar:changeCounterBar,
                                    counterCompleted:counterCompleted,
                                    changeCounterCompleted:changeCounterCompleted,
                                    reload:reload,
                                    changeReload:changeReload
                                    }}>
                  {children}
            </CounterContext.Provider>
       );
}
 
export {CounterContextProvider, CounterContext};