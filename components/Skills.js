import React from "react";
import SkillsCard from "./SkillsCard";

function Skills() {
  let skillList = [
    "JavaScript",
    "HTML/CSS",
    "React.js",
    "Next.js",
    "Express",
    "Node.js",
    "React Native",
    "TypeScript",
    "C++",
    "Python",
    "SQL",
    "GNU/Linux",
    "PhotoShop",
    "AdobeXD",
    "VideoEditing",
  ];

  return (
    <div className="flex w-full flex-col mb-20">
      <h1 className="font-bold text-3xl mb-10 text-slate-200 bg-black px-4 py-3 rounded-xl w-full text-center">
        SKILLS
      </h1>
      <div className="flex flex-wrap">
        {skillList.map((item, index) => (
          <SkillsCard key={index} title={item} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
