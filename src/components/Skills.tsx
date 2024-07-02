import React from 'react';
import SkillsRow from './SkillsRow';
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
  const skillsRow1 = [
    { src: javaImage, alt: 'Java' },
    { src: pythonImage, alt: 'Python' },
    { src: cSharpImage, alt: 'C#' },
    { src: cPlusPlusImage, alt: 'C++' },
    { src: cImage, alt: 'C' },
  ];

  const skillsRow2 = [
    { src: golangImage, alt: 'Golang' },
    { src: gitImage, alt: 'Git' },
    { src: sqlImage, alt: 'SQL' },
    { src: javascriptImage, alt: 'JavaScript' },
    { src: figmaImage, alt: 'Figma' },
  ];

  return (
    <section className="Skills" id="skills">
      <div className="skills-content">
        <h1>Skills & Experience</h1>
        <p>My main language is Java. I also know Python well (SQLite, Pygame, PyQt) and have written simple parsers (BeautifulSoup) and telegram bots (aiogram, telebot). I wrote a browser game in Javascript and a Unity game in C#. I know C++ because of my passion for sports programming. I also worked with swagger.</p>
      </div>
      <SkillsRow images={skillsRow1} />
      <SkillsRow images={skillsRow2} />
    </section>
  );
};

export default Skills;
