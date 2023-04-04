import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState("");
  const [loading, setLoading] = useState(true);
  async function generateJoke(){
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    console.log(data)
    setJokes(data)
}
  useEffect(() => {
    generateJoke();
  }, []);
  return (
    <div className="app">
      <div className="container">
        <p>ID:  {jokes.id} </p>
        <h3>Don't Laugh Challenge </h3>
        <p className="joke">
          {jokes.joke}
        </p>
        <button id="jokeBtn" className="btn" onClick={generateJoke}>
          Get another joke{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
