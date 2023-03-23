import React from 'react';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
import logo from '../../images/logo.png'
import './nav.css';
const Navbar = () => {
    window.onscroll = function(){
        window.pageYOffset > 100 ? jQuery(".navigation").addClass("scrolled") : jQuery(".navigation").removeClass("scrolled");
        
    }
  return (
    <div className='navigation'>
        <div className="container flex">
        <div className="log">
            <h3 className='logo_img'><span className='gradient'>gemini</span></h3>
        </div>
        <div className="links">
            <ul>
                <li>
                    <Link className="link">Home</Link>
                </li>
                <li>
                    <Link className="link">About</Link>
                </li>
                <li>
                    <Link className="link">Projects</Link>
                </li>
                <li className='button'>
                    <Link className="link">Hire Me</Link>
                </li>
            </ul>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stack" viewBox="0 0 16 16"><path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/></svg></button>
        </div>
        </div>
    </div>
  )
}

export default Navbar;