import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const MenusManage = () => {
  return (
    <>
      <Menu>
        <MenuHandler>
          <Button
            className="w-fit flex justify-center	items-center"
            variant="text"
            size="sm"
          >
            <box-icon name='dots-vertical-rounded'></box-icon>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => console.log("Edit")}
          >
            <box-icon name='edit'></box-icon>
            <span className="ml-3">Edit</span>
          </MenuItem>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => console.log("Delete")}
          >
            <box-icon name='trash' color="#CC3333" ></box-icon>
            <span className="ml-3 text-red-500">Delete</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default MenusManage;
