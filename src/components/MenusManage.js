import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { deleteLink } from "../firebase";

const MenusManage = ({ data, setFetch, setUpdatePopup }) => {
  const {id } = data;

  const deleteDropLink = async (id) => {
    try {
      await deleteLink(id);
      setFetch((i) => !i);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Menu>
        <MenuHandler>
          <Button
            className="w-fit flex justify-center	items-center bg-silver hover:bg-silver select-none noSelect"
            variant="text"
            size="sm"
          >
            <box-icon name="dots-vertical-rounded"></box-icon>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="w-full flex items-center noSelect"
            onClick={() => {
              setUpdatePopup(data);
            }}
          >
            <box-icon name="edit"></box-icon>
            <span className="ml-3">Edit</span>
          </MenuItem>
          <MenuItem
            className="w-full flex items-center noSelect"
            onClick={() => deleteDropLink(id)}
          >
            <box-icon name="trash" color="#CC3333"></box-icon>
            <span className="ml-3 text-red-500">Delete</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default MenusManage;
