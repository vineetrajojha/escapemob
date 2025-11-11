"use client";

import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 md:px-16 pt-40 pb-32 bg-[#0a0a0a] text-white over">
      {/* Headings */}
      <motion.h1
        className="text-4xl md:text-7xl font-semibold leading-tight tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#ccff00]">EscapeMob</span>
        <br />
        to escape the mob.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-6 text-gray-400 max-w-lg md:max-w-2xl text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Platform that helps founders market their products to the first 100k users.
      </motion.p>

      {/* Input + Button */}
      <motion.div
        className="mt-10 flex w-full max-w-md bg-[#111111] rounded-full border border-gray-800  shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Input
          type="email"
          placeholder="your@email.com"
          className="border-none focus:ring-0 px-6 py-3 text-sm text-gray-300"
        />
        <Button className="bg-[#ccff00] text-black font-medium px-6 py-3 text-sm rounded-none hover:bg-lime-400 transition">
          Join waitlist
        </Button>
      </motion.div>

      {/* Avatars + Text */}
      <motion.div
        className="flex items-center justify-center space-x-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="flex -space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full bg-gray-700 border border-[#0a0a0a]"
            />
          ))}
        </div>
        <p className="text-sm text-gray-400">450+ awesome builders are in</p>
      </motion.div>

      {/* Cards positioned around hero */}
      <div className="absolute inset-0 pointer-events-none ">
        {/* Top left */}
        <motion.div
          className="absolute left-20 top-100 w-64 h-80 rounded-2xl  shadow-lg"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <Image
            src="/demo.png"
            alt="Card 1"
            fill
            className="object-cover opacity-90"
          />
        </motion.div>

        {/* Top right */}
        <motion.div
          className="absolute right-20 top-100 w-64 h-80 rounded-2xl shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6.5 }}
        >
          <Image
            src="/demo.png"
            alt="Card 2"
            fill
            className="object-cover opacity-90"
          />
        </motion.div>

        {/* Bottom left */}
        <motion.div
          className="absolute left-32 top-150 w-80 h-56 rounded-2xl  shadow-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5.5 }}
        >
          <Image
            src="/demo.png"
            alt="Card 3"
            fill
            className="object-cover opacity-90"
          />
        </motion.div>

        {/* Bottom center */}
        <motion.div
          className="absolute left-1/2 top-170 -translate-x-1/2 w-80 h-56 rounded-2xl shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <Image
            src="/demo.png"
            alt="Card 4"
            fill
            className="object-cover opacity-90"
          />
        </motion.div>

        {/* Bottom right */}
        <motion.div
          className="absolute right-32 top-150 w-80 h-56 rounded-2xl  shadow-lg"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5.5 }}
        >
          <Image
            src="/demo.png"
            alt="Card 5"
            fill
            className="object-cover opacity-90"
          />
        </motion.div>
      </div>
    </section>
  );
}
