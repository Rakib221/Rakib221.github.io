import React from 'react';
import './About.css';
import Image from '../Images/myPhoto.jpg'

const About = () => {
    return (
        <div id="about">  
        <div className="row about-spacing-top">
            <div className="col-lg-2">

            </div>
            <div className="col-lg-4">
                <div>
                   <h1 className="mx-3">ABOUT ME</h1>
                </div>
                <br />
                <div>
                    <h3 className="px-3">I'm Rakib Hasan a Web Developer</h3>
                    <p className="text-justify px-3">
                    Web Developer specializing in front-end development. Well-versed in some programming languages including C++, HTML5, JavaScript. I have no industrial experience. But I am working by myself to gain knowledge as much as I can. I am specialized in JavaScript. I want to do research in computer science or information technology.
                    </p>
                    <div className="mx-3">
                        <button className="border-0 bg-danger rounded-pill p-3">
                            <a className="text-white" href="/cv">DOWNLOAD RESUME</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-1">

            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-center">
                <img src={Image} alt="" />
            </div>
            <div className="col-lg-2">

            </div>
        </div>
        </div>
    );
};

export default About;