"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    // Construir a URL do WhatsApp com os dados do formulário
    const whatsappLink = `https://wa.me/5585989728250?text=Oi%2C+vim+atrav%C3%A9s+do+seu+site%21%0AEmail%3A+${encodeURIComponent(
      data.email
    )}%0AAssunto%3A+${encodeURIComponent(
      data.subject
    )}%0AMensagem%3A+${encodeURIComponent(data.message)}`;

    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      window.open(whatsappLink, "_blank");
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Entre em contato</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou à disposição! Se precisar de alguma coisa ou quiser trocar
          ideias, estou aqui para ajudar o quanto antes.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/GuilhermeLCK">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/gui-lcs/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            E-mail enviado com sucesso
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Assunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Só dizendo Oi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Vamos falar sobre..."
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400  transition duration-700 ease-in-out text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
