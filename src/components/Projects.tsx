import { useState, useEffect } from 'react';
import { Code2, Github, ExternalLink, Star, GitBranch, Briefcase } from 'lucide-react';
import { projects, type Project } from '../data/projects';

// TODO: ¡Cambia esto por tu nombre de usuario real de GitHub!
const GITHUB_USERNAME: string = 'MigueleArt';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
  features?: string[];
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = project.description.length > 180 || (project.features && project.features.length > 0);

  return (
    <div className="group relative flex flex-col gap-6 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
      <div className="flex-1">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          {shouldTruncate && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-bold uppercase tracking-widest text-accent hover:bg-accent hover:text-black transition-all flex-shrink-0"
            >
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tag) => (
            <span 
              key={tag}
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <p className={`text-white/70 leading-relaxed transition-all ${!isExpanded ? 'line-clamp-3 md:line-clamp-none text-sm' : 'text-base mb-6'}`}>
          {project.description}
        </p>

        {isExpanded && project.features && (
          <ul className="grid grid-cols-1 gap-2 mb-8 mt-6 animate-in fade-in slide-in-from-top-2 duration-300">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className={`flex gap-4 ${isExpanded ? 'mt-2' : 'mt-6'}`}>
          {project.github !== '#' && (
            <a 
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!GITHUB_USERNAME || GITHUB_USERNAME === 'TU_USUARIO_DE_GITHUB') {
      setLoading(false);
      return;
    }

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener repositorios de GitHub", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="proyectos" className="py-12">
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-10">
          <Briefcase className="w-8 h-8 text-accent" />
          Proyectos Profesionales Destacados
        </h2>
        <p className="text-white/60 mb-8">
          Proyectos desarrollados en entornos laborales o de manera privada (puedes editar esta info en <code className="text-accent">src/data/projects.ts</code>).
        </p>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-10">
          <Code2 className="w-8 h-8 text-white/90" />
          Repositorios Recientes de GitHub
        </h2>

        {GITHUB_USERNAME === 'TU_USUARIO_DE_GITHUB' && (
          <div className="bg-accent/10 border border-accent/20 p-6 rounded-2xl text-center">
            <Github className="w-12 h-12 text-accent mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-bold text-white/90 mb-2">Conecta tu GitHub</h3>
            <p className="text-white/60 text-sm">
              Abre el archivo <code className="text-accent">src/components/Projects.tsx</code> y cambia la variable <code className="text-accent">GITHUB_USERNAME</code> por tu usuario real para que tus repositorios se muestren aquí automáticamente.
            </p>
          </div>
        )}

        {loading && GITHUB_USERNAME !== 'TU_USUARIO_DE_GITHUB' && (
          <div className="text-center text-white/60 py-8 animate-pulse">
            Cargando proyectos de GitHub...
          </div>
        )}

        {!loading && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map(repo => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group block bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors truncate pr-4">
                    {repo.name}
                  </h3>
                  <Github className="w-5 h-5 text-white/40 group-hover:text-white transition-colors flex-shrink-0" />
                </div>

                <p className="text-white/60 text-sm mb-6 line-clamp-2 h-10">
                  {repo.description || 'Sin descripción disponible.'}
                </p>

                <div className="flex items-center justify-between text-xs text-white/40">
                  <div className="flex gap-4">
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-accent"></span>
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3.5 h-3.5" />
                        {repo.forks_count}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
