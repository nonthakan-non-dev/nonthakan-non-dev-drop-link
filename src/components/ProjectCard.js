const ProjectCard = ({ data }) => {
  const { img, title, description, url } = data;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src={
            img ??
            process.env.REACT_APP_NO_IMAGE
          }
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 line-clamp-1">{title ?? "-"}</div>
          <p className="text-gray-700 text-base line-clamp-3">
            {description ?? '-'}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
