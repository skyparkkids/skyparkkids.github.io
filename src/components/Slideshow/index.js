import React from "react";
import { Carousel } from "react-responsive-carousel";
import IMAGES from "./images";

const Slideshow = () => {
  return (
    <header id="home">
      <div
        style={{
          maxWidth: "1110px",
          margin: "0 auto",
          paddingTop: "80px",
        }}
      >
        <Carousel useKeyboardArrows autoPlay interval={3000}>
          {IMAGES.map((image) => {
            return (
              <div key={image.alt}>
                <img src={image.url} alt={image.alt} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </header>
  );
};

export default Slideshow;
