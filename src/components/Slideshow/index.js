import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import IMAGES from './images';

const Slideshow = () => {
  return (
    <header id="home">
      <Carousel useKeyboardArrows autoPlay interval={3000}>
        {IMAGES.map((image) => {
          return (
            <div key={image.alt}>
              <img src={image.url} alt={image.alt}/>
            </div>
          )
        })}
      </Carousel>
    </header>
  );
};

export default Slideshow;