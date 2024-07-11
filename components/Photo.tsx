import React from 'react';

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Photo;
