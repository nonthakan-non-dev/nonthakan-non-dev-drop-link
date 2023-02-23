import React, { useEffect, useState } from "react";
import _ from "lodash";
import ProjectCard from "../components/ProjectCard";
import ShortcutMenu from "../components/ShortcutMenu";
import Swal from "sweetalert2";

function Home() {
  const [createPopup, setCreatePopup] = useState(false);

  useEffect(() => {
    if (createPopup) {
      Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: (url) => {
          return fetch(
            `https://api.linkpreview.net/?key=79db54a9aa1d3b2b7c6479c589a610c3&q=${url}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result?.value?.title ?? "-"}`,
            text: `${result?.value?.description ?? "-"}`,
            imageUrl: `${
              result?.value?.image ??
              "https://firebasestorage.googleapis.com/v0/b/nonthakan-non-dev.appspot.com/o/asset%2Fcommon%2Fno-image.png?alt=media&token=97f025fe-10d5-4a52-8430-1b3ff38ef06c"
            }`,
          });
        }
      });
    }
  }, [createPopup]);

  const AllLinks = () => {
    return (
      <>
        {_.times(10).map((i) => (
          <div key={i}>
            <ProjectCard
              data={{
                img: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
                title: "Google",
                description: `Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.`,
                url: "https://www.google.com",
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
      <ShortcutMenu event={setCreatePopup} />
    </div>
  );
}

export default Home;
