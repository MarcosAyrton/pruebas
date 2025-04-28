import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <motion.div
      animate={{ width: isOpen ? 200 : 60 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 text-white h-screen flex flex-col py-4"
    >
      <button onClick={toggleNavbar} className="mb-4 self-center">
        {isOpen ? "Cerrar" : "Abrir"}
      </button>
      <nav className="flex flex-col items-start pl-4">
        <Link to="/" className="flex items-center mb-4">
          <i className="pi pi-home text-xl py-3"></i>
          <AnimatePresence>
            {isOpen && (
              <motion.span
                className="ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                Inicio
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link to="/contact" className="flex items-center mb-4">
          <i className="pi pi-phone text-xl py-3"></i>
          <AnimatePresence>
            {isOpen && (
              <motion.span
                className="ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                Contacto
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        <Link to="/information" className="flex items-center">
          <i className="pi pi-info-circle text-xl py-3"></i>
          <AnimatePresence>
            {isOpen && (
              <motion.span
                className="ml-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                Información
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </nav>
      <div className="mt-auto px-3">
        <AnimatePresence>
          {isOpen && (
            <motion.button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
              }}
              className="w-full border-2 border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              Cerrar sesión
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
