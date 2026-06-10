"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative w-full transition-colors duration-300">
            <Navbar />

            <div className="pt-40 pb-20 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 dark:text-white">Terms & <span className="italic font-serif text-slate-500 dark:text-muted-foreground">Conditions</span></h1>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-gray-300 space-y-6">
                    <p className="text-lg font-medium">Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">2. Provision of Services</h2>
                        <p>EscapeMob is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which EscapeMob provides may change from time to time without prior notice to you.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">3. Use of the Website</h2>
                        <p>You agree to use the website only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>You must not use the website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
                            <li>You must not use the website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">4. Intellectual Property</h2>
                        <p>The website and its original content, features, and functionality are owned by EscapeMob and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4">5. Limitation of Liability</h2>
                        <p>In no event shall EscapeMob, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
