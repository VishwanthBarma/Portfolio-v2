import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import heroImage from "../asserts/VB97Dec03.jpg";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import ReactModal from "react-modal";
import ContactMeModal from "./ContactMeModal";

function Hero() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="">
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
                href="https://drive.google.com/uc?export=download&id=1A7JUcK7-BJv6B_SlntL1wns7JVI-OZtc"
                download
              >
                Resume
              </a>
            </button>
          </div>
        </div>
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
            <div className="flex flex-col items-center justify-center my-10">
              <h1 className="font-semibold text-slate-300 text-2xl mb-2">
                Hello, it&apos;s me
              </h1>
              <h1 className="font-bold text-4xl text-center md:text-5xl lg:text-6xl xl:text-7xl text-sky-500">
                Vishwanth Barma.
              </h1>
              <div className="my-3 lg:mx-16 xl:mx-28 md:mx-10">
                <p className="text-slate-400 text-center lg:text-xl md:text-lg lg:p-0 px-10">
                  An enthusiastic coder for great software development.
                  Currently working with my own web development projects
                  including blockchain applications. As a fresher having no
                  experience in programming jobs, trying to get an intership in
                  field of Web Development...
                </p>
              </div>
              <div className="my-4 flex">
                <button
                  onClick={() => setOpenModal(true)}
                  className="font-semibold text-slate-300 bg-neutral-800 px-3 py-2 rounded-xl hover:shadow hover:text-white hover:bg-black active:bg-slate-800 cursor-pointer"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="border-2 hidden lg:inline rounded-full border-sky-500 shadow-xl shadow-neutral-700">
              <Image src={heroImage} className="rounded-full" alt="Profile" />
            </div>
          </div>
        </div>

        <ReactModal
          isOpen={openModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              padding: 0,
              border: "none",
              backgroundColor: "",
              transform: "translate(-50%, -50%)",
            },
            overlay: {
              backgroundColor: "#334250a7",
            },
          }}
        >
          <ContactMeModal turnModal={setOpenModal} />
        </ReactModal>
      </div>
    </>
  );
}

export default Hero;
