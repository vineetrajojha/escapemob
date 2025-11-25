import React from "react";

const reviews = [
    {
        id: 1,
        name: "Sarah Jenkins",
        rating: 5,
        quote:
            "EscapeMob transformed our digital presence completely. Their attention to detail and creative approach is unmatched in the industry.",
    },
    {
        id: 2,
        name: "Michael Chen",
        rating: 5,
        quote:
            "Working with the team was a breeze. They understood our vision immediately and delivered a website that exceeded our expectations.",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        rating: 5,
        quote:
            "The ROI we've seen since launching our new campaign with EscapeMob has been incredible. Highly recommend their services!",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 overflow-hidden bg-background relative z-10">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                    Client <span className="italic font-serif text-muted-foreground">Stories</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Don't just take our word for it. Here's what our partners have to say
                    about working with us.
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
                    {/* Duplicate the reviews to create a seamless loop */}
                    {[...reviews, ...reviews, ...reviews, ...reviews].map(
                        (review, index) => (
                            <div
                                key={`${review.id}-${index}`}
                                className="w-[300px] md:w-[400px] flex-shrink-0 mx-4 p-8 rounded-2xl bg-card border border-border transition-transform hover:scale-105 duration-300"
                            >
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex mb-4 text-primary">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        <blockquote className="text-lg mb-6 italic text-card-foreground">
                                            "{review.quote}"
                                        </blockquote>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">
                                                {review.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">Client</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
