import React, { useEffect, useState } from "react";
import _ from "lodash";
import GirdCard from "../components/GridCard";
import ShortcutMenu from "../components/ShortcutMenu";
import DropLink from "../components/DropLink";
import { getDropLinkData } from "../firebase";
import Nav from "../components/Nav";
import ListCard from "../components/ListCard";
import MenusSort from "../components/MenuSort";
import { Button } from "@material-tailwind/react";

function Home() {
  const [fetch, setFetch] = useState(false);
  const [tagsAll, setTagsAll] = useState([]);
  const [createPopup, setCreatePopup] = useState(false);
  const [dropLinkDataRaw, setDropLinkDataRaw] = useState([]);
  const [dropLinkDataRawShow, setDropLinkDataRawShow] = useState([]);
  const [display, setDisplay] = useState(true);
  const [sort, setSort] = useState(true);
  const [sortBy, setSortBy] = useState("createdAt");

  const [searchLink, setSearchLink] = useState("");

  const fetchGetDropLinkData = async () => {
    try {
      const tagsRaws = [];
      const dataAll = [];
      const dataRaw = await getDropLinkData();
      for (const v of dataRaw ?? []) {
        const { tags, ...data } = v;
        const tagsRaw = tags.replace(/\s+/g, "*").replace(/#/g, "*#");
        const arrayTagsRaw = _.split(tagsRaw, /\*/g);
        const arrayTags = [];
        for (const i of arrayTagsRaw ?? []) {
          if (i.length <= 0) continue;
          if (i[0] !== "#") continue;
          arrayTags.push(i);
          tagsRaws.push(i);
        }
        dataAll.push({ tags: arrayTags, ...data });
      }
      setTagsAll(_.uniq(tagsRaws));
      setDropLinkDataRaw(dataAll);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGetDropLinkData();
  }, [fetch]);

  useEffect(() => {
    const fetchGetDropLinkDataShow = () => {
      try {
        let dataForShow = [];

        if (searchLink?.length > 0) {
          const filterDropLinkDataRaw = _.filter(dropLinkDataRaw, function (v) {
            return (
              v?.title?.toLowerCase().includes(searchLink?.toLowerCase()) ||
              v?.tags
                ?.join(" ")
                ?.toLowerCase()
                .includes(searchLink?.toLowerCase())
            );
          });
          dataForShow = filterDropLinkDataRaw;
        } else {
          dataForShow = dropLinkDataRaw;
        }

        if (sortBy === "createdAt") {
          if (sort) {
            dataForShow = _.sortBy(dataForShow, ["createdAt"]).reverse();
          }else{
            dataForShow = _.sortBy(dataForShow, ["createdAt"]);
          }
        }

        if (sortBy === "updatedAt") {
          if (sort) {
            dataForShow = _.sortBy(dataForShow, ["updatedAt"]).reverse();
          }else{
            dataForShow = _.sortBy(dataForShow, ["updatedAt"]);
          }
        }

        if (sortBy === "title") {
          if (sort) {
            dataForShow = _.sortBy(dataForShow, ["title"]).reverse();
          }else{
            dataForShow = _.sortBy(dataForShow, ["title"]);
          }
        }

        setDropLinkDataRawShow(dataForShow);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGetDropLinkDataShow();
  }, [searchLink, sort, sortBy, dropLinkDataRaw]);

  const AllLinks = () => {
    return (
      <>
        {display && (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
            {dropLinkDataRawShow.map((v, i) => (
              <div key={i}>
                <GirdCard
                  data={{
                    img: v?.image,
                    title: v?.title,
                    description: v?.description,
                    url: v?.url,
                    tags: v?.tags,
                    id: v?.createdAt,
                  }}
                  setFetch={setFetch}
                  setSearchLink={setSearchLink}
                  searchLink={searchLink}
                />
              </div>
            ))}
          </div>
        )}

        {!display && (
          <div className="w-full grid grid-cols-1 gap-4">
            {dropLinkDataRawShow.map((v, i) => (
              <div key={i}>
                <ListCard
                  data={{
                    img: v?.image,
                    title: v?.title,
                    description: v?.description,
                    url: v?.url,
                    tags: v?.tags,
                    id: v?.createdAt,
                  }}
                  setFetch={setFetch}
                  setSearchLink={setSearchLink}
                  searchLink={searchLink}
                />
              </div>
            ))}
          </div>
        )}
      </>
    );
  };
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 border-b-2 border-silver">
        <Nav searchLink={searchLink} setSearchLink={setSearchLink} />
      </div>
      <div className="pt-[70px] flex justify-between items-center my-2">
        <div className="flex justify-center items-center">
          <MenusSort setSortBy={setSortBy} />
          <div>
            {sort ? (
              <Button
                className="w-fit flex justify-center	items-center"
                variant="text"
                size="sm"
                onClick={() => setSort(false)}
              >
                <span>
                  <box-icon name="sort-up"></box-icon>
                </span>
              </Button>
            ) : (
              <Button
                className="w-fit flex justify-center	items-center"
                variant="text"
                size="sm"
                onClick={() => setSort(true)}
              >
                <span>
                  <box-icon name="sort-down"></box-icon>
                </span>
              </Button>
            )}
          </div>
        </div>
        <div>
          {display ? (
            <span
              className="cursor-pointer select-none"
              onClick={() => setDisplay(false)}
            >
              <box-icon name="list-ul"></box-icon>
            </span>
          ) : (
            <span
              className="cursor-pointer select-none"
              onClick={() => setDisplay(true)}
            >
              <box-icon name="grid-horizontal"></box-icon>
            </span>
          )}
        </div>
      </div>

      <AllLinks />

      <DropLink
        modalIsOpen={createPopup}
        setIsOpen={setCreatePopup}
        setFetch={setFetch}
        tagsAlls={tagsAll}
      />
      <ShortcutMenu event={setCreatePopup} />
    </div>
  );
}

export default Home;
