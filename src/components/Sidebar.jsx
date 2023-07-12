import { FaClipboardList, FaUser } from "react-icons/fa";
import image from "../assets/favicon.ico";

const DashboardSidebar = () => {
  return (
    <div className="hidden lg:block fixed inset-y-0 left-0 lg:w-64 bg-white text-black py-4 mt-3">
      <div className="flex items-center justify-center h-16 text-[#000D83] text-2xl capitalize font-bold">
        pass <img className="h-6 w-6 mx-1" src={image} /> mark
      </div>
      <nav className="py-4 flex items-center justify-center ">
        <ul className="flex items-start flex-col justify-center gap-3">
          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalize font-medium"
            >
              Dashboard
            </a>
          </li>
          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalize font-medium"
            >
              my class
            </a>
          </li>
          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalize font-medium "
            >
              instructors
            </a>
          </li>
          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalize font-medium"
            >
              courses
            </a>
          </li>
          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalize font-medium"
            >
              message
            </a>
          </li>
          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalizefont-medium "
            >
              profile
            </a>
          </li>
          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalize font-medium"
            >
              settings
            </a>
          </li>

          <li className="px-6 py-3 text-sm tracking-wide flex items-center">
            <span className="mr-2">
              <FaClipboardList className="text-xl text-[#000D83] " />
            </span>
            <a
              href="#"
              className="block hover:bg-[#000D83] hover:text-white hover:rounded-2xl px-3 p-1 text-base text-[#000D83] capitalize font-medium  "
            >
              log out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
