import React, { useRef ,useEffect} from "react";
import "./App.css";

function App() {

  const passKey = useRef();
  const passKey1 = useRef();
  
  useEffect(()=>{

    // passKeys.forEach(passKey =>{
      passKey.current.innerHTML = passKey.current.innerText
        .split("")
        .map(
          (letter, index) =>
            `<span style="transition-delay:${index * 90}ms" >${letter}</span>`
        )
        .join("");
    // })

    passKey1.current.innerHTML = passKey1.current.innerText
      .split("")
      .map(
        (letter, index) =>
          `<span style="transition-delay:${index * 90}ms" >${letter}</span>`
      )
      .join("");
  },[])
  return (
    <div className="app">
      <div className="container">
        <h1>Login Please</h1>
        <form>
          <div className="form-control">
            <input type="text" required 
            // onClick={(email) => showEmail()} 
            />
            <label
            ref={passKey}
              style={{
                color: "black",
                // transform: up1 ? "translateY(-30px)" : "",
                transition: "0.4s linear",
              }}
            >
              Email
            </label>
          </div>

          <div className="form-control">
            <input type="password" required  />
            <label
              ref={passKey1}
              // onClick={moveUp2}
              style={{
                color: "black",
                // transform: up2 ? "translateY(-30px)" : "",
                transition: "1s linear",
              }}
            >
              Password
            </label>
          </div>
          <button className="btn"> Login </button>
          <p className="text">
            Don't have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
