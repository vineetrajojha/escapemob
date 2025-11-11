"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-16 py-32 bg-[#0a0a0a] text-white border-t border-gray-800">
      <motion.h2
        className="text-3xl md:text-5xl font-semibold leading-snug text-white/90"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Marketing is hard.
      </motion.h2>

      <motion.p
        className="mt-6 text-gray-400 max-w-3xl text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        You need first-class strategy to stand out, but product distribution is
        difficult without special skills.
      </motion.p>

      <motion.h3
        className="mt-8 text-2xl md:text-3xl font-medium text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        That’s when <span className="font-semibold text-white">Foundbase</span> comes in.
      </motion.h3>
    </section>
  );
}
