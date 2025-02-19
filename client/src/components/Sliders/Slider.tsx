import { useState } from "react";
import SliderItem from "./SliderItem";
// css file
import "./Slider.css";

const Sliders = () => {
  const [counter, setCounter] = useState(0);

  // button functions
  const decrease = () => setCounter(counter < 2 ? counter + 1 : 0);
  const increase = () => setCounter(counter > 0 ? counter - 1 : 2);

  return (
    <>
      <section className="slider">
        <div className="slider-elements">
          {counter === 0 && (
            <SliderItem imageSrc="../../../img/slider/slider1.jpg" />
          )}

          {counter === 1 && (
            <SliderItem imageSrc="../../../img/slider/slider2.jpg" />
          )}

          {counter === 2 && (
            <SliderItem imageSrc="../../../img/slider/slider3.jpg" />
          )}
          <div className="slider-buttons">
            <button onClick={() => increase()}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button onClick={() => decrease()}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="slider-dots">
            <button
              className={`slider-dot ${counter === 0 && "active"}`}
              onClick={() => setCounter(0)}
            >
              <span></span>
            </button>
            <button
              className={`slider-dot ${counter === 1 && "active"}`}
              onClick={() => setCounter(1)}
            >
              <span></span>
            </button>
            <button
              className={`slider-dot ${counter === 2 && "active"}`}
              onClick={() => setCounter(2)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliders;
