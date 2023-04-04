import React,{useState} from 'react'
// import './App.css'

let nums = [1, 2, 3, 4]
const ProgressBar = () => {
    let [next, setNext] = useState(0)

    function nextBtn(){
        // next++;
        if(next < nums.length - 1){
            setNext(++next)
        }
    }

    function prevBtn(){
        setNext(--next)
    }


  return (
    <div container
    style={{
        // font-family: 'Roboto, sans-serif',
            margin: '0',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            overflow: 'hidden',
            textAlign: 'center',
    }}
    >
        <div className="progress-container">
        {
            nums.map((num, index) =>{
                return(
                    <>
                        <div className="progress"
                        style={{
                            zIndex: -1,
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            width: `${next*33}%`,
                            transform: 'translateY(-50%)',
                            transition: '0.4s ease',
                            backgroundColor: next >= index ? 'blue': 'transparent' ,
                        }}
                        ></div>
                        <div className="circle"
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
                                borderColor: next >= index ? 'blue' : ''
                            }}
                        >
                            {num}
                        </div>
                    </>
                )
            })
        }

        </div>
        <div style={{
            display: 'flex',
            gap: '10px',
        }}>
            <button className='btn' onClick={() => prevBtn()}
            style={{
                fontFamily: 'inherit',
                fontSize: '14px',
                padding: '10px 20px',
                backgroundColor: '#3498db',
                color: '#fff',
                border: '0',
                borderRadius: '6px',
                cursor: 'pointer',
            }}
            >Previous</button>
            <button className='btn' onClick={() => nextBtn()}
            style={{
                fontFamily: 'inherit',
                fontSize: '14px',
                padding: '10px 30px',
                backgroundColor: '#3498db',
                color: '#fff',
                border: '0',
                borderRadius: '6px',
                cursor: 'pointer',
            }}
            >Next</button>
        </div>

    </div>
  )
}

export default ProgressBar