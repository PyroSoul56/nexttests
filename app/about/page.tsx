"use client";

import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about flex flex-col">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="flex flex-col lg:flex-row w-full"
      >
        <div className="w-full lg:w-1/2 p-4">
          <Experience />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <Skills />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
