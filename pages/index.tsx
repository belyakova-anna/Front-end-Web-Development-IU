import React from 'react';
import UserImage from '../components/UserImage';
import LocationInfo from '../components/LocationInfo';
import UserInfo from '../components/UserInfo';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bio</title>
        <meta name="description" content="Personal info" />
      </Head>
      <section className="introducing" id="about">
        <UserImage src="https://i.postimg.cc/25YZmKhR/me.png" alt="Image" />
        <div className="info-wrapper">
          <UserInfo />
          <LocationInfo location="Innopolis, Russia" />
        </div>
      </section>
    </>
  );
};

export default About;
