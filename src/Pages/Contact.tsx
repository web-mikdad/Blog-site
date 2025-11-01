import { Mail, MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Your WhatsApp number
  const WHATSAPP_NUMBER = "8801326559404"; // without + for wa.me links
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Mikdad,%20I%20found%20your%20portfolio%20and%20want%20to%20connect!`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server not responding.");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-6xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Let’s Collaborate and Create <span className="text-blue-700">Awesome Projects</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out for freelance work, collaborations, or developer discussions.
        </p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <Mail className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
            <p className="text-gray-500 mb-2">Send me your ideas</p>
            <a href="mailto:dev.mikdad@gmail.com" className="text-blue-700 font-medium">
              dev.mikdad@gmail.com
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
            <p className="text-gray-500 mb-2">Trishal,Mymensing,Bangladesh</p>
            <a href="https://maps.google.com?q=Dhaka" target="_blank" className="text-blue-700 font-medium">
              View on Map
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
            <Phone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
            <p className="text-gray-500 mb-2">Call or text anytime</p>
            <a href="tel:+8801326559404" className="text-blue-700 font-medium">
              +880 1326-559-404
            </a>
          </motion.div>

          {/* ✅ WhatsApp Dynamic Contact */}
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-green-50 dark:bg-green-900/30 backdrop-blur-lg rounded-2xl shadow-md border border-green-200 dark:border-green-800">
            <MessageCircle className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-1">WhatsApp Chat</h3>
            <p className="text-gray-500 mb-2">Instant connect</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-green-600 font-medium">
              Message on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-8 rounded-3xl shadow-lg max-w-3xl mx-auto border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Send a Direct Message
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mt-6 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <Button
            type="submit"
            className="mt-6 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl w-full transition-all duration-300"
          >
            Send Message <Send className="w-4 h-4" />
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
