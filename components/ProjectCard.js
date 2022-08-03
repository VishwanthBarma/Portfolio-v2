import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ desc, title, photo, link }) {
  return (
    <div className="flex w-full bg-neutral-800 bg-opacity-50 rounded-3xl p-2 m-5 hover:scale-105 transition ease-in-out">
      <div className="h-80 w-80 relative">
        <Image
          src={photo}
          className="rounded-3xl"
          alt="Projects"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full m-10">
        <h1 className="text-3xl font-bold my-3 text-orange-400">{title}</h1>
        <h1 className="text-lg text-gray-400 pr-20">{desc}</h1>
        <Link href={link} passHref>
          <a target="_blank">
            <button className="my-5 bg-neutral-900 px-4 py-2 rounded-xl text-slate-200 font-semibold hover:bg-neutral-800 hover:text-white active:bg-black">
              Code Link
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
