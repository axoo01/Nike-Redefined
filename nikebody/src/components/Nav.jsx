
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const AnimatedHamburger = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      className="relative w-8 h-8 flex flex-col justify-center items-end cursor-pointer group hover:scale-110 transition-transform duration-300"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.span
        className={`h-0.5 rounded-full origin-right transition-colors duration-300 ${
          isOpen ? "bg-coral-red" : "bg-slate-gray dark:bg-light-gray group-hover:bg-coral-red"
        }`}
        initial={{ width: "24px", y: -6 }}
        animate={{
          width: isOpen ? "20px" : "24px",
          y: isOpen ? 0 : -6,
          rotate: isOpen ? 45 : 0,
          x: isOpen ? 2 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.span
        className={`h-0.5 rounded-full origin-right transition-colors duration-300 ${
          isOpen ? "bg-coral-red" : "bg-slate-gray dark:bg-light-gray group-hover:bg-coral-red"
        }`}
        initial={{ width: "18px", opacity: 1 }}
        animate={{ width: isOpen ? "0px" : "18px", opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.span
        className={`h-0.5 rounded-full origin-right transition-colors duration-300 ${
          isOpen ? "bg-coral-red" : "bg-slate-gray dark:bg-light-gray group-hover:bg-coral-red"
        }`}
        initial={{ width: "24px", y: 6 }}
        animate={{
          width: isOpen ? "20px" : "24px",
          y: isOpen ? 0 : 6,
          rotate: isOpen ? -45 : 0,
          x: isOpen ? 2 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      />
    </button>
  );
};

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !isDarkMode);
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 hover:border-coral-red/50 transition-all duration-300 hover:scale-110"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ rotate: isDarkMode ? 360 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {isDarkMode ? (
          <SunIcon className="w-6 h-6 text-coral-red" />
        ) : (
          <MoonIcon className="w-6 h-6 text-coral-red" />
        )}
      </motion.div>
    </motion.button>
  );
};

const MobileMenu = ({ isOpen, onClose, toggleMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-0 right-0 w-80 h-auto min-h-fit bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl shadow-2xl z-50 flex flex-col border-l border-white/20 dark:border-gray-700/20"
          >
            <div className="flex justify-end items-center p-6 gap-4">
              <DarkModeToggle />
              <AnimatedHamburger isOpen={true} onClick={toggleMenu} />
            </div>
            <nav className="flex-1 px-6 py-4">
              <ul className="space-y-4">
                {navLinks.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block text-lg font-montserrat text-slate-gray dark:text-light-gray 
                      dark:hover:text-coral-red hover:text-coral-red transition-all duration-300 
                      hover:translate-x-2 hover:font-medium  py-3 border-b border-white/30 
                      dark:border-gray-700/30 hover:border-coral-red/20 dark:hover:border-coral-red/20"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="p-6">
              <motion.a
                href="/"
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="block w-full text-center py-4 px-6 bg-coral-red text-white font-montserrat font-medium rounded-full hover:bg-coral-red/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Sign In / Explore Now
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="padding-x py-8 w-full absolute z-10 transition-colors duration-300">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Header Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-block font-montserrat leading-normal text-lg text-slate-gray dark:text-light-gray hover:text-coral-red dark:hover:text-coral-red transform transition-all duration-500 hover:scale-105 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-red transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="max-lg:hidden text-slate-gray dark:text-light-gray font-montserrat hover:text-coral-red dark:hover:text-coral-red/90 transform transition-all duration-500 hover:scale-105"
            >
              Sign In / Explore Now
            </a>
            <DarkModeToggle />
          </div>
          <div className="lg:hidden">
            <AnimatedHamburger isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </nav>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} toggleMenu={toggleMobileMenu} />
    </>
  );
};

export default Nav;