import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";

const Menus = () => {
  const navigate = useNavigate();
  return (
    <>
      <Menu>
        <MenuHandler>
          <Button
            className="w-fit flex justify-center	items-center"
            variant="text"
            size="sm"
          >
            <box-icon name="menu"></box-icon>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => navigate("/", { replace: true })}
          >
            <box-icon name="home"></box-icon>
            <span className="ml-3">Home</span>
          </MenuItem>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => navigate("/profile", { replace: true })}
          >
            <box-icon name="user"></box-icon>
            <span className="ml-3">About</span>
          </MenuItem>
          <MenuItem
            className="w-full flex items-center"
            onClick={() => {
              logout();
              window.location.reload(false);
            }}
          >
            <box-icon name="log-out"></box-icon>
            <span className="ml-3">Logout</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Menus;
