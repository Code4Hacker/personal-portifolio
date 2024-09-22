import React, { useEffect, useState } from 'react';
import './home.css';
import '../ShowCase/showcase.css';
import Loading from '../../Loading/loading';
import { reactIcon, gitIcon, githubIcon, batchIcon, cssIcon, bootstrapIcon, strapiIcon, jsIcon, reactIcon2, cloudinaryIcon, phpIcon, pythonIcon, linuxIcon, nodeIcon, sanityIcon, cppIcon, barge, ecommerceImg, flutterIcon, javaIcon, photoshopIcon, adobeXdIcon, figmaIcon, androidIcon, jspIcon, swiftIcon, mongoIcon } from '../../images/icons/index';
import plans from '../Plans/content.json';
import 'aos/dist/aos.css';
import jQuery from 'jquery';
import AOS from 'aos';
import Plan from '../Plans/Plan';

// import { ChevronDoubleDown } from 'react-bootstrap-icons';
// const API_URL = 'https://geminimaster.onrender.com/api/gemini-posts?populate=*';
// const API_URL = 'http://192.168.31.171/personal-portifolio-php/api_tutorials.php';
const Home = () => {
  const badges = [
    {
      "image": reactIcon,
      "status":true,
    },
    {
      "image": gitIcon,
      "status":true,
    },
    {
      "image": githubIcon,
      "status":true,
    },
    {
      "image": flutterIcon,
      "status":true,
    },
    {
      "image": batchIcon,
      "status":true,
    },
    {
      "image": cssIcon,
      "status":true,
    },
    {
      "image": bootstrapIcon,
      "status":true,
    },
    {
      "image": strapiIcon,
      "status":true,
    },
    {
      "image": jsIcon,
      "status":true,
    },
    {
      "image": reactIcon2,
      "status":true,
    },
    {
      "image": cloudinaryIcon,
      "status":true,
    },
    {
      "image": phpIcon,
      "status":true,
    },
    {
      "image": linuxIcon,
      "status":true,
    },
    {
      "image": pythonIcon,
      "status":true,
    },
    {
      "image": nodeIcon,
      "status":true,
    },
    {
      "image": sanityIcon,
      "status":true,
    },
    {
      "image": cppIcon,
      "status":true,
    },
    {
      "image": javaIcon,
      "status":true,
    },
    {
      "image": photoshopIcon,
      "status":true,
    },
    {
      "image": adobeXdIcon,
      "status":true,
    },
    {
      "image": figmaIcon,
      "status":true,
    },
    {
      "image": androidIcon,
      "status":true,
    },
    {
      "image": jspIcon,
      "status":true,
    },
    {
      "image": swiftIcon,
      "status":true,
    },
    {
      "image": mongoIcon,
      "status":true,
    },
    // {
    //   "image": flutterIcon,
    //   "status":true,
    // },
    
  ]
  AOS.init();
  const preLoader = () => {
    setTimeout(() => {
      jQuery(".pre-loader").fadeOut({
        duration: 2000,
        easing: 'linear'
      });
    }, 1000);
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  document.onmousemove = (evt) => {
    let child = document.createElement("div");
    child.setAttribute("class", "mouse_actor");
    document.body.append(child);
    child.style.left=`${evt.pageX}px`;
    child.style.top=`${evt.pageY}px`;
    child.style.backgroundColor=`rgb(${Math.floor((Math.random()*253)+1)}, ${Math.floor((Math.random()*253)+1)},${Math.floor((Math.random()*253)+1)})`
    setTimeout(() => {
      child.remove()
    }, 3000);
  }
  document.onscroll= (evt) => {
    let child = document.createElement("div");
    child.setAttribute("class", "mouse_actor");
    document.body.append(child);
    child.style.left=`${evt.pageX}px`;
    child.style.top=`${evt.pageY}px`;
    child.style.backgroundColor=`rgb(${Math.floor((Math.random()*253)+1)}, ${Math.floor((Math.random()*253)+1)},${Math.floor((Math.random()*253)+1)})`
    setTimeout(() => {
      child.remove()
    }, 3000);
  }
  // document.onmouseover= (evt) => {
  //   setTimeout(() => {
  //     document.querySelectorAll(".mouse_actor").forEach(child => child.remove());
  //   }, 12000);
  // }
  
  useEffect(() => { 
    preLoader();
    window.onkeydown = function(){
      const newAtr = document.createElement("div");
      if(name.length > 6 && email.length > 9 && text.length > 20){
        jQuery(".textme a").fadeIn({
          duration:1000,
          easing:'linear'
        });
        newAtr.innerHTML = "";
      }else{
        jQuery(".textme a").fadeOut({
          duration:1000,
          easing:'linear'
        });
        newAtr.innerHTML = "name must be > 6 and text > 20 or Email not valid!";
        document.querySelector(".error").innerHTML=newAtr.innerHTML;
      }
    } 
  }, [name,email,text]);
  return (
    <div className='home mrg-100-btn'>
      <div className="banner">
        <div className="shadows">
          <div className="intro transform-translate-50-30">
            <div className="col-xl-12">
              <h1 className='animate__animated animate__zoomIn animate__delay-3s'>I'm Paulo Michael a <span className="gradient">Software Developer</span> based on Mobile, Website and Desktop <span className="gradient">Application.</span></h1>
              <p className=' animate__animated animate__zoomIn animate__delay-4s' data-aos="zoom-in">Passionate about Programming with 4 Years of Full Stack Development Experience across Web, Desktop, and Mobile platforms. Currently pursuing a Bachelor's in Computer Science at <span className='gradient'>The University of Dodoma.</span> </p>

              <div className="button animate__animated animate__zoomIn animate__delay-5s">
                <button data-aos="zoom-in">Watch Projects</button>
              </div>
            </div>
          </div>
              {/* <div className="absolute_scroller">
                <button><ChevronDoubleDown/></button>
              </div> */}
        </div>
      </div>
      <div className="container">
        {/* <div className="row">
          <div className="col-xl-9 mrg-40-top">
            <div className="headline">
              <h1 className='title' data-aos="zoom-in">upgrading your Skills with <span className='gradient'>Tutorial</span> video from my You<span className='gradient red'>tube</span></h1>
            </div>
          </div>
          <div className="col-xl-8 center" data-aos="zoom-in">
            <p>This are ShowCase from my Youtube Channel videos, I have made some of tutorial all concering with Computer Science Articles related with ethical hacking, <span className="gradient">Web Development</span> and Other Issues regadless on Programming<span className='gradient'> Languages</span> If your a biginner will be helpful.</p>
          </div>
        </div> */}
        {/* <div className="row">
          {
            post?.length > 0 ? post.map((post) => <ShowCase result={post} key={post.tId} />) : <Loading />
          }
        </div> */}
        {/* {
          post?.length > 0 ?
            <div className="col-xl-12" data-aos="zoom-in">
              <div className="button center mrg-10-10 btns">
                <Link className='link'>View All <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg></span></Link>
              </div>
            </div> : ''
        } */}
       
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
              {
                badges.map((item, key) =>  <div className="col-2 skill" data-aos="zoom-in" key={key}>
                {!item.status ? <div className="basic">Basic</div>:""}
                <img src={item.image} alt="" className="skills" loading="lazy"/>
              </div>)
              }
              
            </div>
            <div className="row">
          <div className="col-xl-9">
            <div className="headline">
              <h1 className='title' data-aos="zoom-in"><span className="gradient">This are the </span> few of m y <span className='gradient'>Badges</span> that I win from  <span className="gradient">Defferent Academies </span><span className='red'></span> </h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className='row' style={{"overflow-x":"scroll"}}>
              <div className="col-1 barge">
                <a href="https://www.credly.com/badges/5d6585a4-be08-47ea-93b1-c651488fdee6/public_url" target="_blank" rel="noopener noreferrer" className="image">
                  <img src={barge} alt="Cisco Network" className='barges' />
                </a>
              </div>
              <div className="col-1 barge">
                <a href="https://www.credly.com/badges/c237bf2c-acb8-457f-b1fa-962732d25a3d/public_url" target="_blank" rel="noopener noreferrer" className="image">
                  <img src={"https://images.credly.com/size/340x340/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png"} alt="Cisco Network" className='barges' />
                </a>
              </div>
              
            </div>
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
                <form>
                  <div className="error">

                  </div>
                  <div className="textme">
                    <input type="text" placeholder='Name'  required value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder='Email'  required value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="textme">
                    <textarea name="" id="" cols="30" rows="10" required placeholder='write a message' value={text} onChange={(e) => setText(e.target.value)}></textarea>
                  </div>
                  <div className="textme">
                    <a href={`https://api.whatsapp.com/send/?phone=255628272363&text=Name:${name},Email:${email}, info: ${text}`}><span className='gradient'>WhatsApp</span></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;