import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    imgUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
    projectTitle: "MyGameLib",
    projectDescription: "Tack your gaming experience.",
    liveUrl:
      "https://calm-sea-0bce09310-27.centralus.4.azurestaticapps.net/home",
    sourceUrl: "https://github.com/an3dree/MyGameLib",
    technologies: ["React", "Azure", "Firebase", "TypeScript"],
  },
  {
    id: 2,
    imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    projectTitle: "AssistantLearnUp",
    projectDescription:
      "Mobile app for learning about virtual assistants and their capabilities.",
    sourceUrl: "https://github.com/usuario/task-management-app",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    projectTitle: "Basis Ocean",
    projectDescription:
      "Online database for researchs input collaborative ocean data.",
    sourceUrl: "https://github.com/an3dree/basis-ocean-mean-stack",
    technologies: ["Angular", "NodeJs", "MongoDB", "Express"],
  },
  {
    id: 4,
    imgUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
    projectTitle: "Labogeo Site",
    projectDescription: "Instituitional page for a research laboratory.",
    liveUrl: "https://soft-sherbet-081ab7.netlify.app/",
    sourceUrl: "https://github.com/an3dree/labogeo-app",
    technologies: ["Angular", "NodeJs", "MongoDB", "Netlify"],
  },
  {
    id: 5,
    imgUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
    projectTitle: "Next Tech",
    projectDescription: "Landing page for a tech company.",
    liveUrl: "https://soft-sherbet-081ab7.netlify.app/",
    sourceUrl: "https://github.com/an3dree/labogeo-app",
    technologies: ["Angular", "NodeJs", "MongoDB", "Netlify"],
  },
];

const ProjectsPage = () => {
  const styles = {
    container: {
      padding: "40px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      minHeight: "calc(100vh - 80px)",
      fontFamily: '"Fira Code", monospace',
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "var(--primary-color)",
      textAlign: "center" as const,
      marginBottom: "8px",
      fontFamily: '"Fira Code", monospace',
    },
    subtitle: {
      fontSize: "1.125rem",
      color: "var(--text-medium)",
      textAlign: "center" as const,
      marginBottom: "48px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: '"Fira Code", monospace',
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      gap: "24px",
      alignItems: "stretch",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meus Projetos</h1>
      <p style={styles.subtitle}>
        Confira alguns dos projetos que desenvolvi utilizando tecnologias
        modernas e melhores práticas de desenvolvimento.
      </p>

      <div style={styles.grid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.imgUrl}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
