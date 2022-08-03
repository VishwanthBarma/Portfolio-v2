import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h1 className="font-bold text-5xl mb-10 text-slate-200 bg-black px-4 py-3 rounded-xl w-full text-center">
        PROJECTS
      </h1>
      <ProjectCard
        desc="asgahfadjtjasg asfgas asfgasfg asgf asfg asfgs as gafsgas ga sfg a"
        photo="https://avatars.githubusercontent.com/u/72876374?v=4"
        title="Dark Cool"
        link=""
      />

      <ProjectCard
        desc="asgahfadjtjasg asfgas asfgasfg asgf asfg asfgs as gafsgas ga sfg a"
        photo="https://avatars.githubusercontent.com/u/72876374?v=4"
        title="Dark Cool"
        link=""
      />
    </div>
  );
}

export default Projects;
