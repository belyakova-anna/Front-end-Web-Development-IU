import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SkillImage {
  src: StaticImageData;
  alt: string;
}

interface SkillsRowProps {
  images: SkillImage[];
}

const SkillsRow: React.FC<SkillsRowProps> = ({ images }) => {
  return (
    <div className="skills-row">
      {images.map((image, index) => (
        <div key={index} className="skill">
          <Image src={image.src} alt={image.alt} width={64} height={64} />
        </div>
      ))}
    </div>
  );
};

export default SkillsRow;
