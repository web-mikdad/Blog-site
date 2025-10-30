import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Code, Cpu, ShieldCheck, Database, Cloud, Wrench } from "lucide-react";

const serviceData: Record<
  string,
  {
    title: string;
    img: string;
    desc: string;
    details: string[];
    icon: React.ReactNode;
  }
> = {
  "frontend-development": {
    title: "Frontend Development",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    desc: "Crafting pixel-perfect, responsive, and high-performance user interfaces with React, Next.js, and Tailwind CSS.",
    details: [
      "Modern and fast UI with React & Next.js",
      "Clean, reusable component architecture",
      "Responsive and mobile-friendly design",
      "Animations with Framer Motion",
    ],
    icon: <Code className="w-10 h-10 text-blue-500" />,
  },
  "backend-development": {
    title: "Backend Development",
    img: "https://images.unsplash.com/photo-1629909614174-42c02a12e7c2?auto=format&fit=crop&w=1200&q=80",
    desc: "Building powerful and secure backend APIs that scale — powered by Node.js, Express, and MongoDB.",
    details: [
      "RESTful & GraphQL APIs",
      "Authentication & JWT security",
      "Database design & optimization",
      "Scalable server architecture",
    ],
    icon: <Cpu className="w-10 h-10 text-purple-500" />,
  },
  "database-design": {
    title: "Database Design & Integration",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
    desc: "Designing structured and efficient databases for your apps with MySQL, PostgreSQL, or MongoDB.",
    details: [
      "Schema planning & relationships",
      "ORM setup (Prisma / Mongoose)",
      "Data migration & optimization",
      "Backup & recovery solutions",
    ],
    icon: <Database className="w-10 h-10 text-green-500" />,
  },
  "cloud-deployment": {
    title: "Cloud & DevOps Deployment",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    desc: "Deploying and scaling web apps with cloud platforms — AWS, Vercel, or DigitalOcean.",
    details: [
      "CI/CD pipelines setup",
      "Docker & containerization",
      "Vercel & Netlify deployment",
      "Server monitoring & logs",
    ],
    icon: <Cloud className="w-10 h-10 text-cyan-500" />,
  },
  "security-optimization": {
    title: "Security & Performance Optimization",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    desc: "Optimizing performance and hardening app security through best practices and advanced tools.",
    details: [
      "OWASP security implementation",
      "Code minification & lazy loading",
      "SEO and Core Web Vitals tuning",
      "HTTPS, CORS & rate limiting",
    ],
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    img: "https://images.unsplash.com/photo-1581091012184-7c54c3b8f9f8?auto=format&fit=crop&w=1200&q=80",
    desc: "Ongoing monitoring, updates, and technical support to ensure smooth and reliable app performance.",
    details: [
      "Bug fixing & updates",
      "Performance monitoring",
      "Feature enhancement",
      "Technical consultation",
    ],
    icon: <Wrench className="w-10 h-10 text-orange-500" />,
  },
};

export function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
          🚫 Service Not Found
        </h2>
        <Link to="/services">
          <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="relative py-24 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-xl mb-12 relative"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-900/80 p-4 rounded-full shadow-md">
            {service.icon}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
            {service.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
            {service.desc}
          </p>

          <Card className="bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-8">
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-base">
                {service.details.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-500">✔</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-5 mt-10">
            <Link to="/book-service">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium text-lg">
                Book This Service
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-8 py-3 text-lg"
              >
                Back to All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
