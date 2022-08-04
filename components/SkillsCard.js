import React from "react";

function SkillsCard({ title }) {
  return (
    <div className="flex bg-neutral-800 px-3 py-2 md:px-4 md:py-3 rounded-xl m-2 bg-opacity-70">
      <h1 className="lg:text-xl md:text-lg">{title}</h1>
    </div>
  );
}

export default SkillsCard;
