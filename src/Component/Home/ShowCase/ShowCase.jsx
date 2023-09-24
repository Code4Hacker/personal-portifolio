import React from 'react';
import './showcase.css';
import Loading from '../../Loading/loading';

const ShowCase = ({ result }) => {
  // const video = result.attributes.Link.replace("https://youtu.be", "https://www.youtube.com/embed");
  return (
    <div className="col-md-4 crd mrg-10-10" data-aos="zoom-in">
      <div className="foil">
        {!result ? <Loading /> : <div>
          <img src={`http://192.168.31.171/personal-portifolio-php/${result.postImg}`} alt={result.postImg} loading='lazy'/></div>}

      </div>
      <div className="description">
        <h3 data-aos="zoom-in">{result.postTitle}</h3>
        <p data-aos="zoom-in">{(result.postNotes).substring(0, 150)}...</p>
      </div>
      <div className="center mrg-10-10" data-aos="zoom-in">
       
        {/* <a href="" target="_blank" rel="noopener noreferrer" className='LBTN'>Go to youTube <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg></span></a> */}
      </div>
    </div>
  )
}

export default ShowCase;

// const obj = {
//   "tutorials": [
//       {
//           "tId": "1",
//           "postTitle": "Gemini Update One",
//           "postDate": "2023-09-18",
//           "postNotes": "Descripted Sampled posted on tutorial",
//           "postImg": "tutorial_first.jpg",
//           "postedUser": "1"
//       },
//       {
//           "tId": "3",
//           "postTitle": "The first Time we Open",
//           "postDate": "2023-09-19",
//           "postNotes": "Hello to all new people in my platform. I'm so impressed to see you here and share this Ideas together, Thanks for Joining me.",
//           "postImg": "tutorials/gemini_tutor_388306704.jpg",
//           "postedUser": "1"
//       }
//   ]
// }