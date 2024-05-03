export default function Portfolio() {
  // Sample project data (replace with your actual projects)
  const projects = [
    {
      title: 'Project 1',
      description: 'Our purpose in creating this game was to challenge cognitive abilities, strengthen memory and improve critical thinking. Mind games can be used for mental stimulation, social interaction and even relaxation, and at the start of the project, we were looking to create a game that was both fun and informative. Ultimately, the motivation behind a mind game is to engage the mind in a fun and stimulating way.',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://enkw.github.io/business-review-game/',
      githubLink: 'https://github.com/enkw/business-review-game.git',
    },
    {
      title: 'Project 2',
      description: 'The Rhythm Nation application is a platform where music lovers from around the world can explore a vast collection of royalty-free music for their projects. Users can effortlessly peruse through various music genres, sample tracks (listen to previews), and download high-quality music for their content creation needs. Additionally, musicians are also empowered to showcase their own original royalty-free compositions, fostering a vibrant community of music enthusiasts and creators.',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://rf-sound-archive-1.onrender.com/',
      githubLink: 'https://github.com/enkw/RF-Sound-Archive.git',
    },
    {
      title: 'Module 9 Challenge Professional README Generator',
      description: 'My purpose in creating this code was to provide an easy and fast approach to creating a README file via command-line application. This lets the person who started the initiative spend more time working on it.',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/achavez14/Professional-README-Generator.git',
    },
    {
      title: 'Module 10 Challenge SVG Logo Maker',
      description: 'My purpose in creating this application was to prompt the user to generate a logo by adding text and selecting color and shape to automatically generate and store the resultant SVG file via the Node.js command line.',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project4',
      githubLink: 'https://github.com/achavez14/SVG-Logo-Maker.git',
    },
    {
      title: 'Module 11 Challenge Note Taker',
      description: 'This note taker application allows users to take and store notes. The program saves and retrieves note data from a JSON file using and Express.js back end.',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://note-taker-kh41.onrender.com',
      githubLink: 'https://github.com/achavez14/Note-Taker.git',
    },
    {
      title: 'Module 13 Challenge E-commerce Back End',
      description: 'This back end application was built for an e-commerce website. It was developed using Node.js, Express.js, Sequelize ORM, and MySQL database.',
      imageSrc: 'path/to/project1-image.jpg',
      deployedLink: 'https://example.com/project6',
      githubLink: 'https://github.com/achavez14/E-commerce-Back-End.git',
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