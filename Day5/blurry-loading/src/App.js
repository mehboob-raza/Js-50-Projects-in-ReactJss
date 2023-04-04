import React, {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let int = setInterval(bluring, 100)
  function bluring(){
    // count++
    if(count >= 99){
      // console.log('bluring')
      setCount(0)
      clearInterval(int)
      return
    }
    count += 1
    setCount(count)
  }
  // bluring()

  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
  return (
    <div className="app">
      <section className="bg" 
      style={{
        filter: `blur(${scale(count, 0, 100, 30 , 0)}px)`
      }}
      ></section>
      <div className="loading-text" 
      style={{
        opacity: `scale(count, 0, 100, 1, 0)` ,
      }}
      >{count}%</div>
    </div>
  );
}

export default App;
