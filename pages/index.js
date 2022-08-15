import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Link from "next/link";
import Skills from "../components/Skills";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barma</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-my_bg_image font-coder bg-auto bg-local h-full w-full text-white">
        <div className="bg-neutral-900 backdrop-brightness-50 bg-opacity-95 p-5 sm:p-10">
          <Hero />
          <Projects />
          <Skills />

          <h1 className="text-center bg-black p-2 rounded-xl text-slate-400">
            Portfolio Under Development
          </h1>
        </div>
      </div>
    </>
  );
}
