import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  let [twitter, setTwitter] = useState(0)
  let [facebook, setFacebook] = useState(0)
  let [youtube, setYouTube] = useState(0)


  
  useEffect(() =>{
    twitter < 12000 && setTimeout(() => setTwitter(twitter + 1), 0.9);
    facebook < 12000 && setTimeout(() => setFacebook(facebook + 1), 0.9);
    youtube < 12000 && setTimeout(() => setYouTube(youtube + 1), 0.9);  

  })


  return (
    <div className="app">
      <div className="counter-container">
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter" data-target="12000"> {twitter} </div>
        <span>Twitter Followers</span>
    </div>
    <div className="counter-container">
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter" data-target="7000"> {facebook} </div>
        <span>Facebook Followers</span>
    </div>
    <div className="counter-container">
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter" data-target="20000"> {youtube} </div>
        <span>Youtube Followers</span>
    </div>
    </div>
  );
}

export default App;
