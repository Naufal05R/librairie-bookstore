"use client";

export default function BookIllustration() {
  return (
    <div className="relative w-full h-[400px] transform-gpu perspective-1000">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-48 h-64 bg-gradient-to-br from-sky-base via-blue-base to-sky-dark
                    dark:from-dark-accent dark:via-sky-base dark:to-dark-accent
                    rounded-lg shadow-2xl backdrop-blur-sm
                    transform -rotate-6 hover:rotate-0 hover:scale-110
                    transition-all duration-500 ease-out
                    animate-float
                    before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-lg
                    after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/0 after:to-black/20 after:rounded-lg"
      >
        <div
          className="absolute inset-2 bg-white/10 rounded-lg backdrop-blur-sm
                      before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-white/5 before:rounded-lg"
        >
          <div className="h-full flex flex-col justify-center items-center text-white p-4 gap-3">
            <div className="w-16 h-1 bg-white/40 rounded-full"></div>
            <div className="w-24 h-1 bg-white/30 rounded-full"></div>
            <div className="w-20 h-1 bg-white/20 rounded-full"></div>
            <div
              className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10
                          animate-pulse"
            ></div>
          </div>
        </div>
        <div
          className="absolute left-0 top-0 w-4 h-full
                      bg-gradient-to-r from-black/30 to-transparent rounded-l-lg"
        ></div>
      </div>

      <div
        className="absolute left-[35%] top-1/2 -translate-y-1/2
                    w-48 h-64 bg-gradient-to-br from-blue-base/90 via-sky-dark/90 to-blue-dark/90
                    dark:from-sky-base/90 dark:via-dark-accent/90 dark:to-sky-base/90
                    rounded-lg shadow-xl backdrop-blur-md
                    transform -rotate-12 scale-90 hover:scale-95
                    transition-transform duration-500
                    -z-10 animate-float-delay-1
                    before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/10 before:to-transparent before:rounded-lg"
      ></div>

      <div
        className="absolute left-[65%] top-1/2 -translate-y-1/2
                    w-48 h-64 bg-gradient-to-br from-sky-dark/80 via-blue-dark/80 to-sky-dark/80
                    dark:from-dark-accent/80 dark:via-sky-base/80 dark:to-dark-accent/80
                    rounded-lg shadow-xl backdrop-blur-md
                    transform rotate-6 scale-90 hover:scale-95
                    transition-transform duration-500
                    -z-20 animate-float-delay-2
                    before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:rounded-lg"
      ></div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 
                      bg-sky-base/20 dark:bg-dark-accent/20 
                      rounded-full blur-3xl mix-blend-overlay
                      animate-pulse"
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 
                      bg-blue-base/20 dark:bg-sky-base/20 
                      rounded-full blur-3xl mix-blend-overlay
                      animate-pulse delay-700"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-full h-full bg-gradient-to-r from-sky-base/5 to-blue-base/5
                      dark:from-dark-accent/5 dark:to-sky-base/5
                      rounded-full blur-3xl mix-blend-overlay"
        ></div>
      </div>
    </div>
  );
}
