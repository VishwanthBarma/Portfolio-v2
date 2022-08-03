import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-full w-full p-10 px-80 text-white">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl text-slate-200">PORTFOLIO</h1>
        <Link href="http://github.com/VishwanthBarma">
          <AiFillGithub
            size={40}
            className="text-slate-200 hover:bg-neutral-800 hover:p-1 hover:rounded-xl"
          />
        </Link>
      </div>
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
