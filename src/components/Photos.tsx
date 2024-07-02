import React from 'react';
import ispring from '../img/photos/ispring.jpg';
import iu from '../img/photos/iu.jpg';
import mipt from '../img/photos/mipt.jfif';
import vseros from '../img/photos/vseros.jfif';
import pfo from '../img/photos/pfo.jpg';
import yandex from '../img/photos/yandex.jpg';

const Photos: React.FC = () => {
  return (
    <section className="MyPhotos" id="photos">
      <div className="gallery">
        <h1>Photos</h1>
        <div className="row">
          <img src={ispring} alt="Photo1" />
          <img src={iu} alt="Photo2" />
        </div>
        <div className="row">
          <img src={mipt} alt="Photo3" />
          <img src={vseros} alt="Photo4" />
        </div>
        <div className="row">
          <img src={pfo} alt="Photo5" />
          <img src={yandex} alt="Photo6" />
        </div>
      </div>
    </section>
  );
}

export default Photos;
