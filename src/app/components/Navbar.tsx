import Link from "next/link";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { FaGear, FaUserGroup } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-custom-black z-20 w-full fixed top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 xs:px-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">
          <Link href="/">
            <span className="text-white text-5xl sm:text-3xl xs:text-2xl italic">
              MEL
            </span>
            <span className="text-yellow-500 text-5xl sm:text-3xl xs:text-2xl italic -ml-2">
              BET
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 sm:space-x-2 xs:space-x-1">
          {/* Home Link */}
          <Link href="#home">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaHome size={24} className="xs:hidden" />
              <span>Home</span>
            </div>
          </Link>

          {/* Service Link */}

          {/* Contact Link */}
          <Link href="#about">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaUserGroup size={24} className="xs:hidden" />
              <span>About</span>
            </div>
          </Link>
          <Link href="#agents">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaEnvelope size={24} className="xs:hidden" />
              <span>Contact</span>
            </div>
          </Link>
          <Link href="#service">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaGear size={24} className="xs:hidden" />
              <span>Service</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
