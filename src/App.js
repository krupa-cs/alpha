import React, { useState } from "react";
import "./App.css";

const carImages = [
  "/CAR2.jpeg",
  "/CAR3.avif",
  "/CAR.webp" 
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [invites, setInvites] = useState(0);
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(null);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % carImages.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + carImages.length) % carImages.length);

  const calculatePrice = () => {
    const result = invites * duration * 100;
    setPrice(result);
  };

  return (
    <div className="app">
      <h1>🚗 Alpha Car Showcase</h1>

      {/* Carousel */}
      <section className="card">
        <h2>Car Images</h2>
        <div className="carousel">
          <button onClick={prevImage} className="btn">⬅ Prev</button>
          <img src={carImages[currentIndex]} alt="car" className="car-image" />
          <button onClick={nextImage} className="btn">Next ➡</button>
        </div>
      </section>

      {/* 360° View */}
      <section className="card">
        <h2>360° Car View</h2>
        <button
          onClick={() =>
            window.open("/CAR2.jpeg", "_blank") // open one of your real car images
          }
          className="btn"
        >
          View 360°
        </button>
      </section>

      {/* Price Calculator */}
      <section className="card">
        <h2>Price Calculator</h2>
        <div className="calculator">
          <input
            type="number"
            placeholder="Number of Invites"
            value={invites}
            onChange={(e) => setInvites(e.target.value)}
          />
          <input
            type="number"
            placeholder="Duration (hours)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <button onClick={calculatePrice} className="btn">Calculate</button>
        </div>
        {price !== null && <p className="price">Total Price: ₹{price}</p>}
      </section>

      {/* Car Overview */}
      <section className="card">
        <h2>Car Overview</h2>
        <ul>
          <li><b>Model:</b> Tesla Model 3</li>
          <li><b>Year:</b> 2024</li>
          <li><b>Mileage:</b> 20,000 km</li>
          <li><b>Price:</b> ₹25,00,000</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
