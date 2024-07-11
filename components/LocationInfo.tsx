import React from 'react';
import Image from 'next/image';
import locationIcon from '/public/img/icons/location.png';

const LocationInfo: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className="location">
      <Image
        src={locationIcon}
        alt="Location"
        width={24}
        height={24}
        className="small-image"
      />
      <p className="text">{location}</p>
    </div>
  );
};

export default LocationInfo;
