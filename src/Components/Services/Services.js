import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
    return (
        <div className="services-spacing-top" id="services">
            <h2 className="text-center mt-5 mb-5" style={{color:'red'}}>Services I Offer</h2>
            <br />
            <div className="row mb-5 mt-5">
                <div className="col-lg-2">
                
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                               <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                               <br />
                               <br />
                               <h3>HTML</h3>
                            </div>
                        </div>
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                <br />
                                <br />
                                <h3>CSS</h3> 
                            </div>     
                        </div>
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                <br />
                                <br />
                                <h3>BOOTSTRAPS</h3> 
                            </div>     
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
{/* ////////////////////////////////////////////            */}
            <div className="row">
                <div className="col-lg-2">
                
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                <br />
                                <br />
                                <h3>JAVASCRIPT</h3> 
                            </div>     
                        </div>
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                <br />
                                <br />
                                <h3>REACT</h3> 
                            </div>     
                        </div> 
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                <br />
                                <br />
                                <h3>C++</h3> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
            {/* /////////////////////// */}
            <div className="row mb-5 mt-5">
                <div className="col-lg-2">
                
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                               <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                               <br />
                               <br />
                               <h3>MATERIAL-UI</h3>
                            </div>
                        </div>
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                <br />
                                <br />
                                <h3>MongoDB</h3> 
                            </div>     
                        </div>
                        <div className="col-lg-1">

                        </div>
                        <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
                                <br />
                                <br />
                                <h3>FIREBASE</h3> 
                            </div>     
                        </div>
                    </div>
                </div>
                <div className="col-lg-2">

                </div>
            </div>
        </div>
    );
};

export default Services;