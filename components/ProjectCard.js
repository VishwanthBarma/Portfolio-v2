import React from "react";

function ProjectCard({ desc, title, photo }) {
  return (
    <div className="flex w-full space-x-10 bg-neutral-800 rounded-3xl p-2 m-5">
      <div className="h-80 w-80">
        <img src={photo} className="rounded-3xl"></img>
      </div>
      <div className="my-10">
        <h1 className="text-3xl font-bold my-3 text-orange-400">{title}</h1>
        <h1 className="text-xl text-gray-400">{desc}</h1>
        <button className="my-5 bg-neutral-900 px-4 py-2 rounded-xl text-slate-400 font-semibold hover:text-white active:bg-black">
          Code Link
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
