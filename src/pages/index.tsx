import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { Hero } from "../components/Hero";
import { OnboardFlowCards } from "@/components/OnboardFlowCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Hero />
      <OnboardFlowCards />
    </main>
  );
}
