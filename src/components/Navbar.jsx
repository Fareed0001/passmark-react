import { FaBell, FaCog, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white py-6 md:py-8 px-4 flex items-center justify-between ">
      <div className=" relative  flex items-center px-3 ml-20">
        <FaSearch className="text-gray-400 absolute right-6" />
        <input
          type="text"
          placeholder="Search"
          className="pl-2 py-1 white border-2  text-black focus:outline-none w-60 rounded-2xl"
        />
      </div>

      <div className="flex items-center w-4/12  justify-around">
        <div className="flex items-center justify-center gap-x-4">
          <div className="text-black mr-4">
            <FaBell className="text-xl" />
          </div>

          <div className="text-black mr-4">
            <FaCog className="text-xl" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-3 ">
          <div className="capitalize"> david temitope</div>
          <div className="rounded-full overflow-hidden w-10 h-10">
            <img
              src="user-picture.jpg"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
