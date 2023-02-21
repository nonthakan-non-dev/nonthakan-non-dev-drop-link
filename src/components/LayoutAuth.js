import Footer from "./Footer";
import Nav from "./Nav";
// boxicons

const LayoutAuth = ({ children }) => {
  return (
    <div className="w-screen relative">
      <div className="fixed top-0 left-0 right-0">
        <Nav />
      </div>
      <div className="bg-white min-h-screen	w-full bg-gradient-to-r from-silver to-white px-[1rem] box-border px-[5%]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutAuth;
