import React from 'react';
import Project from '../components/Project';
import princeImage from '/public/img/projects/prince.jpg';
import civilDefenseImage from '/public/img/projects/civil-defense.jpg';
import geometryDashImage from '/public/img/projects/geometry-dash.jpg';
import Head from 'next/head';

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="The best projects" />
      </Head>
      <section className="portfolio" id="recentProjects">
        <h1>Projects</h1>
        <Project
          name="Frena"
          link="https://drive.google.com/drive/folders/1ZN4RC6cGKiLcQP31hBGwIhmVU3WEqynS?usp=sharing"
          technologies={['Unity', 'C#']}
          description="An educational game for middle and high school students based on the book The Little Prince. Designed to teach children physics through a series of quests."
          imageSrc={princeImage}
          imageAlt="Image"
        />
        <Project
          name="Civil defense"
          link="https://github.com/belyakova-anna/python_game"
          technologies={['Python', 'SQLite']}
          description="A roguelike game where the player finds chests with weapons and potions and kills monsters. The player must find a portal to move to the next map. During the game, he collects coins, which he can then use to buy a new skin."
          imageSrc={civilDefenseImage}
          imageAlt="Image"
        />
        <Project
          name="Geometry dash"
          link="https://github.com/belyakova-anna/javascript_game"
          technologies={['JS']}
          description="This is a copy of the popular game Geometry Dash. The character must avoid obstacles in the form of spikes. He moves on a flat surface, can jump and walk on blocks."
          imageSrc={geometryDashImage}
          imageAlt="Image"
        />
      </section>
    </>
  );
};

export default Projects;
