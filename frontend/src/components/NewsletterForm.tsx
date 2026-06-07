'use client';

import { ArrowUpRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { subscribeToNewsletter } from "@/app/actions";

export default function NewsletterForm() {
    const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setMessage(null);

        const result = await subscribeToNewsletter(formData);

        if (result.error) {
            setMessage({ text: result.error, type: 'error' });
        } else if (result.success) {
            setMessage({ text: result.success, type: 'success' });
            // Optional: Reset the form
            const form = document.getElementById('newsletter-form') as HTMLFormElement;
            if (form) form.reset();
        }
        setIsLoading(false);
    }

    return (
        <form id="newsletter-form" action={handleSubmit} className="relative">
            <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-blue-500/20 rounded-full py-3 pl-6 pr-12 text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 disabled:opacity-50"
                disabled={isLoading}
            />
            <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:bg-blue-600/50 disabled:cursor-not-allowed"
            >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <ArrowUpRight size={16} />}
            </button>
            {message && (
                <p className={`absolute -bottom-6 left-6 text-xs ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {message.text}
                </p>
            )}
        </form>
    );
}
