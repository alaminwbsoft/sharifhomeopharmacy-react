import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex justify-between bg-secondary  ">
      <div className="hidden md:flex md:items-center md:space-x-2">
        <IoCallSharp className=" text-white" />
        <p className="text-white">
          <span className="text-gray-500">Call us now:</span> 09639-146636 [
          10am - 7pm]
        </p>
      </div>

      <div className="flex justify-end items-end md:items-center divide-x divide-white">
        {/* Contact Us Button */}
        <div className="flex items-end h-full">
          <Link to="/contact">
            <button className="px-2 py-2 border-l border-white h-full hover:bg-gray-700 hover:border-gray-500 transition duration-200">
              Contact us
            </button>
          </Link>
        </div>

        {/* Sign In Button */}
        <div className="flex items-end h-full">
          <Link to="/signIn">
            <button className="px-2 py-2 border-r border-white h-full hover:bg-gray-700 hover:border-gray-500 transition duration-200">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
