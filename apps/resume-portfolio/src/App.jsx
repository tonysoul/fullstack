import { useState } from "react";
import { hamburger } from "./assets/icons";
import { photo } from "./assets/images";
import { navLinks } from "./constants";

const App = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleClick = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleMenuClick = () => {
    console.log(123);
    setIsShowMenu(false);
  };

  return (
    <main>
      {/* Nav */}
      <header className="relative bg-white shadow">
        <div className="max-container flex justify-between">
          <h1 className="text-xl font-bold">
            <a className="hover:text-blue-500" href="/">
              Tony Soul
            </a>
          </h1>
          <nav className="hidden md:flex md:gap-10">
            {navLinks.map((link) => (
              <a className="hover:text-blue-500" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <img
            onClick={handleClick}
            className="hidden max-md:block"
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
        <div
          id="menu"
          className={`absolute top-[60px] left-0 ${isShowMenu ? "" : "hidden"} w-full border-t border-gray-300 bg-white shadow`}
        >
          <nav className="flex flex-col items-center justify-center gap-2 text-center">
            {navLinks.map((link) => (
              <a
                onClick={handleMenuClick}
                className="w-full py-6 hover:text-blue-500"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 text-center">
        <div className="max-container">
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src={photo}
            alt="Profile"
          />
          <h2 className="mt-4 text-2xl font-bold">Tony Soul</h2>
          <h3 className="mt-2 text-lg">FullStak Developer</h3>
          <p className="mx-auto mt-4 max-w-xl leading-[1.5] text-balance text-gray-600">
            I am a FullStak developer with experience in building modem web
            applications. enjoy working with JavaScript, React, and Tailwind CSS
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50">
        <div className="max-container border-t border-gray-300 py-20 text-center">
          <h2>Skills</h2>
          <ul className="mt-10 flex justify-around">
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                class="mx-auto h-10 w-10"
              />
              <p className="mt-4">HTML</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                class="mx-auto h-10 w-10"
              />
              <p className="mt-4">CSS</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                class="mx-auto h-10 w-10"
              />

              <p className="mt-4">JavaScript</p>
            </li>
            <li>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                class="mx-auto h-10 w-10"
              />

              <p className="mt-4">React</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section  */}
      <section id="projects">
        <div className="max-container border-t border-gray-300 py-20">
          <h2 className="text-center">Projects</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-xl border border-gray-300 p-6">
              <h3 className="text-lg font-semibold">Todo App</h3>
              <p className="mt-2 min-h-[72px] text-slate-500">
                A simple todo list application for managing tasks.
              </p>

              <button className="mt-4 rounded-xl bg-blue-500 p-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600">
                View Project
              </button>
            </div>
            <div className="rounded-xl border border-gray-300 p-4">
              <h3 className="text-lg font-semibold">Weather Dashboard</h3>
              <p className="mt-2 min-h-[72px] text-slate-500">
                A weather dashboard that provides current weather intormation.
              </p>

              <button className="mt-4 rounded-xl bg-blue-500 p-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600">
                View Project
              </button>
            </div>
            <div className="rounded-xl border border-gray-300 p-4">
              <h3 className="text-lg font-semibold">Todo App</h3>
              <p className="mt-2 min-h-[72px] text-slate-500">
                A simple todo list application for managing tasks.
              </p>

              <button className="mt-4 rounded-xl bg-blue-500 p-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600">
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <div className="max-container border-t border-gray-300 py-20 text-center">
          <h2 className="text-center">Contact</h2>
          <p className="mt-10 mb-2 text-center text-slate-500">
            Feel free to reach out to me via email or follow me on social media.
          </p>
          <a
            href="mailto:tonysoul@foxmail.com"
            class="text-blue-500 hover:text-blue-600"
          >
            tonysoul@foxmail.com
          </a>
          <div className="mt-4 flex justify-center gap-2">
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                class="mx-auto h-10 w-10"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                class="mx-auto h-10 w-10"
              />
            </a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer id="footer">
        <div className="max-container border-t border-gray-300 py-20 text-center">
          <p>&copy; Tony Soul 2025 </p>
          <p className="mt-2 text-slate-500">
            Powered by{" "}
            <a
              target="_blank"
              className="text-blue-500 hover:text-blue-600"
              href="https://tailwindcss.com/"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default App;
