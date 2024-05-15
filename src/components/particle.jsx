import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#f5f5f5", // Background color of the particles container
          },
        },
        particles: {
          number: {
            value: 50, // Number of particles
          },
          color: {
            value: "#007fbf", // Color of the particles
          },
          shape: {
            type: "circle", // Shape of the particles
          },
        },
        interactivity: {
          detectsOn: "window",
          events: {
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
