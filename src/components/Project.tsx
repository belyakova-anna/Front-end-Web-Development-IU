import React from 'react';

interface ProjectProps {
  name: string;
  link: string;
  technologies: string[];
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Project: React.FC<ProjectProps> = ({ name, link, technologies, description, imageSrc, imageAlt }) => {
  return (
    <div className="project">
      <div className="project-content">
        <a href={link} target="_blank">{name}</a>
        <div className="technology-container">
          {technologies.map((tech, index) => (
            <div key={index} className="oval">{tech}</div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="image">
        <a href={link} target="_blank">
          <img src={imageSrc} alt={imageAlt} />
        </a>
      </div>
    </div>
  );
};

export default Project;
