import React from "react";
import UserImage from "../components/UserImage";
import LocationInfo from "../components/LocationInfo";
import UserInfo from "../components/UserInfo";

const About: React.FC = () => {
  return (
    <section className="introducing" id="about">
      <UserImage src="https://i.postimg.cc/25YZmKhR/me.png" alt="Image" />
      <div className="content-wrapper">
        <UserInfo />
        <LocationInfo location="Innopolis, Russia" />
      </div>
    </section>
  );
};

export default About;
