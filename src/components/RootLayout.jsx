import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import DashboardSidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-0 lg:w-1/5">
        <DashboardSidebar />
      </div>

      <div className="flex flex-col flex-1 h-full ">
        <Navbar />
        <main className="flex-grow  py-5 px-10 ">
          <Outlet />
        </main>

        <footer className="bg-white p-2">Footer</footer>
      </div>
    </div>
  );
};

export default RootLayout;
