import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${styles.paddingX} w-full flex items-center  py-5 fixed top-0 z-20 bg-black`}
    >
      <div className="w-full flex justify-between  items-center   max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex  items-center  gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className=" text-white  text-[18px] flex gap-2 font-bold cursor-pointer">
            {" "}
            Arshad Ansari
            <span className=" sm:block hidden">| Mern Stack</span>
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => {
                setActive(link.title);
              }}
              className={`${
                active === link.title ? " text-white" : " text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          <a
            href="/resume.pdf"
            download
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
        </ul>

        <div className=" sm:hidden flex flex-1  justify-end  items-center">
          <img
            src={toggle ? close : menu}
            onClick={() => setToggle(!toggle)}
            alt="menu"
            className=" w-[28px] h-[28px] object-contain cursor-pointer"
          />
          <div
            className={` ${
              !toggle ? "hidden" : "flex"
            } p-6  black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none sm:hidden flex-row gap-10 items-center">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                  }}
                  className={`${
                    active === link.title ? " text-white" : " text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              <a
                href="/resume.pdf"
                download
                className="md:bg-white text-secondary hover:cursor-pointer md:text-black md:px-4 md:py-2 rounded-lg font-semibold md:hover:bg-gray-200 transition"
              >
                Download Resume
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
