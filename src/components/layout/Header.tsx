"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import Link from "next/link";
import { useTheme } from "../provider/theme-provider";
import { NAVIGATIONS } from "@/constants/navigations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleThemeMenu = () => setIsThemeMenuOpen(!isThemeMenuOpen);

  const ThemeIcon = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  }[theme ?? "system"];

  return (
    <header className="sticky top-0 z-50 bg-sky-light/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-sky-base/10 dark:border-dark-accent/10">
      <div className="container mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-dark dark:text-dark-text 
                     hover:text-sky-base dark:hover:text-dark-accent 
                     transition-all duration-300 transform hover:scale-105"
          >
            Librairie
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATIONS.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className="relative px-4 py-2 text-blue-dark/80 dark:text-dark-text/80
                         hover:text-sky-base dark:hover:text-dark-accent
                         transition-all duration-300 group rounded-lg
                         hover:bg-sky-base/5 dark:hover:bg-dark-accent/5"
              >
                <span className="relative z-10">{label}</span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-base dark:bg-dark-accent
                             transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={toggleThemeMenu}
                className="p-2 rounded-lg hover:bg-sky-base/5 dark:hover:bg-dark-accent/5
                       transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle theme"
              >
                <ThemeIcon
                  className="w-5 h-5 text-blue-dark dark:text-dark-text 
                                  hover:text-sky-base dark:hover:text-dark-accent 
                                  transition-colors duration-300"
                />
              </button>

              {isThemeMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg 
                             bg-white dark:bg-dark-surface border border-sky-base/10 
                             dark:border-dark-accent/10"
                >
                  <div className="py-1">
                    {[
                      { label: "Light", value: "light", icon: Sun },
                      { label: "Dark", value: "dark", icon: Moon },
                      { label: "System", value: "system", icon: Monitor },
                    ].map(({ label, value, icon: Icon }) => (
                      <button
                        key={value}
                        onClick={() => {
                          setTheme(value as "light" | "dark" | "system");
                          setIsThemeMenuOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left flex items-center space-x-2
                                ${
                                  theme === value
                                    ? "text-sky-base dark:text-dark-accent bg-sky-base/5 dark:bg-dark-accent/5"
                                    : "text-blue-dark dark:text-dark-text hover:bg-sky-base/5 dark:hover:bg-dark-accent/5"
                                } transition-colors duration-200`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                        {theme === value && (
                          <span className="ml-auto text-sky-base dark:text-dark-accent">
                            ✓
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-sky-base/5 dark:hover:bg-dark-accent/5
                      transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-blue-dark dark:text-dark-text" />
              ) : (
                <Menu className="w-5 h-5 text-blue-dark dark:text-dark-text" />
              )}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1">
            {NAVIGATIONS.map(({ label, path }) => (
              <Link
                key={label}
                href={path}
                className="block px-4 py-2 text-blue-dark/80 dark:text-dark-text/80
                         hover:text-sky-base dark:hover:text-dark-accent
                         transition-all duration-300
                         hover:bg-sky-base/5 dark:hover:bg-dark-accent/5
                         rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
