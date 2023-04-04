import React, {useState} from 'react'
import './App.css';

function App() {
  const [search, setSearch] = useState(false)
  function hiddenSearch(){
    
      setSearch(!search)
  }
  return (
    <div className="app">
      <div className="search"
      style = {{
        position: 'relative',
        height: '0px',
      }}
      >
      <input type='text' className='input' placeholder='Enter search term'  
      style = {{
        // position: 'absolute',
        backgroundColor : '#fff',
        border : '0',
        height: '50px',
        transition : '0.4s linear',
        width : search ? '200px' : '0px',

      }}
      />
      <button className='btn' onClick = {hiddenSearch}>
      <i class="fas fa-search" ></i>
      </button>
      </div>
    </div>
  );
}

export default App;
