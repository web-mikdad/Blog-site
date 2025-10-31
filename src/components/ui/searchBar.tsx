import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Simulated searchable data across your website
  const data = [
    { title: "About Mikdad Hasan", path: "/aboutpage", category: "About" },
    { title: "Web Development Services", path: "/services/web", category: "Services" },
    { title: "UI/UX Design Services", path: "/services/uiux", category: "Services" },
    { title: "App Development", path: "/services/app", category: "Services" },
    { title: "Latest Tech Blog", path: "/blog", category: "Blog" },
    { title: "Contact Mikdad", path: "/contact", category: "Contact" },
  ];

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Search Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 transition-all text-white flex items-center gap-2"
      >
        <Search className="w-4 h-4" /> <span className="hidden sm:block">Search</span>
      </Button>

      {/* Search Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-6 relative text-white"
              initial={{ scale: 0.9, opacity: 0, y: -30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-semibold mb-4 text-center">
                Search the Site
              </h2>

              {/* Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-3 text-white/60" />
                <Input
                  autoFocus
                  type="text"
                  placeholder="Type to search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>

              {/* Results */}
              <div className="max-h-60 overflow-y-auto space-y-2">
                {query.length > 0 ? (
                  filtered.length > 0 ? (
                    filtered.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setOpen(false)}
                          className=" bg-white/10 hover:bg-white/20 p-3 rounded-lg transition flex flex-col"
                        >
                          <span className="font-medium text-white">{item.title}</span>
                          <span className="text-sm text-blue-300">{item.category}</span>
                        </Link>
                      </motion.div>
                    ))
                  ) : (
                    <p className="text-center text-white/60 mt-6">No results found 😢</p>
                  )
                ) : (
                  <p className="text-center text-white/50">
                    Start typing to find a section 🔍
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="mt-6 flex justify-between text-sm text-white/50">
                <p>Press <b>Enter</b> to search</p>
                <p>Press <b>ESC</b> to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
