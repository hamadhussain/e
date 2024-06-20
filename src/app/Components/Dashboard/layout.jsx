import Nav from "./Nav/page";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-fit overflow-hiddn">
      <div className="sticky top-0 h-full overflow-auto scroll-mt-40">
        <Nav />
      </div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
