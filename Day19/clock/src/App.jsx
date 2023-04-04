import AnalogClock from 'analog-clock-react';
import { useRef, useState } from 'react';
import './App.css'

export default function App() {
  const [mode, setMode] =useState(false)
  let initialText = 'Dark Mode'
  const [text, setText] = useState(initialText)
  
  function setButton(){
    setText(!text)
    setMode(!mode)
  }
  // let changeText = useRef()

  // let className = 'light'
  // if(mode){
  //   changeText.current.innerText = 'Dark Mode'
    
  //   // setMode(!mode)
  // }
let options = {
	width: "300px",
	border: true,
	borderColor: "#2e2e2e",
	baseColor: "#17a2b8",
	centerColor: "#459cff",
	centerBorderColor: "#ffffff",
	handColors: {
	second: "#d81c7a",
	minute: "#ffffff",
	hour: "#ffffff"
	}
};

return (
	<div>
    <div className='app'
    style={{
      background: !mode? 'black' : 'white' 
    }}
    >
    <button 

    style={{
      background: !mode? 'white' : 'black',
      color: !mode? 'black' : 'white',
    }}
    
     onClick={setButton} >
      {text ? "Light Mode" : "Dark Mode"}
      </button>
    <h2 
    style={{
      color: !mode? 'white' : 'black'
    }}
    >React Clock </h2>
    <AnalogClock {...options} />
    </div>
  </div>
)
}

