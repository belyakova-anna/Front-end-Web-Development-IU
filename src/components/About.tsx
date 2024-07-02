import locationIcon from '../img/icons/location.png';

const About: React.FC = () => {
  return (
    <section className="introducing" id="about">
      <div className="image">
        <img src="https://i.postimg.cc/25YZmKhR/me.png" alt="Image" />
      </div>
      <div className="content">
        <h1>Anna Belyakova</h1>
        <div className="location">
          <img src={locationIcon} alt="Location" className="small-image" />
          <p className="text">Innopolis, Russia</p>
        </div>
        <ul>
          <li>Full-stack developer</li>
          <li>Competitive programmer</li>
        </ul>
        <button>Test my knowledge</button>
      </div>
    </section>
  );
}

export default About;
