import React, {useState} from 'react'
import './App.css';
import WaterGlasses from './WaterGlasses';

const small_cups = [1,2,3,4,5,6,7,8]


function App() {
  const [water, setWater] = useState(0)
  const [selectedGlass, setSelectedGlass] = useState(0)
  
  function heghlightCups(index){
    setWater(index*12.5)
    setSelectedGlass(index)
  }
  return (
    <div className="app">
      <WaterGlasses />
      {/* <div className="cup">
        <div
        style={{backgroundColor:"red" , height: `${water}%`,
        textAlign: 'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }} 
        // className="remained" id="remained"
        >
            <span id="liters">  </span>
            <small>{water}</small>
        </div>
        <div className="percentage" id="percentage"></div>
      </div>
    <p className="text">Select how many glasses of water that you have drink  </p>

    <div className='cups'>
      {
        small_cups.map((cup, index) =>{
          return (
              <div 
                className="cup small-cup"  
                key={index}
                onClick={() => heghlightCups(cup)}
                // setWater((index) =>!index)
                style={{
                  backgroundColor: selectedGlass <= index ?'#6ab3f8':"yellow"
                  
                }}
              >250 ml {cup}</div>
              )
            })
          }
          </div> */}
    </div>
  );
}

export default App;
