import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import './Education.css';
const Education = () => {
    return (
    <div className="education-spacing-top">
            <div className="row p-2">
            <div className="col-lg-2">

            </div>
            <div className="col-lg-8">
                <h2 className="text-center mb-5" style={{color:'red'}}>Education</h2>
                <br />
                <br />
                <div className="d-flex justify-content-center align-items-center displayWarp">
                    <div className="col-lg-5">
                        <div className="text-hover">
                            <FontAwesomeIcon icon={faSchool} size="6x" />
                             <h3><a className="text-decoration-none" target="_blank" href="https://www.abdurroufcollege.ac.bd/">Bir Shrestha Munshi Abdur Rouf Public College,Dhaka</a></h3>
                        </div>
                    <p className="px-3"><b>Degree:</b>HSC</p>
                    <p className="px-4"><b>Results:5.00 out of 5.00</b></p>
                    <p className="px-5"><b>Session:</b>2018-2020</p>
                    </div>
                    <div className="col-lg-2">

                    </div>
                    <div className="col-lg-5">
                        <div className="text-hover">
                            <FontAwesomeIcon icon={faSchool} size="6x" />
                             <h3><a className="text-decoration-none" target="_blank" href="https://deb114284.dhakaeducationboard.gov.bd/">Kalihati R. S. Govt. Pilot High School,Tangail</a></h3>
                        </div>     
                    <p className="px-3"><b>Degree:</b>SSC</p>
                    <p className="px-4"><b>Results:5.00 out of 5.00</b></p>
                    <p className="px-5"><b>Session:</b>2016-2018</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-2">

            </div>
        </div>
    </div>
    );
};

export default Education;