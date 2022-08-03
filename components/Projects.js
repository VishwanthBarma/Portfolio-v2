import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "../asserts/1.png";
import image2 from "../asserts/2.png";
import image3 from "../asserts/3.png";
import image4 from "../asserts/4.png";
import image5 from "../asserts/5.png";

function Projects() {
  return (
    <div className="flex items-center justify-center w-full flex-col mb-20">
      <h1 className="font-bold text-3xl mb-10 text-slate-200 bg-black px-4 py-3 rounded-xl w-full text-center">
        PROJECTS
      </h1>
      <ProjectCard
        desc="It's an Visual Studio Code color theme extension built using javascript and microsoft color theme docs,
         a good theme specially for mid night web developers,
          It will make your life cool with colourfull dark cool theme."
        title="Dark Cool"
        link="https://github.com/VishwanthBarma/Dark-Cool"
        tag="React"
        photo={image1}
      />
      <ProjectCard
        desc="Twitter like social media app developed using next.js with some of the major features of twitter,
        you can follow and unfollow your friends, can save, like and comment to your friends image posts. This is a very special project from me at the initial stages of
        learing web developemnt using javascipt."
        title="The Post"
        link="https://github.com/VishwanthBarma/THE-POST"
        photo={image2}
        tag="Next.js"
      />
      <ProjectCard
        desc="One-to-One Chatting app with complete next authentication of google provider, it has capability to add users
        to chatting section and to start with those users.Actually it stores all the chat information in the firebase firestore and retrives
        chat messages according to the user."
        title="The Chat"
        link="https://github.com/VishwanthBarma/THE-CHAT"
        photo={image3}
        tag="Next.js"
      />
      <ProjectCard
        desc="Web3 Decentralized app built using next.js and solidity smart contracts, where it have features of posting tweets, liking tweets of other
        public users. One of the main feature is to mint your account profile picture for real which cost development gas the eth."
        title="Twitter Clone Dapp"
        link="https://github.com/VishwanthBarma/twitter-clone-dapp"
        photo={image4}
        tag="Web3"
      />
      <ProjectCard
        desc="Clone of Swiggy app build using React Native, which is an cross platform developemt feature through only one code base,
        app contains of restaurant's dishes's and different locations."
        title="Swiggy Clone"
        link="https://github.com/VishwanthBarma/swiggy-clone"
        photo={image5}
        tag="React Native"
      />
    </div>
  );
}

export default Projects;
