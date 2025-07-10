import React, { useEffect, useState } from "react";

const images = [
  "slideWater.png",
  "saleXits.png",
  "cosmetics.png",
  "iphone.png",
  "futbolka.png",
  "basseyn.png",
  "konditsioner.png",
  "graduates.png",
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides">
        {images.map((img, i) => (
          <div className={`slide ${i === index ? "active" : ""}`} key={i}>
            <img src={`/images/assets/${img}`} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>
      <div className="nav">
        <button
          className="prev"
          onClick={() =>
            setIndex((i) => (i - 1 + images.length) % images.length)
          }
        >
          ❮
        </button>
        <button
          className="next"
          onClick={() => setIndex((i) => (i + 1) % images.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
