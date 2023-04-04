import React, { useState, useEffect } from "react";
import "./App.css";

let nums = [1, 2, 3, 4];
function App() {
  let [next, setNext] = useState(0);
  // const [prev, setPrev] = useState();

  function nextBtn() {
    if (next < 4) {
      setNext(++next);
    }
  }
  function prevBtn() {
    // next--;
    setNext(--next);
  }
  // let color = [];
  // let activeCircles = next === 0 ? color.push(".active") : null;
  // console.log(activeCircles);
  return (
    <div className="app">
      <div className="container">
        <div className="progress-container">
          {nums.map((num, idx) => {
            return (
              <>
                <div
                  className="progress"
                  key={idx}
                  style={{
                    // backgroundColor :'blue',
                    backgroundColor: next <= idx ? "blue" : "transparent",
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    height: "4px",
                    width: `${next * 33}%`,
                    transform: "translateY(-50%)",
                    zIndex: "-1",
                    transition: "0.4s ease",
                  }}
                ></div>
                <div
                  className="circle"
                  style={{
                            backgroundColor: 'white',
                            height: '30px',
                            width: '30px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '3px solid #e0e0e0',
                            transition: '0.4s ease',
                            borderColor: next >= idx ? "blue" : "",
                  }}
                >
                  {" "}
                  {num}{" "}
                </div>
              </>
            );
          })}
        </div>
        <button
          className="btn"
          onClick={() => {
            prevBtn();
          }}
        >
          {" "}
          Prev
        </button>
        <button className="btn" onClick={(idx) => nextBtn(idx)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
