import { X, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="terminal-card relative max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-up">
        <div className="terminal-card-header">
          <div className="terminal-dot bg-destructive/80" />
          <div className="terminal-dot bg-primary/60" />
          <div className="terminal-dot bg-green-500/60" />
          <span className="text-xs font-mono text-muted-foreground ml-2">{project.title.toLowerCase().replace(/\s/g, '-')}.preview</span>
          <button
            onClick={onClose}
            className="ml-auto p-1 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <X size={16} />
          </button>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-primary mb-3 font-mono">
            {project.title}
          </h3>

          <p className="text-foreground/80 text-sm leading-relaxed mb-6">
            {project.fullDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded text-xs font-mono font-medium bg-secondary text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity font-mono"
            >
              <ExternalLink size={14} /> view_demo()
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-foreground font-bold text-sm border border-border hover:border-primary/40 transition-colors font-mono"
            >
              <Github size={14} /> source_code()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
