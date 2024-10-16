import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLink, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function SidebarNavbar() {
  return (
    <div className="h-full w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg flex flex-col justify-between">
      {/* Sidebar container */}
      <div className="flex flex-col items-start p-4 space-y-4 w-full">
        
        {/* Create Button */}
        <Link href="/create" className="w-full">
          <button className="w-full flex items-center space-x-2 p-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg shadow hover:bg-blue-400 dark:hover:bg-blue-500 transition-all duration-300 justify-center">
            <FontAwesomeIcon icon={faPlus} className="w-5 h-5" /> {/* Explicit width and height */}
            <span className="text-base font-medium">Create</span>
          </button>
        </Link>

        {/* Home/Dashboard Link */}
        <Link href="/dashboard" className="w-full">
          <div className="w-full flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faHome} className="w-5 h-5" /> {/* Explicit width and height */}
            <span className="text-base font-medium">Home</span>
          </div>
        </Link>

        {/* Connectors Link */}
        <Link href="/connectors" className="w-full">
          <div className="w-full flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faLink} className="w-5 h-5" /> {/* Explicit width and height */}
            <span className="text-base font-medium">Connectors</span>
          </div>
        </Link>
      </div>
    </div>
  );
}