import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Bootstraps/Css/bootstrap.min.css';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navigation-container sticky-top">
          <div className="d-flex justify-content-center align-items-center row pt-3">
            <div className="col-lg-1 col-sm-0">

            </div>
              <div className="col-lg-4 col-sm-6">
                 <h1 className="text-white"><span className="nav-item">MD RAKIB HASAN</span> <span style={{color:'red'}}>.</span></h1>
              </div>
              <div className="col-lg-1 col-sm-0">

              </div>
              <div className="col-lg-5 col-sm-6">
              <Nav activeKey="/home">
           
           <Nav.Item>
             <Nav.Link  className="text-white text-decoration-none" href="/#home"><span className="nav-item">HOME</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link className="text-white text-decoration-none nav-item" href="#about"><span className="nav-item">ABOUT</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link className="text-white  text-decoration-none nav-item" href="#services"><span className="nav-item">SERVICES</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
              <Nav.Link className="text-white  text-decoration-none nav-item" href="#recent-works"><span className="nav-item">RECENT-WORKS</span></Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link className="text-white text-decoration-none nav-item" href="#contact"><span className="nav-item">CONTACT</span></Nav.Link>
           </Nav.Item>
         </Nav>
              </div>
              <div className="col-lg-2 col-sm-0">

              </div>
            </div>
        </div>
    );
};

export default Navigation;