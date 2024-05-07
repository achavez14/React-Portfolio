const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <p>
        You can download my resume as a PDF:
        <a href="your-resume.pdf" download>
          Download Resume
        </a>
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
};

export default Resume;