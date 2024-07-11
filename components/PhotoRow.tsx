import React from 'react';
import Photo from './Photo';

interface PhotoRowProps {
  photos: { src: string; alt: string }[];
}

const PhotoRow: React.FC<PhotoRowProps> = ({ photos }) => {
  return (
    <div className="row">
      {photos.map((photo, index) => (
        <Photo key={index} src={photo.src} alt={photo.alt} />
      ))}
    </div>
  );
};

export default PhotoRow;
