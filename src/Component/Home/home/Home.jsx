import React, { useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import UseFetch from '../../Hooks/useFetch';
import ShowCase from '../ShowCase/ShowCase';
import Loading from '../../Loading/loading';
import { reactIcon, gitIcon, githubIcon, batchIcon, cssIcon, bootstrapIcon, strapiIcon, jsIcon, reactIcon2, cloudinaryIcon, phpIcon, pythonIcon, linuxIcon, nodeIcon, sanityIcon, cppIcon, barge, ecommerceImg } from '../../images/icons/index';
import plans from '../Plans/content.json';
import 'aos/dist/aos.css';
import jQuery from 'jquery';
import AOS from 'aos';
import Plan from '../Plans/Plan';
const API_URL = 'https://geminimaster.onrender.com/api/gemini-posts?populate=*';
const Home = () => {
  AOS.init();
  const preLoader = () => {
    setTimeout(() => {
      jQuery(".pre-loader").fadeOut({
        duration: 2000,
        easing: 'linear'
      });
    }, 1000);
  }
  const { post } = UseFetch(API_URL);
  useEffect(() => { preLoader() }, []);
  return (
    <div className='home mrg-100-btn'>
      <div className="banner">
        <div className="shadows">
          <div className="intro transform-translate-50-30">
            <div className="col-xl-12">
              <h1 className='animate__animated animate__zoomIn animate__delay-3s'>Launch and Create your web application <span className="gradient">Gemini Website</span> now.</h1>
              <p className=' animate__animated animate__zoomIn animate__delay-4s' data-aos="zoom-in">Interested with Programming languages. I have almost like Four ( 4 ) years of Experience as a Front-end developer working with different Platform. And now here on 2023 I am a student at <span className='gradient'>The University of Dodoma </span> Taking a degree in Bachelor of Science in <span className='gradient'>Computer Science.</span></p>

              <div className="button animate__animated animate__zoomIn animate__delay-5s">
                <button data-aos="zoom-in">Watch Projects</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mrg-40-top">
            <div className="headline">
              <h1 className='title' data-aos="zoom-in">upgrading your Skills with <span className='gradient'>Tutorial</span> video from my You<span className='gradient red'>tube</span></h1>
            </div>
          </div>
          <div className="col-xl-8 center" data-aos="zoom-in">
            <p>This are ShowCase from my Youtube Channel videos, I have made some of tutorial all concering with Computer Science Articles related with ethical hacking, <span className="gradient">Web Development</span> and Other Issues regadless on Programming<span className='gradient'> Languages</span> If your a biginner will be helpful.</p>
          </div>
        </div>
        <div className="row">
          {
            post?.length > 0 ? post.map((post) => <ShowCase result={post} key={post.id} />) : <Loading />
          }
        </div>
        {
          post?.length > 0 ?
            <div className="col-xl-12" data-aos="zoom-in">
              <div className="button center mrg-10-10 btns">
                <Link className='link'>View All <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg></span></Link>
              </div>
            </div> : ''
        }
        <div className="row">
          <div className="col-xl-9">
            <div className="headline">
              <h1 className='title' data-aos="zoom-in"><span className="gradient">This are the </span> few of m y <span className='gradient'>Badges</span> that I win from  <span className="gradient">Defferent Academies </span><span className='red'></span> </h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className='row'>
              <div className="col-1 barge">
                <a href="https://www.credly.com/badges/5d6585a4-be08-47ea-93b1-c651488fdee6/public_url" target="_blank" rel="noopener noreferrer" className="image">
                  <img src={barge} alt="Cisco Network" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mrg-100-btn">
          <div className="col-xl-9">
            <div className="headline">
              <h1 className='title' data-aos="zoom-in"><span className="gradient">here down</span> are all of my <span className='gradient'>skills</span> that I use <span className="gradient">everytime</span><span className='red'></span></h1>
            </div>
          </div>
          <div className="col-md-8 center">
            <p data-aos="zoom-in">The list below show frameworks, Programming Languages and Each Platform I've been working with Even <span className="gradient">Clouds</span> and <span className="gradient">Databases</span></p>
          </div>
          <div className="col-xl-8">
            <div className="row">
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={bootstrapIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={jsIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={reactIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <div className="basic">Basic</div>
                <img src={gitIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={githubIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={strapiIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={cloudinaryIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={batchIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={cssIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <div className="basic">Basic</div>
                <img src={linuxIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <div className="basic">Basic</div>
                <img src={phpIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <div className="basic">Basic</div>
                <img src={pythonIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <div className="basic">Basic</div>
                <img src={nodeIcon} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={reactIcon2} alt="" className="skills" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={sanityIcon} alt="" className="skills sanity" />
              </div>
              <div className="col-2 skill" data-aos="zoom-in">
                <img src={cppIcon} alt="" className="skills" />
              </div>
            </div>
            <div className="col-xl-12">
              <div className="headline">
                <h1 className='title' data-aos="zoom-in"><span className="gradient">What I offer</span> and their <span className='gradient'>Plans</span></h1>
              </div>
            </div>

          </div>
          <div className="container">
            <div className="row">
              {
                plans?.length > 0 ? plans.map((content, i) => <Plan content={content} key={i} />) : <Loading />
              }
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="clipper"></div>
              <img src={ecommerceImg} alt="" />
            </div>
            <div className="col-md-6">
              <h1 className="title gradient mrg-btn-100">
                Contact Me
              </h1>
              <div className="box_contact">
                <div className="maploc">
                  <iframe src="https://maps.google.com/maps?q=cive hostels block 4&t=&z=10&ie=UTF8&iwloc=&output=embed" frameBorder="0" title='Frame Map'></iframe>
                </div>
                {/* <div className="location">

                  <span>Location:</span><span>The University of Dodoma (CIVE) - Tanzania</span>
                </div> */}
                <div className="textme">
                  <input type="text" placeholder='Name' />
                  <input type="text" placeholder='Email' />
                </div>
                <div className="textme">
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="textme">
                  <button><span className='gradient'>WhatsApp</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;