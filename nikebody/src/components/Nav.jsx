import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const AnimatedHamburger = ({ isOpen, onClick, isDarkMode }) => {
  return (
    <button
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      className="relative w-8 h-8 flex flex-col justify-center items-end cursor-pointer group hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.span
        className={`h-0.5 rounded-full origin-right transition-colors duration-300 ${
          isOpen ? (isDarkMode ? "bg-white" : "bg-slate-gray") : "bg-slate-gray dark:bg-light-gray group-hover:bg-coral-red"
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
          isOpen ? (isDarkMode ? "bg-white" : "bg-slate-gray") : "bg-slate-gray dark:bg-light-gray group-hover:bg-coral-red"
        }`}
        initial={{ width: "18px", opacity: 1 }}
        animate={{ width: isOpen ? "0px" : "18px", opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.span
        className={`h-0.5 rounded-full origin-right transition-colors duration-300 ${
          isOpen ? (isDarkMode ? "bg-white" : "bg-slate-gray") : "bg-slate-gray dark:bg-light-gray group-hover:bg-coral-red"
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

const MobileMenu = ({ isOpen, onClose, toggleMenu, isDarkMode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-[3px]"
            onClick={onClose}
          />
          
          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 100,
              duration: 0.5
            }}
            className="lg:hidden fixed top-0 left-0 w-80 h-full bg-white/60 dark:bg-gray-900/40 backdrop-blur-md z-50 flex flex-col border-r border-white/20 dark:border-gray-700/20 shadow-2xl"
          >
            {/* Header with close button */}
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <img src={headerLogo} alt="Logo" width={100} height={25} />
              <div className="flex items-center gap-2">
                <DarkModeToggle />
                <AnimatedHamburger isOpen={true} onClick={toggleMenu} isDarkMode={isDarkMode} />
              </div>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 flex flex-col justify-center">
              <ul className="space-y-8">
                {navLinks.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2, 
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block text-lg font-montserrat font-[400] text-slate-gray dark:text-light-gray 
                      hover:text-coral-red dark:hover:text-coral-red transition-all duration-500
                      hover:translate-x-4 hover:scale-105 py-2 border-b border-white/10 hover:border-coral-red/30"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            
            {/* Bottom CTA */}
            <div className="p-6 border-t border-white/10">
              <motion.a
                href="/"
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="block w-full text-center py-4 px-6 bg-coral-red text-white font-montserrat font-semibold rounded-full hover:bg-coral-red/90 transition-all duration-300 hover:scale-105 shadow-lg"
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

const Nav = ({ setIsMobileMenuOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpenLocal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpenLocal(newState);
    setIsMobileMenuOpen(newState);
  };

  // Track dark mode for hamburger
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) document.documentElement.classList.add("dark");
  }, []);

  // Handle scroll for navbar size
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`padding-x w-full fixed top-0 z-30  transition-all duration-300 sm:shadow-md ${
          isScrolled ? "py-3 shadow-sm bg-white/50 backdrop-blur-md dark:bg-gray-800/50 " : "py-8"
        }`}
      >
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
          <div className="flex items-center gap-4 ">
            <a
              href="/"
              className="max-lg:hidden text-slate-gray dark:text-light-gray font-montserrat hover:text-coral-red dark:hover:text-coral-red/90 transform transition-all duration-500 hover:scale-105"
            >
              Sign In / Explore Now
            </a>
            <DarkModeToggle />
            <div className="lg:hidden">
              <AnimatedHamburger
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
                isDarkMode={isDarkMode}
              />
            </div>
          </div>
        </nav>
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => toggleMobileMenu()}
        toggleMenu={toggleMobileMenu}
        isDarkMode={isDarkMode}
      />
    </>
  );
};

export default Nav;
