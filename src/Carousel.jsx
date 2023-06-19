import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css"; // Import the CSS file for styling
import Card from "./Components/Card";
import styled from "styled-components";

let boolean = false;

const Header = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.width > 768 ? "5.75rem" : "3.75rem")};
  line-height: 100%;
  /* or 92px */

  text-align: center;
  letter-spacing: ${(props) => (props.width > 768 ? "-0.05rem" : "-0.04rem")};

  /* Grayscale/Black */

  color: #0a0e12;
`;

function Carousel({ mockData }) {
  const [currentImage, setCurrentImage] = useState(0);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (!boolean) {
    mockData.push(mockData[0]);
    boolean = true;
  }

  useEffect(() => {
    // Check if currentImage is the last image index
    if (currentImage === mockData.length - 1) {
      setCurrentImage(0);
    }
  }, [currentImage]);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <main>
      <Header $width>
        Vimeo <br /> customer stories
      </Header>

      {/* button comes here */}

      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentImage * 94}%)` }}
        >
          {mockData.map((data, index) => (
            <Card
              data={data}
              idx={index}
              activeIdx={currentImage}
              width={width}
            />
          ))}
        </div>
        <div className="carousel-buttons">
          {currentImage !== 0 && (
            <button className="prev-button">Previous</button>
          )}
          <button className="next-button">Next</button>
        </div>
        <div className="dot-container">
          {mockData.map((image, index) => (
            <div
              key={index}
              className={`dot ${index === currentImage ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Carousel;
