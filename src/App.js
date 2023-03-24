import React from 'react';
import './App.css';
import './App.scss';


const App = () => {
  return ( 
    <div className='container' >
      <div className='column number-1'>
        <div>
          <span>1</span>
        </div>
        
        <div>
          <span>2</span>
        </div>
      </div>
      <div className='column number-2'>
      <div>
          <span>3</span>
        </div>
        <div>
          <span>4</span>
        </div>
      </div>
    </div>
   );
}
 
export default App;