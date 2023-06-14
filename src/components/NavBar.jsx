import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed sticky z-10 w-full bg-primary-600">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/">
            <div className="text-2xl font-semibold text-black">Delta V2</div>
          </NavLink>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/proposal"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white"
              >
                Proposal
              </NavLink>
              <NavLink
                to="/planning"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white"
              >
                Planning/Control
              </NavLink>
              <NavLink
                to="/research"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white"
              >
                Research/Upskilling
              </NavLink>
              <NavLink
                to="/teamwork"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white"
              >
                Teamwork/Communcations
              </NavLink>
              <NavLink
                to="/dev"
                className="rounded-md px-3 py-2 text-sm font-medium text-black hover:text-white"
              >
                Dev Activites/QA
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md bg-cyan-200 p-2 text-black hover:bg-cyan-500 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-black"
          >
            Proposal
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-black"
          >
            Planning/Control
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-black"
          >
            Researching/Upskilling
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-black"
          >
            Teamwork/Communication
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-black"
          >
            Dev Activities/QaA
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
