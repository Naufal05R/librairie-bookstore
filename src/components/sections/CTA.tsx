"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const featuredBooks = [
  {
    id: 1,
    title: "The Future of AI",
    cover:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1974&auto=format&fit=crop",
    price: "$19.99",
  },
  {
    id: 2,
    title: "Business Leadership",
    cover:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1974&auto=format&fit=crop",
    price: "$24.99",
  },
  {
    id: 3,
    title: "Creative Mindset",
    cover:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1974&auto=format&fit=crop",
    price: "$15.99",
  },
];

export default function CTA() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextBook = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredBooks.length);
  };

  const prevBook = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featuredBooks.length) % featuredBooks.length
    );
  };

  return (
    <section className="py-24 bg-creamy-white dark:bg-rich-gray">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - CTA Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-muted dark:text-vibrant-orange mb-8">
              Start Your Reading Journey Today
            </h2>
            <p className="text-lg text-muted/80 dark:text-vibrant-orange/80 mb-8 max-w-lg">
              Join our community of book lovers and get access to thousands of
              premium eBooks. Start reading instantly on any device.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-muted dark:bg-vibrant-orange text-creamy-white dark:text-deep-navy rounded-lg shadow-lg hover:shadow-xl transition-shadow text-lg font-semibold">
              Get Started Now
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="mt-6 text-sm text-muted/70 dark:text-vibrant-orange/70">
              No credit card required • 7-day free trial
            </p>
          </div>

          {/* Right Column - Featured Books Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevBook}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full
                       bg-creamy-white/80 dark:bg-rich-gray/80 text-muted dark:text-vibrant-orange
                       hover:bg-muted/10 dark:hover:bg-vibrant-orange/10 transition-colors"
              aria-label="Previous book"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextBook}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full
                       bg-creamy-white/80 dark:bg-rich-gray/80 text-muted dark:text-vibrant-orange
                       hover:bg-muted/10 dark:hover:bg-vibrant-orange/10 transition-colors"
              aria-label="Next book"
            >
              <ChevronRight size={24} />
            </button>

            {/* Books Carousel */}
            <div className="overflow-hidden rounded-xl">
              <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {featuredBooks.map((book) => (
                  <div key={book.id} className="w-full flex-shrink-0">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
                                    flex flex-col justify-end p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {book.title}
                        </h3>
                        <p className="text-white/80">{book.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {featuredBooks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors
                            ${
                              index === currentIndex
                                ? "bg-muted dark:bg-vibrant-orange"
                                : "bg-muted/30 dark:bg-vibrant-orange/30"
                            }`}
                  aria-label={`Go to book ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
