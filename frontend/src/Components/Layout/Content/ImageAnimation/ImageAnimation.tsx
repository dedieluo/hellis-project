import { useEffect, useState } from "react";
import "./ImageAnimation.css";

const images = [
  require('../../images/0G2A4233.jpg'),
  require('../../images/0G2A4640פ.jpg'),
  require('../../images/0G2A4805ח.jpg'),
  require('../../images/0G2A6584פ.jpg'),
];

function ImageAnimation(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="image-animation-container">
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={`
              ${index === currentIndex ? 'active' : ''}
              ${index === currentIndex - 1 || (currentIndex === 0 && index === images.length - 1) ? 'previous' : ''}
              ${index === currentIndex + 1 || (currentIndex === images.length - 1 && index === 0) ? 'next' : ''}
            `}
          />
        ))}
      </div>
      <button className="left" onClick={goToPrevious}>
        {"<"}
      </button>
      <button className="right" onClick={goToNext}>
        {">"}
      </button>
    </div>
  );
}

export default ImageAnimation;
