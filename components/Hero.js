import Image from "next/image";
import React from "react";
import heroImage from "../asserts/VB97Dec03.jpg";

function Hero() {
  return (
    <div className="flex text-white items-center justify-center h-screen">
      <div className="flex space-x-2 items-center px-10">
        <div>
          <h1 className="font-semibold text-slate-300 text-2xl mb-2">
            Hello, it's me
          </h1>
          <h1 className="font-bold text-7xl text-sky-500">Vishwanth Barma.</h1>
          <div className="my-3 pr-52">
            <p className="text-slate-400 text-xl">
              The portfolio shows a strong sense of content organization. Each
              section communicates specific points about their skills, and
              there’s a good flow in how they tell their own story.
            </p>
          </div>
          <div className="my-4 flex">
            <button className="font-semibold text-slate-300 bg-neutral-800 px-3 py-2 rounded-xl hover:shadow hover:text-white hover:bg-black active:bg-slate-800 cursor-pointer">
              Contact Me
            </button>
          </div>
        </div>
        <div className="border-2 rounded-full border-sky-500 shadow-xl shadow-neutral-700">
          {/* <img
            className="rounded-full w-96 shrink-0 shadow-xl border-2 border-sky-500 shadow-neutral-700"
            src="https://avatars.githubusercontent.com/u/72876374?v=4"
          ></img> */}
          <Image src={heroImage} className="rounded-full" alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
