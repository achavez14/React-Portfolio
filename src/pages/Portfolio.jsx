import React from 'react';
import Project from './Project'; // Import your Project component

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {/* Replace with your actual projects */}
      <Project
        title="Project 1"
        imageSrc="project1.jpg"
        deployedLink="https://example.com/project1"
        githubLink="https://github.com/achavez14/React-Portfolio.git"
      />
      {/* Add more projects */}
    </section>
  );
};

export default Portfolio;