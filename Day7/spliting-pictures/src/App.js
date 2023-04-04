import React, {useState} from 'react';
import './App.css';

function App() {
  const [boxWidth1 , setBoxWidth1] = useState("");
  const [boxWidth2 , setBoxWidth2] = useState("");

  return (
    <div className="app">
      <div className="container">
        <div className="split left"
        onMouseEnter={() => setBoxWidth1("80%")}
        onMouseLeave={() => setBoxWidth1("")}
        style={{width: boxWidth1, zIndex: boxWidth1 ? 1 : 0,
        transition : '1s ease-in'
        }}
       
        >
            <h1> Playstation 5 </h1>
            <a href='#' className="btn">Buy Now</a>
        </div>
        <div className="split right"
         onMouseEnter={() => setBoxWidth2("80%")}
         onMouseLeave={() => setBoxWidth2("")}
         style={{width: boxWidth2,
          transition : '1s ease-in'
        }}
        
        >
            <h1> XBOX Series </h1>
            <a href='#' className="btn">Buy Now</a>
        </div>
    </div>
    </div>
  );
}

export default App;
