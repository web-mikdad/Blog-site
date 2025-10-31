import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
// import { BackgroundPattern } from "../../Modules/Background";
import { ArrowRight } from "lucide-react";
import aboutImage from "./image.png"; // ✅ Place img.jpg in the same folder

const aboutSections = [
  {
    title: "✨ Customizable Layouts",
    desc: "Easily personalize every section with Tailwind’s design tokens for colors, typography, and spacing.",
  },
  {
    title: "⚡ Performance Driven",
    desc: "Optimized, fast-loading interfaces with smooth animations and clean architecture.",
  },
  {
    title: "🧩 Modular Components",
    desc: "Reusable Shadcn UI components for professional and scalable layouts.",
  },
  {
    title: "🌐 Fully Responsive",
    desc: "Perfect responsiveness across mobile, tablet, and large screens.",
  },
];

const AboutPage = () => {
  return (
    <div className="relative mb-20 mt-24 flex items-center justify-center px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-20">
        {/* <BackgroundPattern /> */}
      </div>

      {/* Soft studio-like gradient background */}
      <div className="absolute inset-0 -z-10  from-blue-100 via-white to-indigo-100"></div>

      {/* Main content wrapper */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-12">
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Build <span className="text-blue-900">Professional</span> Digital Experiences
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            I’m <span className="font-semibold text-blue-900">Mikdad Hasan</span> — a 22-year-old passionate web developer and student. 
            I craft web experiences that combine clean aesthetics with solid performance. 
            My goal is to design and build digital products that are smooth, efficient, and visually pleasing.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {aboutSections.map((item, i) => (
              <div
                key={i}
                className="p-5 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              asChild
              className="bg-blue-950 text-white hover:bg-blue-800 transition-all duration-300 px-6 py-3 rounded-xl shadow-md"
            >
              <Link to="/subaboutpage" className="flex items-center gap-2">
                Know More About Me <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
            {/* RIGHT IMAGE SECTION */}
<div className="relative max-w-md w-full group mt-10">
  {/* Soft glow behind the image */}
  <div className="absolute inset-0 blur-3xl bg-linear-to-br from-blue-200 via-white to-blue-300 opacity-50 -z-10 rounded-full"></div>

  {/* Image container (no border, no background) */}
  <div className="relative transition-transform duration-500 group-hover:scale-[1.04]">
    <img
      src={aboutImage}
      alt="Mikdad Hasan portrait"
      className="object-cover w-full h-80 md:h-120 rounded-3xl drop-shadow-2xl bg-transparent"
      style={{
        maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)",
      }}
    />
  </div>

  {/* Floating overlay text */}
  <div className="text-center md:text-left mt-6">
    <h3 className="text-lg font-semibold text-blue-900 mb-2">
      “Code is not just logic — it’s design in motion.”
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      I believe in building digital experiences that feel alive, purposeful, 
      and user-focused — where every detail speaks design and intent.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutPage;
