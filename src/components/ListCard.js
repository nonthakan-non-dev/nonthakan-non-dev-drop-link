import MenusManage from "./MenusManage";

const ListCard = ({ data, setFetch, searchLink, setSearchLink }) => {
  const { title, description, url, tags } = data;
  const seleteTag = (tag) => {
    try {
      if (searchLink === tag) {
        setSearchLink("");
      } else {
        setSearchLink(tag);
      }
    } catch (error) {}
  };
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg bg-white relative">
      <div className="absolute right-0 top-0 pt-1 pr-1 cursor-pointer">
        <MenusManage data={data} setFetch={setFetch} />
      </div>
      <a href={url} target="_blank" rel="noreferrer">
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
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer select-none noSelect"
              onClick={() => seleteTag(v)}
            >
              {v ?? "-"}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListCard;
