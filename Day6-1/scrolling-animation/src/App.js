import React, {useEffect, useState} from 'react';
import './App.css'

// const triggerBottom = window.innerHeight/ 12;
// console.log(triggerBottom, 'triggerBottom')
const App = () => {
  let [scrollTop, setScrollTop] = useState();

  window.addEventListener('scroll', checkBoxes);

  function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 5;
    
  }


  return(
    <div className='app'>
      <h1>Scroll to See Animations</h1>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    <div class="box"> <h2>Content</h2> </div>
    </div>
  );
};

export default App;
