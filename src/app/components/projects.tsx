const projects = [
  {
    name: 'granqvist.dev',
    description:
      'Update of my personal website with a fresh new design and improved functionality',
    url: 'https://granqvist.dev',
    language: 'typescript',
  },
  {
    name: 'QuizApp',
    description: 'Quiz app with stripe integration for payments',
    url: 'https://iq-test-app-tau.vercel.app',
    language: 'typescript',
  },
  {
    name: 'SimpleStore',
    description: 'A simple store to sell a single product',
    url: 'https://simple-store-drab.vercel.app',
    language: 'typescript',
  },
  {
    name: 'SnapSpawn',
    description: "Image generation service using OpenAI's DALL·E API",
    url: 'https://www.snapspawn.com/',
    language: 'typescript',
  },
  {
    name: 'DropStore',
    url: 'https://github.com/isakgranqvist2021/DropStore',
    description:
      'Web shop for selling products without worrying about inventory or delivery',
    language: 'go',
  },
  {
    name: 'BehanceDesignUI',
    url: 'https://github.com/isakgranqvist2021/BehanceDesignUI',
    description: 'Implementation of Behance admin user interface design',
    language: 'typescript',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-light" tabIndex={4}>
      <div className="container">
        <h2>Recent Projects</h2>

        <div className="projects-grid" role="grid">
          {projects.map((project, index) => (
            <div className="grid-item" role="gridcell" key={index}>
              <img
                className="media"
                alt={project.name}
                src={`/svg/${project.language}.svg`}
              />

              <div className="grid-item-body">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a href={project.url} target="_blank">
                  {project.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
