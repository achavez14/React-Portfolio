export default function Portfolio() {
  // Sample project data (replace with your actual projects)
  const projects = [
    {
      title: 'Project 1',
      description: 'description of project',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'description of project',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 3',
      description: 'description of project',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 4',
      description: 'description of project',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 5',
      description: 'description of project',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 6',
      description: 'description of project',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1',
    },
    // Add more project objects as needed
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      {/* Render your project cards here */}
      {projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          imageSrc={project.imageSrc}
          deployedLink={project.deployedLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}