import Footer from "./Footer";
import Nav from "./Nav";
// boxicons

const LayoutAuth = ({ children }) => {
  return (
    <div className="w-screen">
      <div className="sticky top-0 z-50 border-b-2 border-silver">
        <Nav />
      </div>
      <div className="py-5 bg-white min-h-screen	w-full bg-gradient-to-r from-silver to-white px-[1rem] box-border px-[5%]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAuth;
