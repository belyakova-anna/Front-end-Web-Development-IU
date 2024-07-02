import React from 'react';

interface SkillsRowProps {
  images: { src: string; alt: string }[];
}

const SkillsRow: React.FC<SkillsRowProps> = ({ images }) => {
  return (
    <div className="skills-row">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default SkillsRow;
