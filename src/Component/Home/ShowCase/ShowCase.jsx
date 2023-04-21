import React from 'react';
import './showcase.css';
import Loading from '../../Loading/loading';

const ShowCase = ({ result }) => {
  const video = result.attributes.Link.replace("https://youtu.be", "https://www.youtube.com/embed");
  return (
    <div className="col-md-4 crd mrg-10-10" data-aos="zoom-in">
      <div className="foil">
        {!result ? <Loading /> : <div>
          <iframe src={`${video}`} title={result.attributes.title}/></div>}

      </div>
      <div className="description">
        <h3 data-aos="zoom-in">{result.attributes.title}</h3>
        <p data-aos="zoom-in">{(result.attributes.description).substring(0, 150)}...</p>
      </div>
      <div className="center mrg-10-10" data-aos="zoom-in">
        <a href={result.attributes.Link} target="_blank" rel="noopener noreferrer" className='LBTN'>Go to youTube <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg></span></a>
      </div>
    </div>
  )
}

export default ShowCase;