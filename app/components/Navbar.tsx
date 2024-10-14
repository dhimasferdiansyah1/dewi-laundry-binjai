import { Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Droplet, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", velocity: 10 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-1.5 sm:py-2 bg-white rounded-full mt-6 px-6 shadow-sm">
          <div className="flex items-center">
            <Link
              to="/"
              className="sm:text-xl font-bold text-gray-800 flex gap-2 items-center"
            >
              <Droplet className="h-8 w-8 text-white p-1 rounded-full bg-purple-500" />
              Dewi Laundry Binjai
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className=" flex items-baseline space-x-4">
              <NavLink to="/pricing">Harga</NavLink>
              <NavLink to="/about">Tentang Kami</NavLink>
              <NavLink to="/contact">Kontak</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-400 to-purple-700 hover:brightness-110 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
              Masuk
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence presenceAffectsLayout>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ type: "tween", duration: 0.1 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-md m-4">
              <MobileNavLink to="/pricing">Harga</MobileNavLink>
              <MobileNavLink to="/about">Tentang Kami</MobileNavLink>
              <MobileNavLink to="/contact">Kontak</MobileNavLink>
              <div className="mt-4">
                <button className="w-full bg-purple-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  Masuk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-900 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-gray-900 hover:text-gray-950 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
}
