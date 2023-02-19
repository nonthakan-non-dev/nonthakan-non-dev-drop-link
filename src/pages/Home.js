import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen	w-full flex flex-col justify-center">
      <h1 className="text-5xl	">Hi,</h1>
      <h1 className="text-5xl mt-[15px]">I'm Non,</h1>
      <h1 className="text-5xl	mt-[15px] font-prompt">A Back-end developer.</h1>
      <p className="text-1xl mt-[15px] font-prompt">
        JavaScript / Python / Java
      </p>

      <div className="w-200 mt-[20px]">
        <Button
          className="w-200 normal-case border-black text-black"
          variant="outlined"
          size="sm"
          fullWidth
          onClick={() => navigate("/contact", { replace: true })}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default Home;
