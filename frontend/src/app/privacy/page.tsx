"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative w-full transition-colors duration-300">
            <Navbar />

            <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 dark:text-white">Privacy <span className="italic font-serif text-slate-500 dark:text-muted-foreground">Policy</span></h1>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-gray-300 space-y-6">
                    <p className="text-lg font-medium">Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">1. Introduction</h2>
                        <p>Welcome to EscapeMob. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">2. The Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                        <p className="font-medium mt-2">Email: hello@escapemob.com</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
