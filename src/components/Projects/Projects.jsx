import projects from "../../assests/projects";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-10 mb-20">
      <h1 className="text-center text-3xl lg:text-6xl text-red-900 font-extrabold">
        Projects
      </h1>
      <div className="mt-10 max-w-7xl mx-4 lg:mx-auto flex flex-col items-center lg:flex-row lg:justify-center lg:flex-wrap gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
}
