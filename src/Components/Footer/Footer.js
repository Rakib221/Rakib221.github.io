import React from 'react';
import './Footer.css';
import Facebook from './facebook.png';
import Github from './github.png';
const Footer = () => {
    return (
        <div className="footer footer-spacing-top" id="contact">
            <div className="row p-5">
                <div className="col-lg-4">

                </div>
                <div className="col-lg-3 d-flex justify-content-center align-items-center">
                   <div>
                    <p className='text-center text-white'>&copy;Copyright 2021</p>
                    <p className='text-center text-white'>E-mail:<a className="text-white" href="mailto:rakibmohammed221@gmail.com"> rakibmohammed221@gmail.com</a></p>
                    <p className="text-center text-white">Phone: ++880 1751684565</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100055908652292"><img style={{width:'40px',height:'40px'}} src={Facebook} alt="" srcset="" /></a>
                        <a target="_blank" href="https://github.com/Rakib221"><img style={{width:'40px',height:'40px'}} src={Github} alt="" srcset="" /></a>
                    </div>
                   </div>

                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div>
    );
};

export default Footer;