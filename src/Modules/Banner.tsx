import { useState, useEffect } from "react";
import { Link } from "react-router";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import { Button } from "../components/ui/button";
import { CirclePlay, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  const [showDemo, setShowDemo] = useState(false);
  const words = ["I'M", "MIKDAD", "BIN", "MANSUR"];
  const [currentWord, setCurrentWord] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  // 🔁 Animate each word letter-by-letter infinitely
  useEffect(() => {
    const current = words[wordIndex];
    if (letterIndex < current.length) {
      const timeout = setTimeout(() => {
        setCurrentWord((prev) => prev + current[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentWord("");
        setLetterIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [letterIndex, wordIndex]);

  function cn(...classes: Array<string | undefined | null | false>): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* 🔷 Animated background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      {/* 🧩 Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        <div className="flex justify-center items-center">
          <div className="text-2xl font-bold mt-5 mr-7">
            {/* ✨ Animated intro text */}
            <h4 className="text-green-400 mb-1 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">
              HI
            </h4>

            <motion.h4
              className="text-blue-800 whitespace-pre drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
              key={currentWord}
              initial={{ opacity: 0.4, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentWord}
            </motion.h4>

            <h4 className="text-pink-500 mt-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
              FROM DEVELOPING WORLD
            </h4>
          </div>

          <img
            className="w-20 h-20 rounded-full mt-10 shadow-lg shadow-blue-500/30"
            src="./image.png"
            alt="Mikdad"
          />
        </div>

        {/* 🏗️ Existing content (unchanged) */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.2] font-semibold tracking-tighter">
          Build Next-Level{" "}
          <span className="text-blue-600">Web Projects</span>
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-foreground/80 px-2 sm:px-4">
          Learn how to develop dynamic and scalable applications with{" "}
          <b>React, Node.js, and MongoDB</b>. Experience real-world project
          structure, clean code, and deployment strategy — everything a modern
          programmer needs.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {[
            {
              name: "React.js",
              color: "bg-sky-600 hover:bg-sky-700",
              link: "https://react.dev/learn",
            },
            {
              name: "Node.js",
              color: "bg-green-600 hover:bg-green-700",
              link: "https://nodejs.org/en/learn",
            },
            {
              name: "MongoDB",
              color: "bg-emerald-600 hover:bg-emerald-700",
              link: "https://www.mongodb.com/docs/",
            },
            {
              name: "TypeScript",
              color: "bg-blue-700 hover:bg-blue-800",
              link: "https://www.typescriptlang.org/docs/",
            },
          ].map((topic) => (
            <Link key={topic.name} to={topic.link} target="_blank">
              <Button
                size="lg"
                className={`rounded-full text-sm sm:text-base text-white flex items-center gap-2 ${topic.color}`}
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5" /> {topic.name}
              </Button>
            </Link>
          ))}

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-sm sm:text-base flex items-center gap-2 border-gray-400"
            onClick={() => setShowDemo(true)}
          >
            <CirclePlay className="h-4 w-4 sm:h-5 sm:w-5" /> Watch Demo
          </Button>
        </div>
      </div>

      {/* 🎥 Video modal */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden max-w-full sm:max-w-2xl md:max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/Ke90Tje7VS0"
                  title="Programming Project Demo"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-4 sm:p-6 text-left">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Full-Stack Web App with React, Node.js & MongoDB
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  This demo shows how to build a dynamic and secure full-stack
                  web application using React for frontend, Node.js + Express
                  for backend, and MongoDB for the database. Includes JWT auth,
                  REST APIs, and deployment setup.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
