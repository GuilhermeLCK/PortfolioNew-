import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portifolio - Guilherme",
  description: "Portifolio - Guilherme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <link rel="shortcut icon" href="/favicon.ico.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
