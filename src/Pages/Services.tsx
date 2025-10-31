import {
  Code,
  Globe,
  Smartphone,
  Database,
  Paintbrush,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export function Services() {
  const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive, fast, and user-friendly web interfaces using React, Next.js, and Tailwind CSS for a seamless user experience.",
    icon: <Code className="w-8 h-8 text-blue-500" />,
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    path: "/services/frontend",
  },
  {
    title: "Backend Development",
    desc: "Creating powerful, secure, and scalable backends using Node.js, Express, and MongoDB to support your digital products.",
    icon: <Database className="w-8 h-8 text-green-500" />,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    path: "/services/backend",
  },
  {
    title: "Full Stack Projects",
    desc: "From concept to deployment — I handle both frontend and backend, ensuring your web app performs perfectly across all devices.",
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
    path: "/services/fullstack",
  },
  {
    title: "UI/UX Design",
    desc: "Designing modern, intuitive interfaces with strong focus on usability, accessibility, and aesthetic balance.",
    icon: <Paintbrush className="w-8 h-8 text-pink-500" />,
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80",
    path: "/services/uiux",
  },
  {
    title: "Mobile Responsive Design",
    desc: "Making sure every web application is fully optimized for mobile, tablet, and desktop with fluid design and smooth animations.",
    icon: <Smartphone className="w-8 h-8 text-teal-500" />,
    // ✅ FIXED: new, clean, high-quality mobile workspace image
    img: "https://images.unsplash.com/photo-1609921212029-823f7c36293d?auto=format&fit=crop&w=1000&q=80",
    path: "/services/responsive",
  },
  {
    title: "Cloud & Deployment",
    desc: "Deploying and managing web apps on modern cloud platforms like Vercel, Netlify, and AWS for scalability and reliability.",
    icon: <Cloud className="w-8 h-8 text-yellow-500" />,
    // ✅ FIXED: modern cloud infrastructure background
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1000&q=80",
    path: "/services/cloud",
  },
];

  const pricing = [
    {
      name: "Starter Plan",
      price: "$199",
      features: [
        "Single-page web design",
        "Responsive layout",
        "Basic SEO setup",
      ],
    },
    {
      name: "Professional Plan",
      price: "$499",
      features: [
        "Multi-page site or portfolio",
        "Full-stack functionality",
        "Performance optimization",
      ],
    },
    {
      name: "Premium Plan",
      price: "$899",
      features: [
        "Custom design system",
        "API integration",
        "Cloud deployment & support",
      ],
    },
  ];

  return (
    <section className="relative py-24 from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-[140px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          Developer Services I Provide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16"
        >
          From crafting high-performing websites to scalable web apps — I deliver
          end-to-end digital solutions using modern web technologies.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl bg-white/80 dark:bg-gray-800 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100 dark:border-gray-700">
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 dark:bg-gray-900/80 p-3 rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="text-left p-5">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                </CardHeader>
                <CardContent className="text-left px-5 pb-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Learn More */}
                  <div className="flex gap-2">
                    <Link to={service.path} className="w-1/2">
                      <Button className="w-full from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-md">
                        Learn More
                      </Button>
                    </Link>

                    {/* Book Now (Dynamic) */}
                    <Link
                      to={`/book-service/${encodeURIComponent(service.title)}`}
                      className="w-1/2"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium shadow-md">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
            Flexible Project Pricing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-transform hover:-translate-y-2"
              >
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {plan.name}
                </h4>
                <p className="text-4xl font-bold text-blue-600 mb-6">
                  {plan.price}
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-left mb-6 space-y-2">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-green-500">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/book-service/${encodeURIComponent(plan.name)}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Choose Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 from-blue-700 to-indigo-700 text-white py-12 px-8 rounded-3xl shadow-xl max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">Let’s Build Something Great</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Have a project idea? Let’s collaborate to create a beautiful,
            high-performance web experience that brings your vision to life.
          </p>

          {/* ✅ Fixed Book Now Button */}
          <Link to="/book-service">
            <Button className="mt-4 w-[95px] p-6 text-bold bg-black text-blue-700 font-semibold hover:bg-gray-100">
              Get in teach
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
