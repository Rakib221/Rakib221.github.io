import React from 'react';
import '../Bootstraps/Css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import Image1 from './image1 (1).png';
import Image2 from './image1 (2).png';
import Image3 from './image1 (3).png';
import Image4 from './image3.png';
import Image5 from './image4.png';
import './MyRecentWorks.css';

const MyRecentWorks = () => {
    return (
        <div className="MyRecentWorks-spacing-top mx-2" id="recent-works">
            <h2 className="text-center"  style={{color:'red'}}>My Recent Works</h2>
            <br />
            <br />
        <div className="row mt-5 mb-5">
            <div className="col-lg-2">
                    
            </div>
            <div className="col-lg-8">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image5}
      alt="First slide"
    />
    <Carousel.Caption>
        
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image2}
      alt="Second slide"
    />

    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image1}
      alt="Third slide"
    />

    <Carousel.Caption>
        
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image3}
      alt="First slide"
    />
    <Carousel.Caption>
        
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Image4}
      alt="First slide"
    />
    <Carousel.Caption>
        
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            <div className="col-lg-2">

            </div>
        </div>
        </div>
    );
};

export default MyRecentWorks;