import { useState } from "react";
import { Link } from "react-router";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowUpRight, CirclePlay, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Banner() {
  const [showDemo, setShowDemo] = useState(false);

  const demoProject = {
    title: "Full-Stack Web App with React, Node.js & MongoDB",
    description:
      "This demo shows how to build a dynamic and secure full-stack web application using React for frontend, Node.js + Express for backend, and MongoDB for the database. Includes JWT auth, REST APIs, and deployment setup.",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
  };

  const programmingTopics = [
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
  ];

  function cn(...classes: Array<string | undefined | null | false>): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* 🟦 Animated Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />

      {/* --- Text Content --- */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border text-xs sm:text-sm"
          asChild
        >
          <Link to="#">
            Just Released v2.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>

        <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.2] font-semibold tracking-tighter wrap-break-words">
          Build Next-Level{" "}
          <span className="text-blue-600">Web Projects</span>
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-foreground/80 px-2 sm:px-4">
          Learn how to develop dynamic and scalable applications with{" "}
          <b>React, Node.js, and MongoDB</b>. Experience real-world project
          structure, clean code, and deployment strategy — everything a modern
          programmer needs.
        </p>

        {/* 🌐 Buttons Section */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          {programmingTopics.map((topic) => (
            <Link key={topic.name} to={topic.link} target="_blank">
              <Button
                size="lg"
                className={`rounded-full text-sm sm:text-base text-white flex items-center gap-2 ${topic.color}`}
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5" /> {topic.name}
              </Button>
            </Link>
          ))}

          {/* 🎥 Watch Demo Button */}
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

      {/* --- 🎬 Modal for Video --- */}
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
              {/* ❌ Close Button */}
              <button
                onClick={() => setShowDemo(false)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* 🎥 Embedded YouTube Video */}
              <div className="aspect-video w-full">
                <iframe
                  src={demoProject.videoUrl}
                  title="Programming Project Demo"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* 📝 Description Section */}
              <div className="p-4 sm:p-6 text-left">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  {demoProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {demoProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
