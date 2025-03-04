'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Book Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    quote: "This platform has transformed my reading experience. The interface is intuitive, and the book selection is outstanding.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    quote: "As a student, having access to so many educational books in one place has been invaluable. The offline reading feature is a game-changer!",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Professional Reader",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
    quote: "The quality of books and the reading experience are exceptional. I particularly love the bookmarking and note-taking features.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-peach dark:bg-deep-navy overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-muted dark:text-vibrant-orange mb-4">
            What Our Readers Say
          </h2>
          <p className="text-muted/80 dark:text-vibrant-orange/80 max-w-2xl mx-auto">
            Discover why readers love our platform and how it has enhanced their reading journey.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
                     bg-creamy-white dark:bg-rich-gray text-muted dark:text-vibrant-orange
                     hover:bg-muted/10 dark:hover:bg-vibrant-orange/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-creamy-white dark:bg-rich-gray text-muted dark:text-vibrant-orange hover:bg-muted/10 dark:hover:bg-vibrant-orange/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden px-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-creamy-white dark:bg-rich-gray rounded-xl p-8 text-center">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-vibrant-orange text-vibrant-orange dark:fill-vibrant-orange dark:text-vibrant-orange"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg text-muted dark:text-vibrant-orange mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <div className="text-muted dark:text-vibrant-orange">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm opacity-80">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors
                          ${index === currentIndex
                            ? 'bg-muted dark:bg-vibrant-orange'
                            : 'bg-muted/30 dark:bg-vibrant-orange/30'
                          }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-block px-6 py-3 bg-muted dark:bg-vibrant-orange text-creamy-white dark:text-deep-navy 
                           rounded-lg hover:opacity-90 transition-opacity">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
