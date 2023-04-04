import React from "react";
import audio from "./sounds/boo.mp3";
import audio1 from "./sounds/gasp.mp3";
import audio2 from "./sounds/tada.mp3";
import audio3 from "./sounds/victory.mp3";
import audio4 from "./sounds/wrong.mp3";

// const sounds =  [{sound : audio}, {sound : audio1}, {sound : audio2}, {sound : audio3}, {sound : audio4}]

const sounds = [audio, audio1, audio2, audio3, audio4];

const Sounds = () => {
  const playAudio = (id) => {
    document.getElementById(id).play()
  console.log(document.getElementById(id))
  // document.getElementById(id).pause()

  };
  
  // setInterval(playAudio,1000)
  return (
    <div>
      {sounds.map((sound) => (
        <button key={sound} onClick={() => playAudio(sound)} >
          <audio src={sound} id={sound}  />
          {sound}
        </button>
      ))}
    </div>
  );
};

export default Sounds;
