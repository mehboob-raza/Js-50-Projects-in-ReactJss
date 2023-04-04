import './App.css';
import React, {useState} from 'react'
import applause from './sounds/applause.mp3';
import boo from './sounds/boo.mp3';
import gasp from './sounds/gasp.mp3';
import tada from './sounds/tada.mp3';
import victory from './sounds/victory.mp3';
// import {Howl, Howler} from 'howler'

// const audioClips = [
//   {sound: applause, label: 'applause'},
//   {sound: boo, label : 'boo'},
//   {sound: gasp, label : 'gasp'},
//   {sound: tada, label :'tada'},
//   {sound: victory, label: 'victory'},
// ]
const sound = [applause, boo, tada, victory, gasp]
function App() {
  const [audio] = useState(new Audio(sound));

  /*
   * STOP AUDIO
   */
  const stopAudio = () => {
    audio.pause();
  };
  /*
  * PLAY AUDIO ON HOVER
  */
  const playAudio = () => {
    audio.play();
    console.log(audio);
  };
  // setInterval(playAudio, 10000)
  return (
    <div className="app">
      {/* <h1>Sound Board</h1> */}
      {sound.map((audio,index) => {
        return <button key={index} className='btn' onMouseEnter={() => playAudio()} onMouseLeave={() => stopAudio()}>
        {audio}
      </button>
      })}
    </div>
  );
}

export default App;
