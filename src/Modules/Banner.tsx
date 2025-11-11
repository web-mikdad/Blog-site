import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "../components/ui/button";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import { CirclePlay, X, Code2 } from "lucide-react";

// ✅ Smooth fade-up animation
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ✅ Button data
const topics = [
  { name: "React.js", color: "bg-sky-600 hover:bg-sky-700", link: "https://react.dev/learn" },
  { name: "Node.js", color: "bg-green-600 hover:bg-green-700", link: "https://nodejs.org/en/learn" },
  { name: "MongoDB", color: "bg-emerald-600 hover:bg-emerald-700", link: "https://www.mongodb.com/docs/" },
  { name: "TypeScript", color: "bg-blue-700 hover:bg-blue-800", link: "https://www.typescriptlang.org/docs/" },
];

export default function Banner() {
  const [showDemo, setShowDemo] = useState(false);
  const fullText = "HI, I'M MIKDAD BIN MANSUR";
  const [displayedText, setDisplayedText] = useState("");

  // ✅ Typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* ✅ Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={3}
        className="mask-[radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 h-full skew-y-12"
      />

      {/* ✅ Main Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center w-full max-w-5xl"
      >
        {/* ✅ Name + Avatar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-5">
          <motion.div className="text-xl sm:text-2xl md:text-3xl font-bold select-none space-y-2">
            <motion.h4
              className="text-transparent bg-clip-text bg-linear-to-r from-green-400 via-blue-500 to-pink-500 tracking-wide whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {displayedText}
              <motion.span
                className="inline-block w-1.5 h-6 bg-pink-500 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
              />
            </motion.h4>

            <motion.h4 className="text-pink-500 text-sm sm:text-base mt-2" whileHover={{ scale: 1.05 }}>
              FROM DEVELOPING WORLD
            </motion.h4>
          </motion.div>

          <motion.img
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(59,130,246,0.7), 0 0 45px rgba(236,72,153,0.5)",
            }}
            transition={{ duration: 0.4 }}
            src="./image.png"
            alt="Mikdad"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-lg shadow-blue-500/30 cursor-pointer object-cover"
          />
        </div>

        {/* ✅ Headline */}
        <motion.h2
          variants={fadeUp}
          className="mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight px-2"
        >
          Build Next-Level <span className="text-blue-600">Web Projects</span>
        </motion.h2>

        {/* ✅ Description */}
        <motion.p
          variants={fadeUp}
          className="mt-5 text-sm sm:text-base md:text-lg text-foreground/80 px-3 sm:px-8 leading-relaxed"
        >
          Learn to build scalable apps using <b>React, Node.js, and MongoDB</b>. Master real-world architecture,
          clean code principles, and professional deployment — all from one dynamic platform.
        </motion.p>

        {/* ✅ Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {topics.map((topic) => (
            <Link key={topic.name} to={topic.link} target="_blank">
              <Button
                size="lg"
                className={`rounded-full text-xs sm:text-sm md:text-base text-white flex items-center gap-2 ${topic.color}`}
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5" /> {topic.name}
              </Button>
            </Link>
          ))}

          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowDemo(true)}
            className="rounded-full text-xs sm:text-sm md:text-base flex items-center gap-2 border-gray-400 hover:border-blue-500 hover:text-blue-600 transition-all"
          >
            <CirclePlay className="h-4 w-4 sm:h-5 sm:w-5" /> Watch Demo
          </Button>
        </motion.div>
      </motion.div>

      {/* ✅ Video Modal */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl mx-2"
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
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
