"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      className="flex items-center justify-between px-6 md:px-16 py-6 w-full text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Right Menu */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="#"
          className="border border-gray-600 hover:border-gray-400 transition-colors rounded-full px-6 py-2 text-sm"
        >
          Join
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </motion.nav>
  );
}
