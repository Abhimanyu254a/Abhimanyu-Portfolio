import React, { useEffect, useRef } from 'react';

 // Make sure to import the CSS file

const Stars = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    // This function will create and draw a single star
    const drawStar = () => {
      const tmpStar = document.createElement('div');
      tmpStar.className = "star";
      tmpStar.style.top = 100 * Math.random() + '%';
      tmpStar.style.left = 100 * Math.random() + '%';
      starsRef.current.appendChild(tmpStar);
    };

    // This function will create the specified number of stars
    const createStars = (count) => {
      for (let i = 0; i < count; i++) {
        drawStar();
      }
    };

    // Call the function to create stars when the component mounts
    createStars(200);

    // Note: The original script used TweenMax, which is part of the GSAP library.
    // To make this work, you'll need to install GSAP.
    // For this example, I'll provide a simpler, pure JavaScript animation
    // to avoid an external dependency. If you want the GSAP version, you'll
    // need to install it and import it here.

    // A simple animation loop without an external library
    const animateStars = () => {
      const stars = starsRef.current.querySelectorAll('.star');
      stars.forEach(star => {
        const duration = Math.random() * 0.5 + 0.5;
        const newOpacity = Math.random();

        star.style.transition = `opacity ${duration}s ease-in-out`;
        star.style.opacity = newOpacity;

        // Use a timeout to loop the animation
        setTimeout(() => {
          animateStars();
        }, duration * 1000);
      });
    };

    // Start the animation after a brief delay
    // This might not be the most efficient way to animate, but it
    // mirrors the original `TweenMax` call's intent.
    // For a more performant React-based animation, you'd use
    // state or CSS keyframes.
    // animateStars(); // You can uncomment this if you want the basic JS loop

  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <div id="stars" ref={starsRef}></div>
  );
};

export default Stars;