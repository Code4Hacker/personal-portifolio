import React from 'react';
import './projects.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { banner } from '../images';


const Projects = () => {
  Aos.init({
    duration: 1000,
    easing: 'linear'
  });
  return (
    <div>
      <div className="banner_container" data-aos="fade-up" style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        opacity: '80%'
      }}>
        <div className="shadows">
          
        </div>
        <div className="search_banner">
            <input type="text" placeholder='Search the Resources ' />
            <i className="bi bi-search gradient">0</i>
          </div>
      </div>
    </div>
  )
}

export default Projects;