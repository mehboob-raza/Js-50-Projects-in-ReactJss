import React, { useState } from 'react'
import './App.css'

const cups = [1, 2, 3, 4, 5, 6, 7, 8]

const WaterGlasses = () => {
    const [water, setWater] = useState(0)
    const [selected, setSelected] = useState(0)
    
    function handleGlasses(idx){
        setWater(12.5*idx)
        setSelected(idx)
    }

  return (
    <div className='app'>
        WaterGlasses
        <div className='cup'>
            <div 
            style={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: '#6ab3f8',
                height: ` ${water}% `,
                transition: '0.3s linear'
            }}
            >
                {water}%
            </div>
        </div>
    <p className="text">Select how many glasses of water that you have drink  </p>

    <div className='cups'>
        {
            cups.map((cup, index) =>{
                return(
                    <div className='cup small-cup' 
                    key={index}
                    onClick={() => handleGlasses(cup)}
                    style={{
                        backgroundColor: selected <= index ? '' : '#6ab3f8' 
                    }}
                    >
                        250ml {cup}
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default WaterGlasses