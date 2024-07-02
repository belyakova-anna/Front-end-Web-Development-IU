import React from 'react';

const Photos: React.FC = () => {
  return (
    <section className="MyPhotos" id="photos">
      <div className="gallery">
        <h1>Photos</h1>
        <div className="row">
          <img src="https://i.postimg.cc/J00XvHJs/ispring.jpg" alt="Photo1" />
          <img src="https://i.postimg.cc/prSjHVYq/iu.webp" alt="Photo2" />
        </div>
        <div className="row">
          <img src="https://i.postimg.cc/WpYgrSLg/mipt.jpg" alt="Photo3" />
          <img src="https://i.postimg.cc/zXLWkW8M/vseros.jpg" alt="Photo4" />
        </div>
        <div className="row">
          <img src="https://i.postimg.cc/GmGyWCBx/pfo.webp" alt="Photo5" />
          <img src="https://i.postimg.cc/zX9h2Bff/yandex.jpg" alt="Photo6" />
        </div>
      </div>
    </section>
  );
}

export default Photos;
