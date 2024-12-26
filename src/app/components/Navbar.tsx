import Link from "next/link";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { FaGear, FaUserGroup } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-cutom-black z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-500">
          <Link href="/">
            <span className="text-white text-5xl italic">MEL</span>
            <span className="text-yellow-500 text-5xl italic -ml-2">BET</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {/* Home Link */}
          <Link href="/">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaHome size={24} />
              <span>Home</span>
            </div>
          </Link>

          {/* Service Link */}
          <Link href="/service">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaGear size={24} />
              <span>Service</span>
            </div>
          </Link>

          {/* Contact Link */}
          <Link href="/contact">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaUserGroup size={24} />
              <span>Agent List</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="flex items-center space-x-2 text-yellow-500 cursor-pointer hover:text-white transition-colors duration-300">
              <FaEnvelope size={24} />
              <span>Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
