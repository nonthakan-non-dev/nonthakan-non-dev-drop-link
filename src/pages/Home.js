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
            `${process.env.REACT_APP_LINKPREVIEW_ENDPOINT}${url}`
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
              process.env.REACT_APP_NO_IMAGE
            }`,
            showCancelButton: true,
            confirmButtonText: "Save",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            }
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
