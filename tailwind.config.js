const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        sky: colors.lightBlue, // Atualizando 'lightBlue' para 'sky'
        stone: colors.warmGray, // Atualizando 'warmGray' para 'stone'
        neutral: colors.trueGray, // Atualizando 'trueGray' para 'neutral'
        gray: colors.coolGray, // Atualizando 'coolGray' para 'gray'
        slate: colors.blueGray, // Atualizando 'blueGray' para 'slate'
        // Adicione outras cores conforme necessário
      },
    },
  },
  plugins: [],
};
