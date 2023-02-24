import React from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
const DropLink = ({ modalIsOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="bg-none flex justify-center items-center">
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={style} className="focus:outline-none focus:shadow-outline">
          <form
            className="bg-white border-0 rounded-lg px-8 pt-6 pb-8 mb-4 w-full h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="h-[65px] ">
                <img
                  src={process.env.PUBLIC_URL + "/images/droplink-logo.png"}
                  alt=""
                  className="object-cover h-full w-auto"
                />
              </div>
              <h1 className="text-2xl lg:text-4xl ml-4 select-none">
                Drop Link
              </h1>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="url">
                Url
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                type="text"
                placeholder="https://www.link.com"
                {...register("url", {
                  required: "Please type your email.",
                  pattern: {
                    value:
                      // eslint-disable-next-line
                      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm,
                    message: "Invalid type url!",
                  },
                })}
              />
              {errors.url && (
                <p className="text-red-500 text-xs italic mt-3">
                  {errors?.url?.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="tags"
              >
                Tags
              </label>
              <div>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="tags"
                type="text"
                placeholder="e.g. work,dev"
                {...register("tags")}
              />
              </div>
              {errors.tags && (
                <p className="text-red-500 text-xs italic mt-3">
                  {errors?.tags?.message}
                </p>
              )}
            </div>
            <div className="w-full mt-5">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default DropLink;
