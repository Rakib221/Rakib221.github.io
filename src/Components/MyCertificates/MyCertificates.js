import React from 'react';
import './MyCertificate.css';
import Honor from './honor.png';
import Participation from './participation.jpg';

const MyCertificates = () => {
    return (
        <div className="MyCertificate-spacing-top">
            <h2 className="text-center" style={{color:'red'}}>My Documents</h2>
            <br />
            <br />
            <div className="row">
                <div className="col-lg-2">

                </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                               <img style={{width:'500px'}}  src={Honor} alt="" srcset="" />
                            </div>
                            <div className="col-lg-6">
                               <img style={{width:'500px'}}  src={Participation} alt="" srcset="" />  
                            </div>
                        </div>
                    </div>
                <div className="col-lg-2">

                </div>
            </div>
        </div>
    );
};

export default MyCertificates;