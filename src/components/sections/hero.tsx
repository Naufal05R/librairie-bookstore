"use client";

import BookIllustration from "./illustration/book-illustration";

export default function Hero() {
  return (
    <section
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center 
                      bg-gradient-to-b from-sky-light via-blue-light/30 to-sky-light/50 
                      dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg/50
                      transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-sky-500/[0.025] dark:bg-grid-sky-400/[0.025]" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r 
                             from-blue-dark via-sky-dark to-sky-base
                             dark:from-sky-base dark:via-dark-accent dark:to-sky-base"
                >
                  Discover Your Next
                </span>
                <br />
                <span className="text-sky-base dark:text-dark-accent">
                  Reading Adventure
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-blue-dark/80 dark:text-dark-text/80
                         leading-relaxed"
              >
                Explore our curated collection of books that will transport you
                to new worlds and inspire your imagination.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button
                className="group relative px-8 py-4 bg-gradient-to-r from-sky-base to-blue-base 
                             hover:from-sky-dark hover:to-blue-dark text-sky-light
                             dark:from-dark-accent dark:to-sky-base
                             dark:hover:from-sky-base dark:hover:to-dark-accent
                             rounded-xl transition-all duration-300
                             shadow-lg shadow-sky-base/20 hover:shadow-sky-base/30
                             dark:shadow-dark-accent/20 dark:hover:shadow-dark-accent/30
                             transform hover:scale-105 hover:-translate-y-1"
              >
                <span
                  className="flex items-center justify-center gap-2 text-lg font-medium
                             relative z-10"
                >
                  Start Reading
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div
                  className="absolute inset-0 rounded-xl bg-white/10 blur opacity-0 
                             group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>

              <button
                className="group relative px-8 py-4 border-2 rounded-xl text-lg font-medium
                             border-sky-base/20 text-sky-dark
                             hover:border-sky-base hover:text-sky-base
                             dark:border-dark-accent/20 dark:text-dark-text
                             dark:hover:border-dark-accent dark:hover:text-dark-accent
                             transition-all duration-300 transform hover:scale-105 hover:-translate-y-1
                             hover:shadow-lg hover:shadow-sky-base/10
                             dark:hover:shadow-dark-accent/10
                             overflow-hidden"
              >
                <span className="relative z-10">View Collection</span>
                <div
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-0
                             bg-gradient-to-r from-sky-base/10 to-transparent
                             dark:from-dark-accent/10 dark:to-transparent
                             transition-transform duration-500"
                />
              </button>
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:block perspective-1000">
            <BookIllustration />
            <div className="absolute inset-0 pointer-events-none mix-blend-soft-light">
              <div
                className="absolute top-1/4 right-1/4 w-96 h-96 
                          bg-gradient-to-r from-sky-base/20 to-blue-base/20 
                          dark:from-dark-accent/20 dark:to-sky-base/20
                          rounded-full blur-3xl animate-pulse"
              />
              <div
                className="absolute bottom-1/4 left-1/4 w-96 h-96 
                          bg-gradient-to-r from-blue-base/20 to-sky-base/20
                          dark:from-sky-base/20 dark:to-dark-accent/20 
                          rounded-full blur-3xl animate-pulse delay-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
