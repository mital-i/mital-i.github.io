interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="project-card animate-fade-in">
        <div className="project-content">
            <div className="project-header">
                <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source">GitHub</a>}
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" title="Live Demo">Demo</a>}
                </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
        </div>
    </div>
)

export default ProjectCard;
export type { Project };
