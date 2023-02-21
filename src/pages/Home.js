import React from "react";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <div className="min-h-screen	w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div key={i}>
          <ProjectCard />
        </div>
      ))}
    </div>
  );
}

export default Home;
