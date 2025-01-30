// importing icons and assets
import { FaBullhorn, FaCog, FaSearch } from "react-icons/fa";

export default function Functionality() {
  return (
    <>
      {/* this div contains the basic info like settings and updates */}

      <div className="text-lg space-y-5 font-semibold w-4/5 flex flex-col items-center">
        <button className="flex items-center justify-start gap-5 w-full">
          <FaBullhorn className="text-blue-600" />
          Updates
        </button>

        <button className="flex items-center justify-start gap-5 w-full">
          <FaSearch className="text-green-500" />
          Search
        </button>

        <button className="flex items-center justify-start gap-5 w-full">
          <FaCog className="text-purple-500" />
          Settings
        </button>
      </div>
    </>
  );
}
