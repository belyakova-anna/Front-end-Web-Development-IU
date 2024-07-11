import React from 'react';
import PhotoRow from '../components/PhotoRow';
import Head from 'next/head';

const Photos: React.FC = () => {
  const photosData = [
    { src: 'https://i.postimg.cc/J00XvHJs/ispring.jpg', alt: 'Photo1' },
    { src: 'https://i.postimg.cc/prSjHVYq/iu.webp', alt: 'Photo2' },
    { src: 'https://i.postimg.cc/WpYgrSLg/mipt.jpg', alt: 'Photo3' },
    { src: 'https://i.postimg.cc/zXLWkW8M/vseros.jpg', alt: 'Photo4' },
    { src: 'https://i.postimg.cc/GmGyWCBx/pfo.webp', alt: 'Photo5' },
    { src: 'https://i.postimg.cc/zX9h2Bff/yandex.jpg', alt: 'Photo6' },
  ];

  return (
    <>
      <Head>
        <title>Photos</title>
        <meta name="description" content="Photos from olympiads" />
      </Head>
      <section className="MyPhotos" id="photos">
        <div className="gallery">
          <h1>Photos</h1>
          <PhotoRow photos={[photosData[0], photosData[1]]} />
          <PhotoRow photos={[photosData[2], photosData[3]]} />
          <PhotoRow photos={[photosData[4], photosData[5]]} />
        </div>
      </section>
    </>
  );
};

export default Photos;
