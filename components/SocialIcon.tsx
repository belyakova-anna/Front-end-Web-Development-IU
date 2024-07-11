import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SocialIconProps {
  link: string;
  iconSrc: StaticImageData;
  alt: string;
  id: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ link, iconSrc, alt, id }) => {
  return (
    <a href={link} id={id} target="_blank" rel="noopener noreferrer">
      <Image src={iconSrc} alt={alt} width={32} height={32} />
    </a>
  );
};

export default SocialIcon;
