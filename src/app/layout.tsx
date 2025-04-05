import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Controle Financeiro",
  description: "Gerencie suas finanças pessoais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased bg-gray-50">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 container mx-auto p-4">
            {children}
          </main>
          {/* Opcional: Footer pode ser adicionado aqui */}
        </div>
      </body>
    </html>
  );
}