import React, {useState} from 'react'


const sound = ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', './sounds/applause.mp3', './sounds/boo.mp3', './sounds/gasp.mp3', './sounds/tada.mp3', './sounds/victory.mp3'];

// let sound1 = [audio1, audio2, audio3, audio4, audio5,audio6]
function About() {
    const [audio, setAudio] = useState(new Audio([sound]));

  /*
   * STOP AUDIO
   */
  const stopAudio = () => {
    audio.pause();
    setAudio(audio)
  };

  /*
   * PLAY AUDIO ON HOVER
   */
  const playAudio = () => {
    audio.play();
    setAudio(audio)
  };

  return (
    <>
    {sound.map((audios, index) =>{
        return <button onMouseEnter={() => playAudio()} onMouseLeave={() => stopAudio()}>
        {audios}
      </button>
    })}
    </>
  )
}
export default About