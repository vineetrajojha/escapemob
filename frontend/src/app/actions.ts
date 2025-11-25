'use server'

import { supabase } from '@/lib/supabase';

export async function subscribeToNewsletter(formData: FormData) {
    const email = formData.get('email') as string;

    if (!email) {
        return { error: 'Email is required' };
    }

    try {
        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert([{ email }]);

        if (error) {
            if (error.code === '23505') { // Unique violation
                return { error: 'You are already subscribed!' };
            }
            console.error('Supabase error:', error);
            return { error: 'Something went wrong. Please try again.' };
        }

        return { success: 'Subscribed successfully!' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: 'Something went wrong. Please try again.' };
    }
}

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'Name, email, and message are required' };
    }

    try {
        const { error } = await supabase
            .from('contact_submissions')
            .insert([{ name, email, company, message }]);

        if (error) {
            console.error('Supabase error:', error);
            return { error: 'Something went wrong. Please try again.' };
        }

        return { success: 'Message sent successfully!' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: 'Something went wrong. Please try again.' };
    }
}
