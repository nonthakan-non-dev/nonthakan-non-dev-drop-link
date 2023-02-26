import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen min-w-full flex flex-col justify-center items-center">
      <h1 className="text-8xl">404</h1>

      <div className="w-200 mt-[20px]">
        <Button
          className="w-200 normal-case border-black text-black noSelect"
          variant="outlined"
          size="sm"
          fullWidth
          onClick={() => navigate("/", { replace: true })}
        >
          Home
        </Button>
      </div>
    </div>
  );
}

export default Page404;
