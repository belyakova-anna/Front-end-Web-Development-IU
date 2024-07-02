import React from 'react';
import locationIcon from '../img/icons/location.png';

const LocationInfo: React.FC<{ location: string }> = ({ location }) => {
  return (
    <div className="location">
      <img src={locationIcon} alt="Location" className="small-image" />
      <p className="text">{location}</p>
    </div>
  );
};

export default LocationInfo;
