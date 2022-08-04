import Image from "next/image";
import React from "react";
import heroImage from "../asserts/VB97Dec03.jpg";

function Hero() {
  return (
    <div className="flex flex-col xl:px-32 lg:flex-row text-white items-center justify-center h-screen">
      <div>
        <div className="border-2 lg:hidden rounded-full border-sky-500 shadow-xl shadow-neutral-700">
          <div className="relative h-52 w-52 md:h-72 md:w-72">
            <Image
              src={heroImage}
              className="rounded-full"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-2 items-center lg:px-10">
        <div className="flex flex-col items-center my-10">
          <h1 className="font-semibold text-slate-300 text-2xl mb-2">
            Hello, it&apos;s me
          </h1>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-sky-500">
            Vishwanth Barma.
          </h1>
          <div className="my-3 lg:mx-16 xl:mx-28 md:mx-10">
            <p className="text-slate-400 text-center lg:text-xl md:text-lg lg:p-0 px-10">
              An enthusiastic coder for great software development. Currently
              working with my own web development projects including blockchain
              applications. As a fresher having no experience in programming
              jobs, trying to get an intership in field of Web Development...
            </p>
          </div>
          <div className="my-4 flex">
            <button className="font-semibold text-slate-300 bg-neutral-800 px-3 py-2 rounded-xl hover:shadow hover:text-white hover:bg-black active:bg-slate-800 cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
        <div className="border-2 hidden lg:inline rounded-full border-sky-500 shadow-xl shadow-neutral-700">
          <Image src={heroImage} className="rounded-full" alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
