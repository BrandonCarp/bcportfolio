import Image from "next/image";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Projects />
    </div>
  );
}
