import React, { useState } from "react";
import _ from "lodash";
import ProjectCard from "../components/ProjectCard";
import ShortcutMenu from "../components/ShortcutMenu";
// import Swal from "sweetalert2";
// import { saveLink } from "../firebase";
import DropLink from "../components/DropLink";

function Home() {
  const [createPopup, setCreatePopup] = useState(true);

  // useEffect(() => {
  //   saveLink({
  //     image: "http://sweetalert2.github.io/images/sweetalert2-social.png",
  //     tags: "html,css,js",
  //     text: "A beautiful, responsive, customizable and accessib…AI-ARIA) replacement for JavaScript's popup boxes",
  //     title: "SweetAlert2",
  //   });
  //   if (createPopup) {
  //     Swal.fire({
  //       title: "Drop your link",
  //       input: "text",
  //       inputAutoTrim: true,
  //       inputPlaceholder: "https://www.link.com",
  //       inputAttributes: {
  //         autocapitalize: "off",
  //       },
  //       inputValidator: (value) => {
  //         if (!value) {
  //           return "You need to drop link!";
  //         }
  //         const httpRegex =
  //           // eslint-disable-next-line
  //           /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  //         if (!httpRegex.test(value)) {
  //           return "Invalid type URL!";
  //         }
  //       },
  //       showCancelButton: true,
  //       confirmButtonText: "Next",
  //       confirmButtonColor: "#3B82F6",
  //       showLoaderOnConfirm: true,
  //       preConfirm: (url) => {
  //         return fetch(`${process.env.REACT_APP_LINKPREVIEW_ENDPOINT}${url}`)
  //           .then((response) => {
  //             if (!response.ok) {
  //               throw new Error(response.statusText);
  //             }
  //             return response.json();
  //           })
  //           .catch((error) => {
  //             Swal.showValidationMessage(`Request failed: ${error}`);
  //           });
  //       },
  //       allowOutsideClick: () => !Swal.isLoading(),
  //     }).then((resultLink) => {
  //       if (resultLink.isConfirmed) {
  //         Swal.fire({
  //           title: `${resultLink?.value?.title ?? "-"}`,
  //           text: `${resultLink?.value?.description ?? "-"}`,
  //           imageUrl: `${
  //             resultLink?.value?.image ?? process.env.REACT_APP_NO_IMAGE
  //           }`,
  //           input: "text",
  //           inputPlaceholder: "Comma seperated tags e.g. work,dev",
  //           inputAutoTrim: true,
  //           inputAttributes: {
  //             autocapitalize: "off",
  //           },
  //           showCancelButton: true,
  //           confirmButtonText: "Save",
  //           confirmButtonColor: "#3B82F6",
  //         }).then((result) => {
  //           if (result.isConfirmed) {
  //             const data = {
  //               title: resultLink?.value?.title,
  //               text: resultLink?.value?.description,
  //               image: resultLink?.value?.image,
  //               tags: result?.value,
  //             };
  //             saveLink(data);
  //           }
  //         });
  //       }
  //     });
  //   }
  // }, [createPopup]);

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
      <DropLink modalIsOpen={createPopup} setIsOpen={setCreatePopup} />
      <ShortcutMenu event={setCreatePopup} />
    </div>
  );
}

export default Home;
