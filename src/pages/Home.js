import React, { useEffect, useState } from "react";
// import _ from "lodash";
import ProjectCard from "../components/ProjectCard";
import ShortcutMenu from "../components/ShortcutMenu";
import DropLink from "../components/DropLink";
import { getDropLinkData } from "../firebase";

function Home() {
  const [fetch, setFetch] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  // const [dropLinkDataRaw, setDropLinkDataRaw] = useState([]);
  const [dropLinkDataRawShow, setDropLinkDataRawShow] = useState([]);

  const fetchGetDropLinkData = async () => {
    try {
      const dataRaw = await getDropLinkData();
      // setDropLinkDataRaw(dataRaw);
      setDropLinkDataRawShow(dataRaw);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGetDropLinkData();
  }, [fetch]);

  const AllLinks = () => {
    return (
      <>
        {dropLinkDataRawShow.map((v, i) => (
          <div key={i}>
            <ProjectCard
              data={{
                img: v?.image,
                title: v?.title,
                description: v?.description,
                url: v?.url,
                tags: ["#html", "#css", "js"],
                // tags: v?.tags,
              }}
            />
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="min-h-screen	w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
      <AllLinks />
      <DropLink modalIsOpen={createPopup} setIsOpen={setCreatePopup} setFetch={setFetch} />
      <ShortcutMenu event={setCreatePopup} />
    </div>
  );
}

export default Home;
