import React, { useState } from 'react';
import Loading from '../../Loading/loading';
const Plan = ({ content }) => {
    const { image, headline, technology, price_usd } = content;
    const [displayer, setDisplayer] = useState('false');
    return (
        <div className="col-md-3 crd card_Case mrg-10-10" data-aos="zoom-in">
            <div className="foil">
                <div>
                    <div className="shadows">
                        <a href={'https://eco-gem-pedant.netlify.app'} target="_blank" rel="noopener noreferrer" className='button'>Visit Sample <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg></span></a>
                    </div>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="description">
                <h3 data-aos="zoom-in" className='gradient'>{headline}</h3>
                <p>{`${price_usd*2300} TZS`}</p>
                <h1>{`${price_usd} USD`}</h1>
                <div className={`readmore ${displayer ? "hide" : "show"}`}>
                    <p data-aos="zoom-in">Technologies</p>
                    <ul>
                        {
                            technology?.length > 0 ? technology.map((item, i) =>
                                <li key={i}>
                                    <lord-icon
                                        src={item.icon}
                                        trigger="loop"
                                        delay="1000"
                                        style={{ width: "30px", height: "30px" }}>
                                    </lord-icon>
                                    <span>{item.text}</span>
                                </li>
                            ) : <Loading />
                        }
                    </ul>
                </div>
            </div>
            <div className="center mrg-10-10">
                <button className='LBTN' onClick={() => (displayer ? setDisplayer(false) : setDisplayer(true))}>read more</button>
            </div>
        </div>
    )
}

export default Plan;