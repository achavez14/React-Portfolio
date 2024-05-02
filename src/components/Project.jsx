const Project = ({ title, imageSrc, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div>
        <a href="https://chall20-react-portfolio.netlify.app" target="_blank" rel="noopener noreferrer">
          View App
        </a>
        <a href="https://github.com/achavez14/React-Portfolio.git" target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
