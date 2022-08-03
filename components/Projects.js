import React from "react";
import ProjectCard from "./ProjectCard";
import heroImage from "../asserts/Vb97Dec03.jpg";
import image1 from "../asserts/1.png";
import image2 from "../asserts/2.png";

function Projects() {
  return (
    <div className="flex items-center justify-center w-full flex-col mb-20">
      <h1 className="font-bold text-3xl mb-10 text-slate-200 bg-black px-4 py-3 rounded-xl w-full text-center">
        PROJECTS
      </h1>
      <ProjectCard
        desc="It's an Visual Studio Code color theme extension built using javascript and microsoft color theme docs,
         a good theme specially for mid night web developers,
          It will make your life cool with colourfull dark cool theme."
        title="Dark Cool"
        link="https://github.com/VishwanthBarma/Dark-Cool"
        photo={image1}
      />
      <ProjectCard
        desc="Twitter like social media app developed using next.js with some of the major features of twitter,
        you can follow and unfollow your friends, can save, like and comment to your friends image posts. This is a very special project from me at the initial stages of
        learing web developemnt using javascipt."
        title="The Post"
        link="https://github.com/VishwanthBarma/THE-POST"
        photo={image2}
      />
    </div>
  );
}

export default Projects;
