import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [circle, setCircle] = useState({
    objects : [{number : 1}, {number: 2}, {number: 3}, { number: 4}]
  });
  

  function nextBtn(number){
    if(circle.objects[number] === null){
      return ' circle active'
    }
    console.log('next');
  }

  function prevBtn(){
    console.log('prev');
  }
  return (
    <div className="app">
      <div className='container'>
        <div className="progress-container">
          <div className="progress"></div>
        {
        circle.objects.map(({number}, index) =>{
          return <>
            <div key={index} className={`circle`}
            style={{width : number ===index ? (number.length-1) / (circle.objects.length - 1 ) * 100 + '%' : null}}
            >
              {number}
            </div>
          </>
        })
      }
        </div>
        <button className="btn" disabled onClick={prevBtn}> Prev</button>
        <button className="btn" onClick={() => {nextBtn()} }>Next</button>
      </div>
    </div>
  );
}

export default App;
