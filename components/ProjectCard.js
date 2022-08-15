import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectCard({ desc, title, photo, link, tag }) {
  return (
    <div className="md:flex w-full bg-neutral-800 rounded-3xl p-2 m-4 hover:scale-105 transition ease-in-out">
      <div className="md:h-60 md:w-60 relative">
        <Image
          src={photo}
          className="rounded-3xl"
          alt="Projects"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full mx-3 lg:mx-10">
        <div className="flex space-x-5 items-center">
          <h1 className="xl:text-3xl text-2xl font-bold my-3 text-orange-400">
            {title}
          </h1>
          <h1 className="xl:text-2xl lg:text-xl text-lg font-bold text-gray-500">
            {tag}
          </h1>
        </div>
        <h1 className="xl:text-lg text-gray-400 xl:pr-20 pr-8">{desc}</h1>
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
