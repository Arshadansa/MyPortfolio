import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary border p-5 rounded-2xl w-full max-w-[360px] mx-auto"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[200px] border rounded-xl border-gray-400 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />

          {/* GitHub icon */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[22px] text-justify">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="relative z-0 py-10 sm:py-16">
      {/* HEADER */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[30px]"
      >
        These projects showcase my skills and experience through practical
        examples of my work. Each project includes a brief description, along
        with links to the code repositories and live demos. They highlight my
        ability to tackle complex problems, work with diverse technologies, and
        manage projects effectively.
      </motion.p>

      {/* PROJECT GRID */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "work");