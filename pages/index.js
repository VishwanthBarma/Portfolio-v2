import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-full w-full text-white  p-5 sm:p-10">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl text-slate-200">PORTFOLIO</h1>
        <div className="flex space-x-4 items-center">
          <Link href="http://github.com/VishwanthBarma">
            <AiFillGithub
              size={30}
              className="text-slate-200 hover:bg-neutral-800 hover:p-1 hover:rounded-xl"
            />
          </Link>
          <Link href="https://leetcode.com/barmavishwanth/">
            <SiLeetcode
              size={30}
              className="text-slate-200 hover:bg-neutral-800 hover:p-1 hover:rounded-xl"
            />
          </Link>
          <button className="bg-neutral-800 p-2 rounded-xl hover:bg-black font-semibold">
            <a
              href="https://drive.google.com/uc?export=download&id=1lxiVfA6auHuvy0919Vb5eOa50nPFfpVy"
              download
            >
              Resume
            </a>
          </button>
        </div>
      </div>
      <Hero />
      <Projects />
      <Skills />

      <h1 className="text-center bg-black p-2 rounded-xl text-slate-400">
        Portfolio Under Development
      </h1>
    </div>
  );
}
