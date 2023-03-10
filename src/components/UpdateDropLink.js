import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { updateLink } from "../firebase";

const UpdateDropLink = ({
  modalIsOpen,
  setIsOpen,
  setFetch,
  tagsAlls,
  data,
}) => {
  // eslint-disable-next-line
  const { img, title, description, url, tags, id } = data;
  const [tagsCursor, setTagsCursor] = useState({ start: null, end: null });
  const [tagsShow, setTagsShow] = useState([]);
  const [imageSrc, setImageSrc] = useState(img);

  const onError = () => {
    setImageSrc(process.env.REACT_APP_NO_IMAGE);
  };

  const clearForm = () => {
    setValue("url", "");
    setValue("tags", "");
  };
  const handleClose = () => {
    setIsOpen({});
    clearForm();
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const setForm = () => {
      setValue("url", url ?? "");
      setValue("tags", tags ?? "");
      setValue("title", title ?? "");
      setValue("description", description ?? "");
    };
    setForm();
    setImageSrc(img);
    // eslint-disable-next-line
  }, [id]);
  const onSubmit = async (data) => {
    try {
      handleClose();
      data["image"] = img;
      await updateLink(id, data);
    } catch (error) {
      console.error(error);
    }
    setFetch((i) => !i);
    clearForm();
  };
  const searchTags = (tag) => {
    try {
      if (!tag) return;
      const tem = _.filter(tagsAlls, function (i) {
        return i.toLowerCase().includes(tag.toLowerCase());
      });
      setTagsShow(tem);
    } catch (error) {}
  };

  const splitTags = (str, startIndex, endIndex) => {
    const before = str.substring(0, startIndex);
    const substring = str.substring(startIndex, endIndex);
    const after = str.substring(endIndex);
    const result = { before, substring, after };
    return result;
  };

  const selectTags = (tag) => {
    try {
      setTagsShow([]);
      const tagsRaw = watch("tags");
      const { before, after } = splitTags(
        tagsRaw,
        tagsCursor.start,
        tagsCursor.end
      );
      const tagsNew = before.concat([tag]).concat(after);
      setValue("tags", tagsNew);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyUp = (event) => {
    try {
      setTagsShow([]);
      const end = event.target.selectionStart;
      const tagsRaw = watch("tags");
      if (!tagsRaw) return;
      let pass = false;
      if (
        typeof tagsRaw[end] === "undefined" ||
        tagsRaw[end] === " " ||
        tagsRaw[end] === "#"
      ) {
        pass = true;
      }
      if (!pass) return;
      const tags = tagsRaw.slice(0, end);
      const start = tags.lastIndexOf("#");
      if (start < 0) return;
      const tag = tagsRaw.slice(start, end);
      if (tag.length <= 1) return;
      setTagsCursor({ start, end });
      searchTags(tag);
    } catch (error) {
      console.error(error);
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
        <div
          style={style}
          className="focus:outline-none focus:shadow-outline h-[80%] md:h-auto  w-[80%] md:max-w-[60%] lg:w-[30%]"
        >
          <form
            className="bg-white border-0 rounded-lg px-8 pt-6 pb-8 mb-4 w-full overflow-y-auto h-full"
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
              <img
                className="w-full rounded-lg"
                src={imageSrc ?? process.env.REACT_APP_NO_IMAGE}
                onError={onError}
                alt={title ?? "-"}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="url">
                Url
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="url"
                type="text"
                disabled
                readOnly
                placeholder="https://www.link.com"
                {...register("url", {
                  readOnly: true,
                })}
              />
              {errors.url && (
                <p className="text-red-500 text-xs italic mt-3">
                  {errors?.url?.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-xs italic mt-3">
                  {errors?.title?.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-xs italic mt-3">
                  {errors?.description?.message}
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
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline noSelect"
                  id="tags"
                  type="text"
                  placeholder="e.g. #work #dev"
                  autoComplete="off"
                  onKeyUp={handleKeyUp}
                  onClick={handleKeyUp}
                  {...register("tags")}
                />
                {tagsShow?.length > 0 && (
                  <div className="absolute min-h-fit max-h-[80px] overflow-y-auto bottom-[80px ] left-0 shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white">
                    {tagsShow?.map((v, i) => (
                      <div
                        className="mb-1 cursor-pointer noSelect"
                        key={i}
                        onClick={() => {
                          selectTags(v);
                        }}
                      >
                        <span className=" text-sm">{v}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {errors.tags && (
                <p className="text-red-500 text-xs italic mt-3">
                  {errors?.tags?.message}
                </p>
              )}
            </div>
            <div className="w-full mt-5 flex justify-between">
              <button
                className="w-[48%] bg-gray-200 hover:bg-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="w-[48%] bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
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

export default UpdateDropLink;
