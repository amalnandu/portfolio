import React from 'react';
import PropTypes from 'prop-types';
import '../styles/osc.css';

function OscillatingImage({ src, alt, width, height, duration }) {
  return (
    <div className="oscillating-container" style={{ width, height }}>
      <img 
        src={src} 
        alt={alt} 
        className="oscillating-image" 
        style={{ animationDuration: duration }} 
      />
    </div>
  );
}

OscillatingImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  duration: PropTypes.string,
};

OscillatingImage.defaultProps = {
  alt: 'Oscillating Image',
  width: '300px',
  height: '300px',
  duration: '3s',
};

export default OscillatingImage;

