import React from "react";
import ProjectCard from "../components/ProjectCard";
import _ from "lodash";

function Home() {
  return (
    <div className="min-h-screen	w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
      {_.times(100).map((i) => (
        <div key={i}>
          <ProjectCard
            data={{
              img: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
              title: "Google",
              description: `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.`,
              url: "https://www.google.com"
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
