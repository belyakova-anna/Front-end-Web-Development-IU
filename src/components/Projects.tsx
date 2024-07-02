import React from 'react';
import princeImage from '../img/projects/prince.jpg';
import civilDefenseImage from '../img/projects/civil-defense.jpg';
import geometryDashImage from '../img/projects/geometry-dash.jpg';

const Projects: React.FC = () => {
  return (
    <section className="portfolio" id="recentProjects">
      <h1>Projects</h1>
      <div className="project">
        <div className="project-content">
          <a href="https://drive.google.com/drive/folders/1ZN4RC6cGKiLcQP31hBGwIhmVU3WEqynS?usp=sharing" target="_blank" id="frena-link">Frena</a>
          <div className="technology-container">
            <div className="oval">Unity</div>
            <div className="oval">C#</div>
          </div>
          <p>An educational game for middle and high school students based on the book The Little Prince. Designed to teach children physics through a series of quests.</p>
        </div>
        <div className="image">
          <a href="https://drive.google.com/drive/folders/1ZN4RC6cGKiLcQP31hBGwIhmVU3WEqynS?usp=sharing" target="_blank" id="frena-img-link">
            <img src={princeImage} alt="Image" />
          </a>
        </div>
      </div>
      <div className="project">
        <div className="project-content">
          <a href="https://github.com/belyakova-anna/python_game" target="_blank" id="defense-link">Civil defense</a>
          <div className="technology-container">
            <div className="oval">Python</div>
            <div className="oval">SQLite</div>
          </div>
          <p>A roguelike game where the player finds chests with weapons and potions and kills monsters. The player must find a portal to move to the next map. During the game, he collects coins, which he can then use to buy a new skin.</p>
        </div>
        <div className="image">
          <a href="https://github.com/belyakova-anna/python_game" target="_blank" id="defense-img-link">
            <img src={civilDefenseImage} alt="Image" />
          </a>
        </div>
      </div>
      <div className="project" style={{ paddingBottom: '0' }}>
        <div className="project-content">
          <a href="https://github.com/belyakova-anna/javascript_game" target="_blank" id="dash-link">Geometry dash</a>
          <div className="technology-container">
            <div className="oval">JS</div>
          </div>
          <p>This is a copy of the popular game Geometry Dash. The character must avoid obstacles in the form of spikes. He moves on a flat surface, can jump and walk on blocks.</p>
        </div>
        <div className="image">
          <a href="https://github.com/belyakova-anna/javascript_game" target="_blank" id="dash-img-link">
            <img src={geometryDashImage} alt="Image" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
