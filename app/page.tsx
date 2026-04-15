import Image from "next/image";
import HeroSection from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <Projects />
    </div>
  );
}
