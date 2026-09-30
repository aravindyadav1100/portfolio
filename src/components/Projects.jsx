import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/aravindyadav1100/repos?sort=updated&per_page=4')
      .then((res) => {
        if (!res.ok) throw new Error('Unable to load GitHub repositories');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(() => setRepos([]));
  }, []);

  const featuredProjects = [
    {
      title: 'Social Media Web Application',
      status: 'In Progress',
      description: 'A responsive social media web application with user profiles, posts, notifications, likes, comments, registration, login, form validation, routing, and centralized state management.',
      tech: ['React.js', 'Redux Toolkit', 'JavaScript', 'HTML5', 'CSS3', 'React Router', 'Fetch API', 'JSON Server'],
      githubUrl: '', // Add your GitHub repository URL after you push the project.
      liveUrl: '', // Add your Vercel/live URL after deployment.
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-32 relative py-24 lg:py-32">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.4 }}
          className="w-full lg:w-1/3 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-accent font-mono text-xl">&gt;</span>
            <h3 className="text-2xl font-bold text-textBright">Recent GitHub Repositories</h3>
          </div>
          <div className="flex flex-col gap-4">
            {repos.length > 0 ? repos.map((repo) => (
              <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group p-4 bg-darkBg border border-textMuted/20 rounded-lg hover:border-accent/50 transition-all duration-300">
                <h4 className="text-textBright font-semibold group-hover:text-accent transition-colors">{repo.name}</h4>
                <p className="text-textMuted text-sm mt-2 line-clamp-2">{repo.description || 'GitHub repository'}</p>
                <div className="flex items-center gap-2 mt-4 text-xs font-mono text-textMuted">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  {repo.language || 'Mixed'}
                </div>
              </a>
            )) : (
              <p className="text-textMuted text-sm font-mono">Repositories will appear here from my GitHub profile.</p>
            )}
          </div>
          <a href="https://github.com/aravindyadav1100?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-textMuted hover:text-accent transition-colors mt-2 flex items-center gap-2">
            View all repositories <span className="text-accent">-&gt;</span>
          </a>
        </motion.div>

        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: false, amount: 0.4 }}>
            <h3 className="text-3xl sm:text-4xl font-bold text-textBright mb-8">Featured Projects</h3>
          </motion.div>
          <div className="grid grid-cols-1 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.4 }}
                className="bg-darkBg border border-textMuted/20 rounded-xl p-6 flex flex-col justify-between group hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl text-accent opacity-70">📁</span>
                    <span className="text-xs font-mono text-accent border border-accent/30 rounded-full px-3 py-1">{project.status}</span>
                  </div>
                  <h4 className="text-xl font-bold text-textBright group-hover:text-accent transition-colors mb-3">{project.title}</h4>
                  <p className="text-textMuted text-sm leading-relaxed mb-6">{project.description}</p>
                  <ul className="text-textMuted text-sm leading-relaxed mb-6 list-disc pl-5 space-y-2">
                    <li>Developed a responsive social media web application using React.js and Redux Toolkit for efficient state management.</li>
                    <li>Built user profiles, posts, notifications, likes, comments, registration, login, authentication flow, and form validation.</li>
                    <li>Used Redux Toolkit with createSlice and createAsyncThunk for application state and asynchronous operations.</li>
                    <li>Integrated React Router for navigation and JSON Server as a mock backend for development and testing.</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/40 text-accent font-mono text-sm hover:bg-accent/10 transition-colors"
                    >
                      <SiGithub /> GitHub
                    </a>
                  ) : (
                    <button
                      type="button"
                      title="GitHub link will be added after the project is pushed"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/40 text-accent font-mono text-sm opacity-70 cursor-default"
                    >
                      <SiGithub /> GitHub
                    </button>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/40 text-accent font-mono text-sm hover:bg-accent/10 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <button
                      type="button"
                      title="Live demo link will be added after deployment"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/40 text-accent font-mono text-sm opacity-70 cursor-default"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
