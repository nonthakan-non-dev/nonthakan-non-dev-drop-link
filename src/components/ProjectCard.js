const ProjectCard = ({ data }) => {
  const { img, title, description, url } = data;
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          class="w-full"
          src={
            img ??
            "https://firebasestorage.googleapis.com/v0/b/nonthakan-non-dev.appspot.com/o/asset%2Fcommon%2Fno-image.png?alt=media&token=97f025fe-10d5-4a52-8430-1b3ff38ef06c"
          }
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 line-clamp-1">{title ?? "-"}</div>
          <p class="text-gray-700 text-base line-clamp-3">
            {description ?? '-'}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
