// src/Pages/BookService.tsx
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useParams } from "react-router-dom";
import { useState } from "react";

export function BookService() {
  const { serviceName } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`✅ Booking request sent for ${serviceName || "General Service"}!`);
    setFormData({ name: "", email: "", phone: "", issue: "" });
  };

  return (
    <section className="min-h-screen from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Book a Programmer’s Service
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          {serviceName
            ? `You’re booking for: ${serviceName}`
            : "Select a service to get started."}
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-5 text-left"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
            required
          />
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            placeholder="Describe your project or issue"
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
            rows={4}
            required
          ></textarea>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  );
}
