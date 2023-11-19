"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span class="bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">
              Hello, I&apos;m Guilherme
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Front-End",
                1000,
                "Web Developer",
                1000,
                "Estudante",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Apaixonado por programação e sedento por novos desafios e projetos.
          </p>
          <div>
            <Link
              target="_blank"
              href="https://contate.me/guilhermedever"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-orange-300 to-orange-500 hover:bg-slate-200 text-white"
            >
              Contrate-me
            </Link>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1-HDXkhqozq_uUjmpP5FqS7po-9UZc3fs/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-orange-300 to-orange-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
