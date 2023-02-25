import { useState } from "react";

const ProjectCard = ({ data }) => {
  const { img, title, description, url, tags } = data;
  const [imageSrc, setImageSrc] = useState(img);

  const onError = () => {
    setImageSrc(process.env.REACT_APP_NO_IMAGE);
  };
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          className="w-full"
          src={imageSrc ?? process.env.REACT_APP_NO_IMAGE}
          onError={onError}
          alt={title ?? "-"}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 line-clamp-1">
            {title ?? "-"}
          </div>
          <p className="text-gray-700 text-base line-clamp-3">
            {description ?? "-"}
          </p>
        </div>
      </a>
      {tags?.length > 0 && (
        <div className="px-6 pt-4 pb-2">
          {tags.map((v, i) => (
            <span
              key={i}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {v ?? "-"}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
