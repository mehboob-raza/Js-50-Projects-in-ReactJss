import "./App.css";
import { React, useState } from "react";
import img from './images/img.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg'

const images = [img, img1, img2, img3]

function App() {
  const [state, setState] = useState(0);
  // const imgRef = useRef()
  return (
    <div className="container">
      {/* <h1>Images</h1> */}

      {images.map((imgs, i) => {
        return (
          <div className="panel" onClick={() => setState(i)}>
            <img
              src={imgs}
              style={{
                width: state === i ? "600px" : "130px", height: state === i ? "600px" : "600px", borderRadius: '50px'
              }}
            />
            <h3>Wait to Fly</h3>
          </div>
        );
      })}

      {/* <div className="" onClick={() => setState(1)}>
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          style={{ width: state === 1 ? "300px" : "100px", height: "100px" }}
        />
        <h3>Desert</h3>
      </div>
      <div className="" onClick={() => setState(2)}>
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          style={{ width: state === 2 ? "300px" : "100px", height: "100px" }}
        />
        <h3>Wait to Travel</h3>
      </div>
      <div className="" onClick={() => setState(3)}>
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          style={{ width: state === 3 ? "300px" : "100px", height: "100px" }}
        />
        <h3>Ocean</h3>
      </div> */}
    </div>
  );
}

export default App;
