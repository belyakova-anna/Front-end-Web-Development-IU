import React from 'react';
import UserImage from './UserImage';
import LocationInfo from './LocationInfo';
import UserInfo from './UserInfo';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/comic');
  };

  return (
    <section className="introducing" id="about">
      <UserImage src="https://i.postimg.cc/25YZmKhR/me.png" alt="Image" />
      <div className="content-wrapper">
        <UserInfo />
        <LocationInfo location="Innopolis, Russia" />
        <button onClick={handleButtonClick}>Test my knowledge</button>
      </div>
    </section>
  );
};

export default About;
