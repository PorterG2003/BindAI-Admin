import Link from 'next/link';
import Image from 'next/image';
import ProfileDropdown from "@/components/profile_dropdown"; // Assuming you already have this component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Optional if you want to add a menu icon in the header

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg z-50">
      <div className="flex justify-between items-center h-16 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo.svg" // Path to your logo file
              alt="Logo"
              width={150} // Adjust as needed
              height={50} // Adjust as needed
              className="hidden dark:block" // Ensures it adapts to the dimensions
            />
            <Image
              src="/logo_black.svg" // Path to your logo file
              alt="Logo"
              width={150} // Adjust as needed
              height={50} // Adjust as needed
              className="block dark:hidden" // Ensures it adapts to the dimensions
            />
          </Link>
        </div>

        {/* Optional Menu Button (If you want to add a menu or side toggle button) */}
        <button className="md:hidden focus:outline-none">
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>

        {/* Profile Dropdown */}
        <div className="flex items-center">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}