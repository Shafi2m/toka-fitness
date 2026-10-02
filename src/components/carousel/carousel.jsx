import { useState } from "react";
import "./carousel.css"
import old from "../../assets/pexels-kampus-8637974.jpg"
import weights from "../../assets/pexels-mart-production-8032748.jpg"
import fruit from "../../assets/pexels-enginakyurt-6465185.jpg"
import old_2 from "../../assets/pexels-yankrukov-6815703.jpg"

const images = [
    old,
  weights,
  fruit,
  old_2 ,
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={previous}>
        ‹
      </button>

      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="carousel-image"
      />

      <button className="carousel-btn right" onClick={next}>
        ›
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}