import React from 'react';

interface SocialIconProps {
  link: string;
  iconSrc: string;
  alt: string;
  id: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ link, iconSrc, alt, id }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" id={id}>
      <img src={iconSrc} alt={alt} />
    </a>
  );
};

export default SocialIcon;
