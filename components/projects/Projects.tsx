import ProjectDetails from "@/Data/ProjectDetails.json";
import ProjectBox from "@/components/projects/ProjectBox";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5 items-center md:grid md:grid-cols-2 md:place-items-center ">
      {ProjectDetails.map((d) => (
        <ProjectBox key={d.id} details={d} />
      ))}
    </div>
  );
}
