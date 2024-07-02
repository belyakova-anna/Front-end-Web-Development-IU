import locationIcon from '../img/icons/location.png';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/comic');
  };

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
        <button onClick={handleButtonClick}>Test my knowledge</button>
      </div>
    </section>
  );
}

export default About;
