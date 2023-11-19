"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Academia Muay Thai Boran",
    description:
      "O projeto é uma landing page para uma academia de luta, projetada para apresentar suas diversas modalidades e oferecer aos clientes uma visão abrangente do trabalho oferecido. Com o objetivo de atrair novos clientes, esta página busca transmitir a qualidade e a variedade dos serviços disponíveis, incentivando o engajamento e o interesse na academia.",

    image: "/images/projects/BoranNote.png",
    tag: ["Todos", "Sites"],
    gitUrl: null,
    previewUrl: null,
  },
  {
    id: 2,
    title: "Izzy Way Tecnologia",
    description:
      "Uma landing page estratégica desenvolvida para uma empresa de tecnologia com foco em sistemas ERP. O objetivo é atrair clientes e gerar leads por meio de anúncios pagos. Essa página oferece uma introdução cativante e informativa sobre os serviços da empresa, direcionando os visitantes para a próxima etapa no funil de conversão, visando sua interação e possível conversão em clientes em potencial.",
    image: "/images/projects/IzzyNote.png",
    tag: ["Todos", "Sites"],
    gitUrl: null,
    previewUrl: "https://izzyway-lp.vercel.app",
  },
  {
    id: 3,
    title: "LeadTracker",
    description:
      "Meu sistema de gestão de leads e formulários. Desenvolvido para controlar informações de formulários criados por mim, permite editar perguntas e gerenciar interações com clientes. Ainda em evolução, focado em melhorias para uma experiência mais intuitiva e eficiente",
    image: "/images/projects/PainelNote.png",
    tag: ["Todos", "Sistemas"],
    gitUrl: null,
    previewUrl: "https://typeform-firebase-init.vercel.app",
  },
  {
    id: 4,
    title: "Formulário Dinâmico - LeadTracker",
    description:
      "Formulário com 10 perguntas-chave para entender o perfil dos potenciais clientes da empresa. Essas perguntas são editáveis através do painel do LeadTracker, onde consigo visualizar todas as respostas e os contatos realizados. O formulário está em constante aprimoramento para melhorar sua funcionalidade e usabilidade.",
    image: "/images/projects/FormNote.png",
    tag: ["Todos", "Sistemas"],
    gitUrl: null,
    previewUrl: "https://typeform-firebase-init.vercel.app/Form",
  },
  {
    id: 5,
    title: "Personal André ",
    description:
      "Um dos meus primeiros projetos foi a criação de uma landing page para um personal trainer, destacando seus serviços, consultoria e resultados. Em breve, uma versão atualizada estará disponível, buscando oferecer uma experiência ainda mais completa e impactante aos visitantes",
    image: "/images/projects/PersonalNote.png",
    tag: ["Todos", "Sites"],
    gitUrl: null,
    previewUrl: "https://personal-trainer-app-iota.vercel.app",
  },
  {
    id: 6,
    title: "Portfolio Pessoal",
    description:
      "Desenvolvi meu antigo portfólio como uma plataforma para divulgar meus projetos anteriores e aprimorar minhas habilidades enquanto aprendia. Com o tempo, fui melhorando e refinando meu trabalho, usando-o como um reflexo do meu progresso e aprendizado contínuo.",
    image: "/images/projects/PortfoNote.png",
    tag: ["Todos", "Sites"],
    gitUrl: null,
    previewUrl: "https://porfifolio-nextjs.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projetos Realizados
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Sites"
          isSelected={tag === "Sites"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Sistemas"
          isSelected={tag === "Sistemas"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12  ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              Id={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
