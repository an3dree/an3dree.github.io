import React from "react";

interface ProjectCardProps {
  imgUrl: string;
  projectTitle: string;
  projectDescription: string;
  liveUrl?: string;
  sourceUrl?: string;
  technologies?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  projectTitle,
  projectDescription,
  liveUrl,
  sourceUrl,
  technologies = [],
}) => {
  const styles = {
    card: {
      backgroundColor: "var(--card-background)",
      border: "1px solid var(--border-color)",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 6px var(--card-shadow)",
      transition: "all 0.3s ease",
      display: "flex",
      flexDirection: "column" as const,
      height: "100%",
      minHeight: "350px",
      fontFamily: '"Fira Code", monospace',
    },
    image: {
      width: "100%",
      height: "160px",
      borderRadius: "8px",
      objectFit: "cover" as const,
      marginBottom: "16px",
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column" as const,
      gap: "12px",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "600",
      color: "var(--text-light)",
      margin: 0,
      lineHeight: "1.4",
      fontFamily: '"Fira Code", monospace',
    },
    description: {
      fontSize: "0.875rem",
      color: "var(--text-medium)",
      lineHeight: "1.5",
      margin: 0,
      marginBottom: "12px",
    },
    tagsContainer: {
      display: "flex",
      flexWrap: "wrap" as const,
      gap: "6px",
      marginBottom: "16px",
    },
    tag: {
      fontSize: "0.75rem",
      padding: "4px 8px",
      borderRadius: "12px",
      fontWeight: "500",
      fontFamily: '"Fira Code", monospace',
      color: "#ffffff",
    },
    buttonsContainer: {
      display: "flex",
      gap: "12px",
      marginTop: "auto",
    },
    button: {
      flex: 1,
      padding: "10px 16px",
      borderRadius: "8px",
      border: "none",
      fontSize: "0.875rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      textAlign: "center" as const,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      fontFamily: '"Fira Code", monospace',
    },
    liveButton: {
      backgroundColor: "var(--secondary-color)",
      color: "white",
    },
    sourceButton: {
      backgroundColor: "transparent",
      color: "var(--text-light)",
      border: "1px solid var(--border-color)",
    },
  };

  const handleButtonHover = (
    e: React.MouseEvent<HTMLElement>,
    isLive: boolean,
  ) => {
    if (isLive) {
      e.currentTarget.style.backgroundColor = "#16a34a";
    } else {
      e.currentTarget.style.backgroundColor = "var(--card-background)";
      e.currentTarget.style.borderColor = "var(--primary-color)";
    }
  };

  const handleButtonLeave = (
    e: React.MouseEvent<HTMLElement>,
    isLive: boolean,
  ) => {
    if (isLive) {
      e.currentTarget.style.backgroundColor = "#22c55e";
    } else {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.borderColor = "var(--border-color)";
    }
  };

  const getTagColor = (technology: string) => {
    const tech = technology.toLowerCase();

    // Frontend frameworks/libraries
    if (
      tech.includes("react") ||
      tech.includes("vue") ||
      tech.includes("angular")
    ) {
      return "#61dafb"; // Blue
    }
    // Backend
    if (
      tech.includes("node") ||
      tech.includes("express") ||
      tech.includes("django") ||
      tech.includes(".net")
    ) {
      return "#68d391"; // Green
    }
    // Databases
    if (
      tech.includes("postgres") ||
      tech.includes("mongo") ||
      tech.includes("redis") ||
      tech.includes("sql") ||
      tech.includes("firebase")
    ) {
      return "#f6ad55"; // Orange
    }
    // Languages
    if (
      tech.includes("typescript") ||
      tech.includes("javascript") ||
      tech.includes("python") ||
      tech.includes("c#") ||
      tech.includes("java") ||
      tech.includes("dart") ||
      tech.includes("ruby")
    ) {
      return "#9f7aea"; // Purple
    }
    // DevOps/Tools
    if (
      tech.includes("docker") ||
      tech.includes("aws") ||
      tech.includes("vercel") ||
      tech.includes("github") ||
      tech.includes("netlify") ||
      tech.includes("azure")
    ) {
      return "#ed8936"; // Dark orange
    }
    // CSS/Styling
    if (
      tech.includes("tailwind") ||
      tech.includes("css") ||
      tech.includes("sass") ||
      tech.includes("less") ||
      tech.includes("bootstrap") ||
      tech.includes("material-ui")
    ) {
      return "#38b2ac"; // Teal
    }
    // Payment/Auth
    if (
      tech.includes("stripe") ||
      tech.includes("jwt") ||
      tech.includes("auth")
    ) {
      return "#667eea"; // Indigo
    }

    // Default color
    return "#718096"; // Gray
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.3)";
        e.currentTarget.style.borderColor = "var(--primary-color)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px var(--card-shadow)";
        e.currentTarget.style.borderColor = "var(--border-color)";
      }}
    >
      <img src={imgUrl} alt={projectTitle} style={styles.image} />

      <div style={styles.content}>
        <h3 style={styles.title}>{projectTitle}</h3>
        <p style={styles.description}>{projectDescription}</p>

        {technologies.length > 0 && (
          <div style={styles.tagsContainer}>
            {technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  ...styles.tag,
                  backgroundColor: getTagColor(tech),
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div style={styles.buttonsContainer}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.button, ...styles.liveButton }}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonLeave(e, true)}
            >
              Live
            </a>
          )}

          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.button, ...styles.sourceButton }}
              onMouseEnter={(e) => handleButtonHover(e, false)}
              onMouseLeave={(e) => handleButtonLeave(e, false)}
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
