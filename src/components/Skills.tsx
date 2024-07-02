import React from 'react';
import javaImage from '../img/languages/java.png';
import pythonImage from '../img/languages/python.png';
import cSharpImage from '../img/languages/c-sharp.png';
import cPlusPlusImage from '../img/languages/c++.png';
import cImage from '../img/languages/c.png';
import golangImage from '../img/languages/golang.png';
import gitImage from '../img/languages/git.png';
import sqlImage from '../img/languages/sql.png';
import javascriptImage from '../img/languages/javascript.png';
import figmaImage from '../img/languages/figma.png';

const Skills: React.FC = () => {
  return (
    <section className="Skills" id="skills">
      <div className="skills-content">
        <h1>Skills & Experience</h1>
        <p>My main language is Java. I also know Python well (SQLite, Pygame, PyQt) and have written simple parsers (BeautifulSoup) and telegram bots (aiogram, telebot). I wrote a browser game in Javascript and a Unity game in C#. I know C++ because of my passion for sports programming. I also worked with swagger.</p>
      </div>
      <div className="skills-row">
        <img src={javaImage} alt="Java" />
        <img src={pythonImage} alt="Python" />
        <img src={cSharpImage} alt="C#" />
        <img src={cPlusPlusImage} alt="C++" />
        <img src={cImage} alt="C" />
      </div>
      <div className="skills-row">
        <img src={golangImage} alt="Golang" />
        <img src={gitImage} alt="Git" />
        <img src={sqlImage} alt="SQL" />
        <img src={javascriptImage} alt="JavaScript" />
        <img src={figmaImage} alt="Figma" />
      </div>
    </section>
  );
}

export default Skills;
