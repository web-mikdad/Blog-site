import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

const footerLinks = [
  { title: "Overview", href: "/" },
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Careers", href: "/careers" },
  { title: "Help", href: "/help" },
  { title: "Privacy", href: "/privacy" },
];

const Footer = () => {
  const location = useLocation();

  return (
    <div className="mt-6 flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t w-full relative overflow-hidden">
        {/* 🌈 Animated Gradient Line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-r from-indigo-500 via-sky-400 to-purple-600"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* 🪶 Logo and Links */}
          <div className="py-6 flex flex-col justify-start items-center text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <svg
                id="logo-7"
                width="124"
                height="32"
                viewBox="0 0 124 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full h-auto transition-transform hover:scale-105 duration-300"
              >
                <path
                  d="M36.87 10.07H39.87V22.2H36.87V10.07Z..."
                  className="fill-foreground"
                />
                <path
                  d="M28.48 10.62C27.9711 9.45636..."
                  className="fill-foreground"
                />
              </svg>
            </div>

            {/* 🔗 Footer Links */}
            <ul className="mt-6 flex flex-wrap justify-center sm:justify-start items-center gap-5 text-sm font-medium px-2">
              {footerLinks.map(({ title, href }) => {
                const isActive = location.pathname === href;
                return (
                  <li key={title}>
                    <Link
                      to={href}
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-indigo-600 font-semibold underline underline-offset-4"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Separator />

          {/* ⚙️ Bottom Section */}
          <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-4 gap-y-5 w-full">
            {/* 📜 Copyright */}
            <span className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()}{" "}
              <Link to="/" className="hover:text-foreground font-medium">
                Mikdad Hasan
              </Link>{" "}
              — All Rights Reserved.
            </span>

            {/* 🌐 Social Links */}
            <div className="flex items-center gap-5 text-muted-foreground">
              {[TwitterIcon, DribbbleIcon, TwitchIcon, GithubIcon].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    to="#"
                    target="_blank"
                    className="hover:text-foreground transition-transform hover:scale-110"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
