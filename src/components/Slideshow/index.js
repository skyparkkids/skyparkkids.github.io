import React from 'react';
import {Carousel} from 'react-responsive-carousel';

const Slideshow = () => {
  return (
    <header id="home">
      <Carousel showArrows={true}>
        <div>
          <img src="./images/skypark10.jpg" alt="skypark-9"/>
        </div>
        <div>
          <img src="./images/skypark1.jpg" alt="skypark-1"/>
        </div>
        <div>
          <img src="./images/skypark2.jpg" alt="skypark-2"/>
        </div>
        <div>
          <img src="./images/skypark3.jpg" alt="skypark-3"/>
        </div>
        <div>
          <img src="./images/skypark4.jpg" alt="skypark-4"/>
        </div>
        <div>
          <img src="./images/skypark5.jpg" alt="skypark-5"/>
        </div>
        <div>
          <img src="./images/skypark6.jpg" alt="skypark-6"/>
        </div>
        <div>
          <img src="./images/skypark7.jpg" alt="skypark-7"/>
        </div>
        <div>
          <img src="./images/skypark8.jpg" alt="skypark-8"/>
        </div>

      </Carousel>
    </header>
  );
};

export default Slideshow;