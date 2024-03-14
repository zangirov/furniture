import { useEffect, useState } from "react";
import style from "./Slider.module.scss";
import firstImage from "../../../../assets/images/first.jpg";
import secondImage from "../../../../assets/images/second.jpg";
import thirdImage from "../../../../assets/images/third.jpg";
import fourthImage from "../../../../assets/images/fourth.jpg";

const Slider = () => {
  const images = [firstImage, secondImage, thirdImage, fourthImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={style.slider}>
      <img
        className={style.slider__image}
        src={images[currentImageIndex]}
        alt="Slider"
      />

      <div className={style.slider__btns}>
        <button className={style.prev__btn} onClick={handlePrevClick}>
          <svg
            width="16"
            height="24"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16L9.5399e-08 8L8 9.5399e-08L10 2L4 8L10 14L8 16Z"
              fill="white"
            />
          </svg>
        </button>
        <button className={style.next__btn} onClick={handleNextClick}>
          <svg
            width="16"
            height="24"
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 -3.49691e-07L10 8L2 16L-6.11959e-07 14L6 8L-8.74228e-08 2L2 -3.49691e-07Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
