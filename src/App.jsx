import "./index.css";

import { FaLinkedin, FaTwitter, FaGithub, FaPenSquare } from "react-icons/fa";

import Me from "./assests/me.png";

import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <div id="dipanshu_portfolio" className="h-screen font-prompt">
      {/* <nav className="py-4 bg-red-400 text-red-100 text-sm md:text-lg font-semibold">
        <ul className="flex justify-between mx-auto max-w-5xl">
          <li className="transition duration-200 delay-75 text-slate-300 hover:text-red-900">
            <a href="#hero">Home</a>
          </li>
          <li className="transition duration-200 delay-75 hover:text-red-900">
            <a href="#skills">Skills </a>
          </li>
          <li className="transition duration-200 delay-75 hover:text-red-900">
            <a href="#projects">Projects</a>
          </li>
          <li className="transition duration-200 delay-75 hover:text-red-900">
            <a href="#contact_me">Contact Me</a>
          </li>
        </ul>
      </nav> */}

      <main id="hero" className="text-center bg-red-100">
        <div className="pt-16 mb-8">
          <img
            className="transition duration-500 delay-100 mx-auto rounded-full w-[200px] shadow-2xl shadow-red-700 hover:scale-110"
            src={Me}
            alt="Dipanshu's Profile Picture"
          />
        </div>
        <h1 className="text-5xl lg:text-7xl pt-4 text-red-900 font-extrabold">
          Hey there!
        </h1>
        <h3 className="pt-10 text-red-500 text-3xl lg:text-5xl font-medium">
          I am a{" "}
          <span className="font-dancingSpirit transition duration-700 delay-100 hover:text-red-800">
            full-stack
          </span>{" "}
          developer
        </h3>
        <ul className="py-24 flex justify-center gap-20 text-red-600 text-3xl lg:text-5xl">
          <li className="transition duration-200 delay-75 hover:scale-150 hover:text-red-900">
            <a href="https://www.linkedin.com/in/dipanshu-torawane/">
              <FaLinkedin />
            </a>
          </li>
          <li className="transition duration-200 delay-75 hover:scale-150 hover:text-red-900">
            <a href="https://twitter.com/dipanshu_twts">
              <FaTwitter />
            </a>
          </li>
          <li className="transition duration-200 delay-75 hover:scale-150 hover:text-red-900">
            <a href="https://github.com/dipanshu18">
              <FaGithub />
            </a>
          </li>
          <li className="transition duration-200 delay-75 hover:scale-150 hover:text-red-900">
            <a href="https://dev.to/dipanshu_18">
              <FaPenSquare />
            </a>
          </li>
        </ul>
      </main>

      <Skills />

      <Projects />

      <Footer />
    </div>
  );
}
