"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
    Menu, X, ChevronDown, 
    Code, Palette, TrendingUp, Megaphone, Smartphone, Layout, Globe, Star, FileText, ArrowRight, Video, Mail, MessageCircle, BarChart, PenTool, Image as ImageIcon, Database, Cloud, BookOpen, ShoppingCart, Home as HomeIcon, Coffee, Heart, Briefcase, Phone, Instagram, Facebook, Twitter, Linkedin
} from "lucide-react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Button from "./Button";

const servicesCategories = [
    {
        title: "Web Development",
        items: [
            "Website Design", "App Design", "UI/UX Design", "Website Re-Design",
            "Landing Page Design", "E-commerce Website Development", "App Development",
            "Software Development", "Custom Development"
        ]
    },
    {
        title: "Graphics & Video",
        items: [
            "Logo & Brand Identity Design", "Brochure Design", "Social Media Promotion Creatives",
            "Web Banner Design", "Trifold Design", "Bifold Design", "Custom Design Services",
            "Animation & Video Production"
        ]
    },
    {
        title: "Digital Marketing",
        items: [
            "Search Engine Optimization (SEO)", "Search Engine Marketing (SEM)",
            "Social Media Marketing (SMM)", "Influencer Marketing", "Video Marketing",
            "E-commerce Marketing", "Email Marketing", "Guest Posting", "Affiliate Marketing"
        ]
    },
    {
        title: "Promotions",
        items: [
            "WhatsApp Marketing", "Bulk SMS Services", "Toll-Free Number Services",
            "Google Ads Management", "Facebook Ads Management", "Instagram Ads Management",
            "Remarketing / Retargeting Campaigns", "E-mail Marketing"
        ]
    }
];

const technologiesCategories = [
    {
        title: "Mobile App Development",
        items: ["Android App", "Flutter App", "React Native App", "iOS App", "Ionic", "Swift"]
    },
    {
        title: "Frameworks",
        items: ["Laravel", "CodeIgniter", "Django", "Ruby on Rails"]
    },
    {
        title: "Frontend Technologies",
        items: ["React.js", "Vue.js", "AngularJS", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "Tailwind CSS"]
    },
    {
        title: "Full Stack Technologies",
        items: ["MERN Stack", "MEAN Stack", "LAMP Stack"]
    },
    {
        title: "CMS & E-Commerce Platforms",
        items: ["Joomla", "Drupal", "WordPress", "Magento", "OpenCart", "Shopify", "WooCommerce"]
    },
    {
        title: "Backend Technologies",
        items: ["Node.js", "Python", "Golang", "PHP", ".NET", "Java"]
    },
    {
        title: "DevOps & Emerging Technologies",
        items: ["DevOps Development", "Machine Learning", "Artificial Intelligence", "Cloud Computing", "API Integration"]
    },
    {
        title: "Graphic Design",
        items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"]
    },
    {
        title: "Video Editing",
        items: ["Adobe Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "Filmora", "CapCut"]
    },
    {
        title: "Motion Graphics & VFX",
        items: ["Adobe After Effects", "Blender"]
    },
    {
        title: "UI/UX Design",
        items: ["Figma", "Framer"]
    },
    {
        title: "Content Creation & Social Media",
        items: ["Canva", "CapCut", "Adobe Express", "Meta Business Suite", "Google Analytics", "Google Tag Manager"]
    }
];

const industriesItems = [
    "Education", "E-Commerce", "Real Estate", "Hospitality", "Health", "Services | Product", "& Others"
];

const getIconForService = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('design')) return PenTool;
    if (t.includes('app')) return Smartphone;
    if (t.includes('video') || t.includes('animation')) return Video;
    if (t.includes('social') || t.includes('facebook') || t.includes('instagram')) return MessageCircle;
    if (t.includes('mail') || t.includes('sms')) return Mail;
    if (t.includes('seo') || t.includes('sem') || t.includes('marketing')) return BarChart;
    if (t.includes('logo') || t.includes('banner')) return ImageIcon;
    return FileText;
};

