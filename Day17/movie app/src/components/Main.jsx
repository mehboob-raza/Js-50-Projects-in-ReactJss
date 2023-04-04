import React from 'react'
// import { Link } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import './Main.css'

const Main = () => {
  return (
    <>
     <div className='header'>
        <nav>
            <ul>
                <li> <a to='#'>Popular</a>  </li>
                <li> <a to='#'>Theater</a>  </li>
                <li> <a to='#'>Kids</a>  </li>
                <li> <a to='#'>Drama</a>  </li>
                <li> <a to='#'>Comedy</a>  </li>
            </ul>
        </nav>

        <form className='search-btn'>
            <input type="text" placeholder='Enter Movie Name.... ' className='inputText'/>
            <button> <AiOutlineSearch /> </button>
        </form>
    </div>      
    
    </>
  )
}

export default Main