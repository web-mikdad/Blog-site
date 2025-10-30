import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { BackgroundPattern } from "../../Modules/Background";

const AboutPage = () => {
  return (
    <div className="relative mb-12 mt-20 flex items-center justify-center px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <BackgroundPattern />
      </div>

      {/* Content Wrapper */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-12">
        
        {/* LEFT SECTION - Text Content */}
        <div className="text-center md:text-left max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Build Stunning Interfaces with Tailored Shadcn UI Components
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Welcome to our design lab — where minimalism meets flexibility. 
            We craft modular Shadcn UI components and templates that adapt 
            seamlessly to your product’s identity. From landing pages to dashboards, 
            our components are optimized for performance, accessibility, and elegance.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">✨ Customizable Layouts</h3>
              <p className="text-sm text-gray-600">
                Every section is flexible — adjust colors, typography, and spacing with ease using Tailwind’s design tokens.
              </p>
            </div>

            <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">⚡ Performance Driven</h3>
              <p className="text-sm text-gray-600">
                Our components are built lightweight and optimized for fast rendering, ensuring top Core Web Vitals.
              </p>
            </div>

            <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">🧩 Modular Components</h3>
              <p className="text-sm text-gray-600">
                Mix and match modular blocks to build your UI in minutes without losing design consistency.
              </p>
            </div>

            <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">🌐 Fully Responsive</h3>
              <p className="text-sm text-gray-600">
                Enjoy a pixel-perfect experience across all devices — from desktops to mobile screens.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Button className="bg-blue-950 text-white hover:bg-blue-800 transition">
              <Link to="/subaboutpage">Explore My Work</Link>
            </Button>
          </div>
        </div>

        {/* RIGHT SECTION - Image + Article */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Design in Action</h2>
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border bg-white">
            <img
              src="./laptop.jpg"
              alt="Design preview"
              className="object-cover w-full h-64"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-blue-900">
                How UI Simplicity Drives User Engagement
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Simplicity in design isn’t about removing features — it’s about 
                focusing on what truly matters. Learn how our design philosophy 
                enhances clarity, boosts conversions, and delights users through subtle microinteractions.
              </p>
              <Link
                to="/blog/ui-simplicity"
                className="text-blue-600 font-medium hover:underline"
              >
                Read the full article →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
