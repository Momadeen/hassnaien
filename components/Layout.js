import Leftbar from "./Leftbar";

const Layout = ({ children }) => (
  <div className="flex flex-col md:flex-row">
    <Leftbar />
    <div className="bg-backgroundGray p-10 h-screen w-full md:p-16">{children}</div>
  </div>
);

export default Layout;
