"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold from-purple-600 to-sky-400 bg-gradient-to-r bg-clip-text text-transparent">
              Vaibhav Shukla
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href="/" className="text-purple-500 hover:text-sky-400 transition-colors font-extrabold">
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href="/about" className="text-purple-500 hover:text-sky-400 transition-colors font-extrabold">
                  About
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href="/projects" className="text-purple-500 hover:text-sky-400 transition-colors font-extrabold">
                  Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href="/skills" className="text-purple-500 hover:text-sky-400 transition-colors font-extrabold">
                  Skills
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href="/contact" className="text-purple-500 hover:text-sky-400 transition-colors font-extrabold">
                  Contact
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-500 hover:text-sky-400 focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-purple-500 hover:text-sky-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/about" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-purple-500 hover:text-sky-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/projects" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-purple-500 hover:text-sky-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/skills" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-purple-500 hover:text-sky-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link 
                  href="/contact" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-purple-500 hover:text-sky-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}