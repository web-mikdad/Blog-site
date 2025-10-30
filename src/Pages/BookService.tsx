import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

export function BookService() {
  return (
    <section className="min-h-screen from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Book a Laptop Service
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Fill in your details and our technician will contact you within the
          next few hours.
        </p>

        <form className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-5 text-left">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
            required
          />
          <textarea
            placeholder="Describe your issue"
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
