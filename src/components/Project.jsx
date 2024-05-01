import React from 'react';

const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View App
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
