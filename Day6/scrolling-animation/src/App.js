import React, {useEffect, useState} from 'react';
import './App.css'

// const triggerBottom = window.innerHeight/ 3 * 5;
// console.log(triggerBottom, 'triggerBottom')
const App = () => {
  // let [scrollTop, setScrollTop] = useState();

  let boxes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  // useEffect(() => {
  //   const handleScroll = event => {
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  // console.log('scroll', scrollTop)
  return (
    <div className='app'>
      <div
        style={{
          position: 'fixed',
          padding: '10px 0',
          top: '0',
          backgroundColor: 'white',
          borderBottom: '3px solid black',
          width: '100%',
        }}
      >
        {/* <h2>Scroll Top: {triggerBottom}</h2> */}
      </div>

      <div style={{marginTop: '10rem'}}>
        {boxes.map((box, index) => {
          return (
          <div className='box' key={index}
          style={{
            position: 'relative',
            transform: box  ? 'translateX(0%)': 'translateX(200%)'
          }}
          ><h2> Content {index}</h2></div>
        )
        })}
      </div>
    </div>
  );
};

export default App;
