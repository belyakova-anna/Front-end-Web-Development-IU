import React from 'react';

interface UserImageProps {
  src: string;
  alt: string;
}

const UserImage: React.FC<UserImageProps> = ({ src, alt }) => {
  return (
    <div className="image">
      <img src={src} alt={alt} />
    </div>
  );
};

export default UserImage;
