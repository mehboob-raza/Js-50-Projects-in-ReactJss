import React, {useRef} from 'react'
import './App.css';

function App() {
  // const [key, setKey] = useState()
  const insert = useRef()
  window.addEventListener('keydown', (event) =>{
    insert.current.innerHTML = `
  <div class="key">
      ${event.key === '' ? 'Space' : event.key}
      <small> event.key </small>
  </div>
  <div class="key">
      ${event.keyCode}
      <small> event.keycode </small>
  </div>
  <div class="key">
      ${event.code}
      <small> event.code </small>
  </div>
`
  })

  return (
    <div className="App">
      <div id="insert" ref={insert}>
        
        <div class="key">
            Press any key to get keyCode and code
        </div>
        
    </div>
    </div>
  );
}

export default App;
