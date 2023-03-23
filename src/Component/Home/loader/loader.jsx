import React from 'react';
import './loader.css';
import logo from './logo.png';
const Loader = () => {
  return (
    <div className='pre-loader'>
        <div className="logo">
            <div className="icon">
                <img src={logo} alt="logo" />
            </div>
            <div className="description">
                {/* <span>Be Smart, Do smart</span> */}
            </div>
        </div>
    </div>
  )
}

export default Loader;