const getIconForTech = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('mobile')) return Smartphone;
    if (t.includes('front')) return Layout;
    if (t.includes('back')) return Database;
    if (t.includes('full')) return Globe;
    if (t.includes('cms')) return FileText;
    if (t.includes('devops')) return Cloud;
    if (t.includes('graphic')) return Palette;
    if (t.includes('video') || t.includes('motion')) return Video;
    if (t.includes('ui')) return PenTool;
    return Code;
};

const getIconForIndustry = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('education')) return BookOpen;
    if (t.includes('commerce')) return ShoppingCart;
    if (t.includes('estate')) return HomeIcon;
    if (t.includes('hospitality')) return Coffee;
    if (t.includes('health')) return Heart;
    return Briefcase;
};

const MenuItem = ({ title, description, icon: Icon, href = "/#services", onClick }: any) => (
    <Link href={href} onClick={onClick} className="group/item flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 transition-colors">
        <div className="flex-shrink-0 w-11 h-11 relative rounded-[10px] p-[1px] bg-[#0c0d0d] shadow-sm">
            <div className="relative h-full w-full rounded-[9px] border border-[#202222] bg-[#0c0d0d] overflow-hidden flex items-center justify-center text-gray-400 group-hover/item:text-white transition-colors duration-300">
                <div className="absolute top-0 left-0 w-[20px] h-[5px] bg-[#c7c7c7] opacity-40 blur-[3px] rounded-[100px] rotate-[40deg] origin-[10%_0%] shadow-[0_0_10px_#fff]" />
                <Icon size={20} strokeWidth={1.5} className="relative z-10 transition-transform duration-300 group-hover/item:scale-110" />
            </div>
        </div>
        <div className="flex flex-col pt-0.5">
            <span className="text-[14px] font-semibold text-slate-900 dark:text-gray-100 leading-tight group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">{title}</span>
            {description && <span className="text-[13px] text-slate-500 dark:text-gray-400 mt-1 leading-snug">{description}</span>}
        </div>
    </Link>
);

