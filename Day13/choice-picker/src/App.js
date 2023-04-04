import React, {useRef, createElement} from 'react';
import './App.css';

function App() {
  const textarea = useRef()
  const tagEl = useRef()
  // textarea.addEventListener('keyup', (e) =>{
  //   createTags(e.target.current)
  // })
  // changeValue()
  // function changeValue(textarea){
  //   // let text = textarea.innerText
  //   // text.focus()
  //   createTags(textarea)
  // }
  function createTags(input){
    // const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagEl.current.innerText = ''
    // .split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tags.forEach(tag =>{
      return createElement(
        'span',
        {className: 'tag'},
        tag
        );

    })
  }
  return (
    <div className="app">
      <div className="container">
        <h2>Enter All of the choices devided by Comma (',')
            <br /> Press Enter whrn you done
        </h2>
        <textarea placeholder="Enter choices here..." id="textarea" 
        ref={textarea}
        onChange={changeValue}
        ></textarea>
        <div id="tag" ref={tagEl}>
        </div>
    </div>
    </div>
  );
}

export default App;
