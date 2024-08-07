import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/Navbar/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filmes",
  description: "Desenvolvido por Mateus Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NavBar/>
        {children}</body>
    </html>
  );
}
