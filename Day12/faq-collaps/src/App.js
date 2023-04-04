import React, {useState} from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  function openBlock(){
    setOpen(true)
    console.log('openBlock')
  }
  function closeBlock(){
    setOpen(false)
  }
  function openBlock1(){
    setOpen1(true)
    console.log('openBlock')
  }
  function closeBlock1(){
    setOpen1(false)
  }
  function openBlock2(){
    setOpen2(true)
    console.log('openBlock')
  }
  function closeBlock2(){
    setOpen2(false)
  }
  function openBlock3(){
    setOpen3(true)
    console.log('openBlock')
  }
  function closeBlock3(){
    setOpen3(false)
  }
  return (
    <div className="app">
       <h1>Frequently asked Question </h1>
    <div className="faq-conatiner">
        {/* <div class="faq-active">  */}
            <div className="faq"
            style={{
              backgroundColor: open ? 'white': ''
            }}
            >
                <h3 className="faq-title">
                    Why Should'nt we trust Atoms?
                </h3>
                <p className="faq-text" 
                 style={{
                  display: open ? 'block': 'none',
                }}
                >
                    They Makeup Every thing
                </p>
                <button className="faq-toggle">
                    <i className="fas fa-chevron-down"
                    style={{
                      display: open? 'none': 'block',
                    }}
                    onClick={openBlock}
                    ></i>
                    <i className="fas fa-times" 
                    style={{
                      display: open? 'block': 'none',
                      backgroundColor: 'gray',
                      borderRadius: '50%',
                      fontSize: '20px',
                    }}
                    onClick={closeBlock}
                    ></i>
                </button>
            </div>
            <div className="faq"
            style={{
              backgroundColor: open1 ? 'white': ''
            }}
            >
                <h3 className="faq-title">
                    What is 1 + 1 ?
                </h3>
                <p className="faq-text"
                style={{
                  display: open1 ? 'block': 'none',
                }}
                >
                    Depend on who is askking
                </p>
                <button className="faq-toggle">
                    <i className="fas fa-chevron-down"
                    style={{
                      display: open1? 'none': 'block',
                    }}
                    onClick={openBlock1}
                    ></i>
                    <i className="fas fa-times"
                    style={{
                      display: open1? 'block': 'none',
                      backgroundColor: 'gray',
                      borderRadius: '50%',
                      fontSize: '20px',
                    }}
                    onClick={closeBlock1}
                    ></i>
                </button>
            </div>

            <div className="faq"
            style={{
              backgroundColor: open2 ? 'white': ''
            }}
            >
                <h3 className="faq-title">
                    What is 1 + 1 ?
                </h3>
                <p className="faq-text"
                style={{
                  display: open2 ? 'block': 'none',
                }}
                >
                    Depend on who is askking
                </p>
                <button className="faq-toggle">
                    <i className="fas fa-chevron-down"
                     style={{
                      display: open2? 'none': 'block',
                    }}
                    onClick={openBlock2}
                    ></i>
                    <i className="fas fa-times"
                    style={{
                      display: open2? 'block': 'none',
                      backgroundColor: 'gray',
                      borderRadius: '50%',
                      fontSize: '20px',
                    }}
                    onClick={closeBlock2}
                    ></i>
                </button>
            </div>

            <div className="faq"
            style={{
              backgroundColor: open3 ? 'white': ''
            }}
            >
                <h3 className="faq-title">
                    What is 1 + 1 ?
                </h3>
                <p className="faq-text"
                style={{
                  display: open3 ? 'block': 'none',
                }}
                >
                    Depend on who is askking
                </p>
                <button className="faq-toggle">
                    <i className="fas fa-chevron-down"
                    style={{
                      display: open3? 'none': 'block',
                    }}
                    onClick={openBlock3}
                    ></i>
                    <i className="fas fa-times"
                    style={{
                      display: open3? 'block': 'none',
                      backgroundColor: 'gray',
                      borderRadius: '50%',
                      fontSize: '20px',
                    }}
                    onClick={closeBlock3}
                    ></i>
                </button>
            </div>


            
        {/* </div>  */}

    </div>
    </div>
  );
}

export default App;
