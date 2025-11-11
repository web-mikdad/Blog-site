import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";

export default function SubAboutPage() {
  const mikdad = {
    name: "Mikdad Bin Mansur",
    age: 22, 
    profession: "Web Developer",
    education: "BSc in Computer Science (Ongoing)",
    location: "Dhaka, Bangladesh",
    image: "./image.png",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
  };

  return (
    <div className="relative min-h-screen from-blue-50 via-slate-100 to-blue-100 flex flex-col items-center py-20 px-6">
      {/* Decorative Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-900 mb-8"
      >
        Meet <span className="text-blue-800">Mikdad Bin Mansur</span>
        <br />
        <span className="text-lg font-medium text-gray-600">
          {mikdad.profession} | Age {mikdad.age}
        </span>
      </motion.h1>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-gray-100">
        {/* Left - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 from-blue-400 to-indigo-400 rounded-full blur-2xl opacity-60 -z-10"></div>
          <img
            src={mikdad.image}
            alt={mikdad.name}
            className="w-50 h-50 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </motion.div>

        {/* Right - Info & Bio */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-5 text-gray-700 max-w-xl"
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            Hello! I'm <span className="text-blue-800">{mikdad.name}</span>
          </h2>
          <p className="text-base leading-relaxed">
            I’m a <strong>{mikdad.age}-year-old</strong> student and{" "}
            <strong>{mikdad.profession}</strong> passionate about building clean,
            interactive, and performance-optimized web applications. Currently
            pursuing <strong>{mikdad.education}</strong>, I love turning complex
            problems into elegant user interfaces that deliver real impact.
          </p>
          <p className="text-base leading-relaxed">
            Over the last few years, I’ve built and contributed to multiple web
            projects using modern technologies like{" "}
            <strong>React, Tailwind, TypeScript</strong>, and{" "}
            <strong>Next.js</strong>. I enjoy working on both front-end and
            back-end development, constantly learning and improving my craft.
          </p>

          {/* Skills Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Core Skills:
            </h3>
            <div className="flex flex-wrap gap-2">
              {mikdad.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Button className="bg-blue-800 text-white hover:bg-blue-900 transition">
              View My Projects
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 text-center text-gray-600 max-w-3xl leading-relaxed"
      >
        “I believe great design isn’t just about how something looks — it’s about
        how it works. My goal as a developer is to make technology feel seamless,
        intuitive, and human.”
      </motion.p>
    </div>
  );
}
