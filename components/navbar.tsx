import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

export default function SidebarNavbar() {
  return (
    <div className="h-full w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg flex flex-col justify-between">
      {/* Sidebar container */}
      <div className="flex flex-col items-start p-4 space-y-4 w-full">

        {/* Home/Dashboard Link */}
        <Link href="/dashboard" className="w-full">
          <div className="w-full flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faHome} className="w-5 h-5" /> {/* Explicit width and height */}
            <span className="text-base font-medium">Home</span>
          </div>
        </Link>

        {/* Connectors Link */}
        <Link href="/customers" className="w-full">
          <div className="w-full flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-300">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5" /> {/* Explicit width and height */}
            <span className="text-base font-medium">Customers</span>
          </div>
        </Link>
      </div>
    </div>
  );
}