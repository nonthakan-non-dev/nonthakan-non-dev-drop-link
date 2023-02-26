import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

const MenusSort = ({ setSortBy }) => {
  const [isSortBy, setIsSortBy] = useState("Creation Date");
  return (
    <>
      <Menu>
        <MenuHandler>
          <Button
            className="w-fit flex justify-start	items-center bg-silver hover:bg-silver overflow-hidden "
            variant="text"
            size="sm"
          >
            <span className="text-black capitalize line-clamp-1 text-sm">{isSortBy ?? "-"}</span>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => {
              setIsSortBy("Creation Date");
              setSortBy("createdAt")
            }}
          >
            <span className="capitalize">Creation Date</span>
          </MenuItem>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => {
              setIsSortBy("Last Updated Date");
              setSortBy("updatedAt")
            }}
          >
            <span className="capitalize">Last Updated Date</span>
          </MenuItem>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => {
              setIsSortBy("Title");
              setSortBy("title")
            }}
          >
            <span className="capitalize">Title</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default MenusSort;