const BottomBar = ({ text, highlightText }: { text: string, highlightText: string }) => (
    <div className="bg-white dark:bg-[#121314] border-t border-slate-100 dark:border-white/10 p-5 px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative rounded-[10px] p-[1px] bg-[#0c0d0d] shadow-sm flex-shrink-0">
                <div className="relative w-full h-full rounded-[9px] border border-[#202222] bg-[#0c0d0d] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute top-0 left-0 w-[15px] h-[4px] bg-[#c7c7c7] opacity-40 blur-[2px] rounded-full rotate-[40deg] origin-[10%_0%] shadow-[0_0_10px_#fff]" />
                    <Star size={18} className="relative z-10 text-gray-200 fill-white" />
                </div>
            </div>
            <span className="text-[15px] font-medium text-slate-900 dark:text-gray-100">
                {text} <span className="text-slate-500 dark:text-gray-400 font-normal">{highlightText}</span>
            </span>
        </div>
        <Link href="/#contact" className="w-full sm:w-auto">
            <Button variant="primary" className="!py-2.5 !px-6 text-[14px] w-full justify-center">
                Get Started
            </Button>
        </Link>
    </div>
);

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenMobileSection(null);
    };

    const toggleMobileSection = (section: string) => {
        setOpenMobileSection(openMobileSection === section ? null : section);
    };

    const menuVariants: Variants = {
        closed: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
        open: { opacity: 1, y: "0%", transition: { duration: 0.5, ease: "easeInOut" } }
    };

    const linkVariants: Variants = {
        closed: { opacity: 0, y: 20 },
        open: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.1, duration: 0.4, ease: "easeInOut" } })
    };

    return (
        <header className="fixed top-0 w-full z-50">
            {/* Announcement Bar */}
            <div className="hidden lg:flex w-full bg-[#0c0d0d] border-b border-[#202222] py-2 px-8 items-center justify-between text-[13px] font-medium text-gray-300 z-50 relative">
                <div className="flex items-center gap-6">
                    <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Phone size={14} className="text-blue-400" />
                        +91 9999999999
                    </a>
                    <a href="mailto:teamescapemob@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                        <Mail size={14} className="text-purple-400" />
                        teamescapemob@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[#EBEBEB]/60">Follow us:</span>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={14} /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={14} /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={14} /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={14} /></a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="w-full flex justify-center pt-4 px-4">
                <nav className={`relative transition-all duration-300 rounded-full px-4 py-2 flex items-center justify-between w-full max-w-[1400px] shadow-sm border ${scrolled ? "bg-white dark:bg-black/80 backdrop-blur-md border-slate-200 dark:border-white/10" : "bg-white/90 dark:bg-black/50 backdrop-blur-sm border-transparent"}`}>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 pl-2" onClick={closeMobileMenu}>
                    <img
                        src="/logo-light.png"
                        alt="EscapeMob"
                        className="h-14 md:h-16 w-auto object-contain dark:hidden"
                    />
                    <img
                        src="/logo-dark.png"
                        alt="EscapeMob"
                        className="h-14 md:h-16 w-auto object-contain hidden dark:block"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-[15px] font-medium text-slate-600 dark:text-gray-300 static">
                    <Link href="/#home" className="hover:text-slate-900 dark:hover:text-white transition-colors py-4">Home</Link>
                    <Link href="/#about" className="hover:text-slate-900 dark:hover:text-white transition-colors py-4">About</Link>
                    
                    {/* Services Mega Menu */}
                    <div className="group/services py-4 static">
                        <button className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Services <ChevronDown className="w-4 h-4 transition-transform group-hover/services:rotate-180" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] pt-4 opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300 ease-in-out z-50 cursor-default">
                            <div className="bg-white dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="flex-[3] p-10 grid grid-cols-3 gap-x-12 gap-y-6 bg-white dark:bg-[#0c0d0d]">
                                        {servicesCategories.slice(0, 3).map((cat, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-6">{cat.title}</h3>
                                                <div className="flex flex-col space-y-2">
                                                    {cat.items.slice(0, 6).map((item, i) => (
                                                        <MenuItem key={i} title={item} href="/#services" icon={getIconForService(item)} description={`Professional ${item.toLowerCase()} solutions.`} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex-[1] p-10 bg-[#f8faff] dark:bg-[#121314] border-l border-slate-100 dark:border-white/10">
                                        <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-6">Explore {servicesCategories[3].title}</h3>
                                        <div className="flex flex-col space-y-2">
                                            {servicesCategories[3].items.slice(0, 6).map((item, i) => (
                                                <MenuItem key={i} title={item} href="/#services" icon={getIconForService(item)} description="Boost your business reach." />
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-blue-100/60 dark:border-white/10">
                                            <Link href="/#services" className="text-[14px] font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1.5 group/link">
                                                See All Promotional Services <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <BottomBar text="Want Free Leads?" highlightText="Take our services for a test drive." />
                            </div>
                        </div>
                    </div>

                    {/* Technologies Mega Menu */}
                    <div className="group/tech py-4 static">
                        <button className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Technologies <ChevronDown className="w-4 h-4 transition-transform group-hover/tech:rotate-180" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-[1200px] pt-4 opacity-0 invisible group-hover/tech:opacity-100 group-hover/tech:visible transition-all duration-300 ease-in-out z-50 cursor-default">
                            <div className="bg-white dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                                <div className="flex flex-col lg:flex-row">
                                    <div className="flex-[3] p-10 grid grid-cols-3 gap-x-12 gap-y-6 bg-white dark:bg-[#0c0d0d]">
                                        <div className="flex flex-col space-y-4">
                                            <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">Development</h3>
                                            {technologiesCategories.slice(0, 4).map((cat, idx) => (
                                                <MenuItem key={idx} href="/#technologies" title={cat.title} description={cat.items.slice(0, 3).join(", ") + (cat.items.length > 3 ? "..." : "")} icon={getIconForTech(cat.title)} />
                                            ))}
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">Platforms</h3>
                                            {technologiesCategories.slice(4, 8).map((cat, idx) => (
                                                <MenuItem key={idx} href="/#technologies" title={cat.title} description={cat.items.slice(0, 3).join(", ") + (cat.items.length > 3 ? "..." : "")} icon={getIconForTech(cat.title)} />
                                            ))}
                                        </div>
                                        <div className="flex flex-col space-y-4">
                                            <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">Creative & Media</h3>
                                            {technologiesCategories.slice(8, 12).map((cat, idx) => (
                                                <MenuItem key={idx} href="/#technologies" title={cat.title} description={cat.items.slice(0, 3).join(", ") + (cat.items.length > 3 ? "..." : "")} icon={getIconForTech(cat.title)} />
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex-[1] p-10 bg-[#f8faff] dark:bg-[#121314] border-l border-slate-100 dark:border-white/10">
                                        <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-6">Explore Tech Stack</h3>
                                        <div className="flex flex-col space-y-4">
                                            <div className="relative group w-full p-[1px] rounded-[15px] bg-[#0c0d0d] shadow-xl overflow-hidden">
                                                <div className="relative h-full w-full rounded-[14px] border border-[#202222] bg-[#0c0d0d] bg-[#0c0d0d] p-5 flex flex-col items-center text-center">
                                                    <div className="absolute top-0 left-0 w-[60px] h-[15px] bg-[#c7c7c7] opacity-30 blur-[8px] rounded-full rotate-[40deg] origin-[10%_0%] shadow-[0_0_20px_#fff]" />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
                                                    <div className="relative z-10 w-12 h-12 border border-blue-500/50 text-blue-400 rounded-full flex items-center justify-center mb-4 bg-white/5">
                                                        <Layout size={22} />
                                                    </div>
                                                    <h4 className="relative z-10 text-[15px] font-bold text-white">Custom Architecture</h4>
                                                    <p className="relative z-10 text-[13px] text-gray-400 mt-2 leading-relaxed">We build robust solutions tailored to your unique scaling needs.</p>
                                                </div>
                                            </div>

                                            <div className="relative group w-full p-[1px] rounded-[15px] bg-[#0c0d0d] shadow-xl overflow-hidden">
                                                <div className="relative h-full w-full rounded-[14px] border border-[#202222] bg-[#0c0d0d] bg-[#0c0d0d] p-5 flex flex-col items-center text-center">
                                                    <div className="absolute top-0 left-0 w-[60px] h-[15px] bg-[#c7c7c7] opacity-30 blur-[8px] rounded-full rotate-[40deg] origin-[10%_0%] shadow-[0_0_20px_#fff]" />
                                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent" />
                                                    <div className="relative z-10 w-12 h-12 border border-purple-500/50 text-purple-400 rounded-full flex items-center justify-center mb-4 bg-white/5">
                                                        <Globe size={22} />
                                                    </div>
                                                    <h4 className="relative z-10 text-[15px] font-bold text-white">Global Deployment</h4>
                                                    <p className="relative z-10 text-[13px] text-gray-400 mt-2 leading-relaxed">Deploy securely on AWS, GCP, Azure with zero downtime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <BottomBar text="Need a custom tech stack?" highlightText="Consult with our system architects." />
                            </div>
                        </div>
                    </div>

                    {/* Industries Dropdown */}
                    <div className="group/industries py-4 static">
                        <button className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Industries <ChevronDown className="w-4 h-4 transition-transform group-hover/industries:rotate-180" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] pt-4 opacity-0 invisible group-hover/industries:opacity-100 group-hover/industries:visible transition-all duration-300 ease-in-out z-50 cursor-default">
                            <div className="bg-white dark:bg-[#0c0d0d] border border-slate-200 dark:border-white/10 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                                <div className="p-8 grid grid-cols-2 gap-x-12 gap-y-6 bg-white dark:bg-[#0c0d0d]">
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">Core Sectors</h3>
                                        {industriesItems.slice(0, 4).map((item, idx) => (
                                            <MenuItem key={idx} href="/#services" title={item} description={`Specialized solutions for ${item.toLowerCase()}`} icon={getIconForIndustry(item)} />
                                        ))}
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <h3 className="text-[12px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4">More Industries</h3>
                                        {industriesItems.slice(4, 7).map((item, idx) => (
                                            <MenuItem key={idx} href="/#services" title={item} description={`Tailored for ${item.toLowerCase()}`} icon={getIconForIndustry(item)} />
                                        ))}
                                    </div>
                                </div>
                                <BottomBar text="Don't see your industry?" highlightText="We can build it for you." />
                            </div>
                        </div>
                    </div>

                    <Link href="/#testimonials" className="hover:text-slate-900 dark:hover:text-white transition-colors py-4">Testimonials</Link>
                    <Link href="/projects" className="hover:text-slate-900 dark:hover:text-white transition-colors py-4">Projects</Link>
                    <Link href="/career" className="hover:text-slate-900 dark:hover:text-white transition-colors py-4">Career</Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Link href="#contact">
                        <Button variant="primary" className="!py-2.5 !px-5 text-sm">
                            Get a Quote
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-slate-900 p-2 z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col pt-32 pb-8 px-6 lg:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 w-full max-w-md mx-auto pb-12">
                            <motion.div custom={0} variants={linkVariants}>
                                <Link href="/#home" className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block" onClick={closeMobileMenu}>Home</Link>
                            </motion.div>
                            <motion.div custom={1} variants={linkVariants}>
                                <Link href="/#about" className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block" onClick={closeMobileMenu}>About</Link>
                            </motion.div>
                            
                            {/* Mobile Services Accordion */}
                            <motion.div custom={2} variants={linkVariants}>
                                <button 
                                    className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                                    onClick={() => toggleMobileSection('services')}
                                >
                                    Services
                                    <ChevronDown className={`w-6 h-6 transition-transform ${openMobileSection === 'services' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openMobileSection === 'services' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden mt-6"
                                        >
                                            <div className="pb-2 space-y-6 pl-4 border-l-2 border-slate-100 dark:border-white/10">
                                                {servicesCategories.map((cat, idx) => (
                                                    <div key={idx}>
                                                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-3">{cat.title}</h4>
                                                        <ul className="space-y-4">
                                                            {cat.items.slice(0, 5).map((item, i) => (
                                                                <li key={i}>
                                                                    <Link href="/#services" className="text-slate-600 dark:text-gray-300 font-medium text-[15px] block hover:text-blue-600 dark:hover:text-blue-400" onClick={closeMobileMenu}>{item}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Mobile Technologies Accordion */}
                            <motion.div custom={3} variants={linkVariants}>
                                <button 
                                    className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                                    onClick={() => toggleMobileSection('technologies')}
                                >
                                    Technologies
                                    <ChevronDown className={`w-6 h-6 transition-transform ${openMobileSection === 'technologies' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openMobileSection === 'technologies' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden mt-6"
                                        >
                                            <div className="pb-2 space-y-6 pl-4 border-l-2 border-slate-100 dark:border-white/10">
                                                {technologiesCategories.slice(0, 6).map((cat, idx) => (
                                                    <div key={idx}>
                                                        <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-2">{cat.title}</h4>
                                                        <p className="text-slate-600 dark:text-gray-300 text-[14px] leading-relaxed pr-4">{cat.items.join(", ")}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Mobile Industries Accordion */}
                            <motion.div custom={4} variants={linkVariants}>
                                <button 
                                    className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                                    onClick={() => toggleMobileSection('industries')}
                                >
                                    Industries
                                    <ChevronDown className={`w-6 h-6 transition-transform ${openMobileSection === 'industries' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openMobileSection === 'industries' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden mt-6"
                                        >
                                            <div className="pb-2 space-y-4 pl-4 border-l-2 border-slate-100 dark:border-white/10">
                                                {industriesItems.map((item, idx) => (
                                                    <Link key={idx} href="/#services" className="text-slate-600 dark:text-gray-300 font-medium text-[15px] block hover:text-blue-600 dark:hover:text-blue-400" onClick={closeMobileMenu}>{item}</Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            <motion.div custom={5} variants={linkVariants}>
                                <Link href="/#testimonials" className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block" onClick={closeMobileMenu}>Testimonials</Link>
                            </motion.div>

                            <motion.div custom={6} variants={linkVariants}>
                                <Link href="/projects" className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block" onClick={closeMobileMenu}>Projects</Link>
                            </motion.div>

                            <motion.div custom={7} variants={linkVariants}>
                                <Link href="/career" className="text-2xl font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block" onClick={closeMobileMenu}>Career</Link>
                            </motion.div>

                            <motion.div custom={7} variants={linkVariants} className="mt-8">
                                <Link href="#contact" onClick={closeMobileMenu} className="w-full block">
                                    <Button variant="primary" className="!py-4 text-lg w-full">
                                        Get a Quote
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
