import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function NavMenu() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutpage" },
    { name: "Blog", path: "/blog" },
    {
      name: "Services",
      path: "/services",
      submenu: [
        { name: "Web Development", path: "/services/web" },
        { name: "UI/UX Design", path: "/services/uiux" },
        { name: "App Development", path: "/services/app" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative z-50 w-full flex justify-center">
      {/* Desktop & Medium Menu */}
      <ul className="hidden md:flex items-center gap-8 px-8 py-4 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        {navItems.map((item, i) => (
          <li key={i} className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link
                to={item.path}
                className={`font-semibold tracking-wide text-white hover:text-blue-300 transition-all duration-300 ${
                  pathname === item.path ? "text-blue-400" : ""
                }`}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <ChevronDown
                  size={16}
                  className="text-blue-200 group-hover:rotate-180 transition-transform duration-300"
                />
              )}
            </div>

            {/* Active underline */}
            {pathname === item.path && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute left-0 right-0 h-0.5 bg-blue-400 rounded-full -bottom-1"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}

            {/* Hover underline */}
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-300 transition-all group-hover:w-full group-hover:left-0"></span>

            {/* Submenu for md+ screens */}
            {item.submenu && (
              <div className="absolute top-10 left-0 hidden group-hover:flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg rounded-xl py-3 px-5 min-w-[200px]">
                {item.submenu.map((sub, j) => (
                  <Link
                    key={j}
                    to={sub.path}
                    className="text-white/90 hover:text-blue-300 py-1 text-sm transition-all"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-end w-full px-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-white p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute top-14 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20 py-4 rounded-b-2xl md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 px-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <div className="flex flex-col items-center">
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`text-white text-lg font-semibold tracking-wide hover:text-blue-300 ${
                        pathname === item.path ? "text-blue-400" : ""
                      }`}
                    >
                      {item.name}
                    </Link>

                    {/* Mobile Submenu Toggle */}
                    {item.submenu && (
                      <button
                        onClick={() =>
                          setSubmenuOpen(
                            submenuOpen === item.name ? null : item.name
                          )
                        }
                        className="text-blue-200 text-sm mt-1"
                      >
                        {submenuOpen === item.name ? "▲ Hide" : "▼ More"}
                      </button>
                    )}

                    {/* Mobile Submenu */}
                    <AnimatePresence>
                      {submenuOpen === item.name && item.submenu && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex flex-col items-center mt-2 space-y-2"
                        >
                          {item.submenu.map((sub, j) => (
                            <Link
                              key={j}
                              to={sub.path}
                              onClick={() => {
                                setOpen(false);
                                setSubmenuOpen(null);
                              }}
                              className="text-white/80 hover:text-blue-300 text-sm transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
