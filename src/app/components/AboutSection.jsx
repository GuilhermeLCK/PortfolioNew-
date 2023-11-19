"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>FireBase</li>
        <li>C#</li>
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack - OneBitCode</li>
        <li>Fabrica de Aplicativos - Sujeito Progamador </li>
        <li>Análise e Desenvolvimento de Sistemas - Universidade Estácio</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Progamação para Internet</li>
        <li>JavaScript Avançado</li>
        <li>Dominando React</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Me2.jpg" width={450} height={450} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Sou um desenvolvedor web em busca do full stack, apaixonado por
            criar aplicações web interativas e responsivas. Possuo experiência
            trabalhando com JavaScript, React, Firebase, HTML, CSS e Git, e
            estou estudando e aprimorando minhas habilidades em C#, .NET e SQL.
            Tenho facilidade de aprendizado e estou constantemente buscando
            expandir meus conhecimentos e competências. Sou colaborativo e
            entusiasmado em trabalhar com outras pessoas na criação de
            aplicativos incríveis.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Educação
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificações
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
