import React from "react";

function SkillsCard({ title }) {
  return (
    <div className="flex bg-neutral-800 px-4 py-3 rounded-xl m-2 bg-opacity-70">
      <h1 className="text-xl">{title}</h1>
    </div>
  );
}

export default SkillsCard;
