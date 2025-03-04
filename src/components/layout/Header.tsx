'use client';

import { useState } from 'react';
import { Menu, Search, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-creamy-white/80 backdrop-blur-md dark:bg-rich-gray/80 shadow-sm">
      <nav className="container mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-muted dark:text-vibrant-orange">
            Librairie
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
              Home
            </Link>
            <Link href="/categories" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Search and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="p-2 text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-creamy-white dark:bg-rich-gray shadow-lg">
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link href="/" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
                Home
              </Link>
              <Link href="/categories" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
                Categories
              </Link>
              <Link href="/about" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors">
                Contact
              </Link>
              <div className="flex items-center gap-4 pt-4 border-t border-muted/10 dark:border-vibrant-orange/10">
                <button
                  className="p-2 text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-muted hover:text-peach dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
