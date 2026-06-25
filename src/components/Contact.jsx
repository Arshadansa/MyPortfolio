import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.dataset.field]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      alert("Name is required");
      return false;
    }

    if (!form.email.trim()) {
      alert("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Enter a valid email");
      return false;
    }

    if (!form.message.trim()) {
      alert("Message cannot be empty");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_duptvph",
        "template_k8q7ny6",
        formRef.current,
        "6joS323jNy175Xcvs"
      )
      .then((result) => {
        console.log(result);

        setLoading(false);

        alert("Thank you! Your message has been sent.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);

        setLoading(false);

        alert(error.text || "Failed to send email.");
      });
  };

  return (
    <>
      <div>
        <div className="mt-10 flex flex-row flex-wrap gap-4 text-secondary">
          <p className="text-white font-medium text-lg">
            Connect with me
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/arshad4475/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <span className="text-blue-400 text-xl">in</span>
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/Arshadansa"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <span className="text-xl">🐙</span>
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:arshadans10@gmail.com"
            className="flex items-center gap-3 hover:text-white transition"
          >
            <span className="text-red-400 text-xl">✉️</span>
            Email
          </motion.a>
        </div>
      </div>

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>

          <h3 className={styles.heroHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Name
              </span>

              <input
                type="text"
                name="from_name"
                data-field="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Email
              </span>

              <input
                type="email"
                name="from_email"
                data-field="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Your Message
              </span>

              <textarea
                rows="7"
                name="message"
                data-field="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              />
            </label>

            <input
              type="hidden"
              name="to_name"
              value="Arshad Ansari"
            />

            <input
              type="hidden"
              name="to_email"
              value="arshadans10@gmail.com"
            />

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");