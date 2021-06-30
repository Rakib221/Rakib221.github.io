import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div id="home" className="row home-container" style={{padding:'180px 0px 140px 0px'}}>
            <div className="col-1">
         
            </div>
            <div className="col-10">
                <h2 className="text-center text-white">HELLO! I'M RAKIB</h2>
                <br />
                <h1 className="text-center text-white">CREATE INNOVATIVE APPLICATION WITH ME</h1>
                <br />
                 <div className="d-flex justify-content-center align-items-center">
                 <a href="#about" className="mx-3">
                       <button className="p-3 border-0 rounded-pill bg-danger text-white">LEARN MORE</button>
                    </a>
                    <a href="#contact">
                       <button className="p-3 border-0 rounded-pill bg-danger text-white">GET IN TOUCH</button>
                    </a>
                 </div>
            </div>
            <div className="col-1">

            </div>
        </div>
    );
};

export default Home;