import Footer from "./Footer";
// boxicons

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      <div className="bg-white min-h-screen	w-full bg-gradient-to-r from-silver to-white px-[1rem] box-border">
        <div className="px-[5%]">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
