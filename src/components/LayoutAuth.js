import Footer from "./Footer";

const LayoutAuth = ({ children }) => {
  return (
    <div className="w-screen relative" >
      <div className="pb-5 bg-white min-h-screen	w-full bg-gradient-to-r from-silver to-white box-border px-[5%]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAuth;
