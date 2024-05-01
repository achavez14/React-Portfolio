import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="your-resume.pdf" download>
        Download Resume
      </a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;