import React from 'react';
import './App.css';
import './App.scss';


const App = () => {
  return ( 
    <div className='container' >
      <div className='inner-container first-column'>
        <div className='item-container'>
          <div className='left-jigsaw'></div>
          <span>1</span>
          </div>
        <div className='item-container'><span>1</span></div>
        <div className='item-container'><span>1</span></div>
        <div className='item-container'><span>1</span></div>
      </div>
      <div className='inner-container second-column'>
        <div className='item-container'>
        <div className='right-jigsaw'></div>
          <span>1</span>
          </div>
        <div className='item-container'><span>1</span></div>
        <div className='item-container'><span>1</span></div>
        <div className='item-container'><span>1</span></div>
      </div>
    </div>
   );
}
 
export default App;