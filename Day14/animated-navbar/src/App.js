import React, {useState} from 'react';
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false);

  function openToggle(){
    setToggle(!toggle);
    console.log('setToggle')
  }
  return (
    <div className="app">
      <nav className='active' id="nav"
      style={{
        transform: toggle? "rotateY('360deg')": "rotateY('0deg')",
        width: toggle? '350px': '10px',
        // opacity:toggle?  '1' : '0',
        // transform: toggle? "rotateY('360deg')": ''
      }}
      
      >
        <ul
        style={{
          opacity:toggle?  '1' : '0',
          transform: toggle? "rotateY('360deg')": ''
        }}  
        >
            <li> <a href="#"> Home </a> </li>
            <li> <a href="#"> Works </a> </li>
            <li> <a href="#"> About </a> </li>
            <li> <a href="#"> Conatct </a> </li>
        </ul>
        <button className="icon" id="toggle"
        onClick={openToggle}
        >
            <div className="line line1"
            style={{
              transform: toggle?  'rotate(720deg) translateY(-5.5px)' : ''
            }}
            ></div>
            <div className="line line2"
            style={{
              transform: toggle?  'rotate(720deg) translateY(-5.5px)' : ''
            }}
            ></div>
        </button>
    </nav>
    </div>
  );
}

export default App;
