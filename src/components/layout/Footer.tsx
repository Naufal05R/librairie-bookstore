'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-creamy-white dark:bg-deep-navy pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-muted dark:text-vibrant-orange mb-6">
              Librairie
            </h3>
            <p className="text-muted/70 dark:text-vibrant-orange/70 mb-4">
              Your ultimate destination for digital reading. Discover, read, and enjoy books anywhere.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted hover:text-vibrant-orange dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted hover:text-vibrant-orange dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted hover:text-vibrant-orange dark:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-muted dark:text-vibrant-orange mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Categories", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-muted/70 hover:text-vibrant-orange dark:text-vibrant-orange/70 dark:hover:text-creamy-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-muted dark:text-vibrant-orange mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:support@librairie.com"
                className="flex items-center gap-2 text-muted/70 hover:text-vibrant-orange dark:text-vibrant-orange/70 dark:hover:text-creamy-white transition-colors"
              >
                <Mail size={20} />
                support@librairie.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-muted dark:text-vibrant-orange mb-4">
              Newsletter
            </h3>
            <p className="text-muted/70 dark:text-vibrant-orange/70 mb-4">
              Subscribe to get updates on new books and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 pr-10 rounded-lg bg-peach dark:bg-deep-navy
                         text-muted dark:text-vibrant-orange placeholder-muted/60 dark:placeholder-vibrant-orange/60
                         border border-muted/10 dark:border-vibrant-orange/10
                         focus:outline-none focus:ring-2 focus:ring-muted/20 dark:focus:ring-vibrant-orange/20"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1
                         text-muted hover:text-vibrant-orange dark:text-vibrant-orange dark:hover:text-creamy-white
                         transition-colors"
                aria-label="Subscribe"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-muted/10 dark:border-vibrant-orange/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted/60 dark:text-vibrant-orange/60">
            <p>&copy; {currentYear} Librairie. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-vibrant-orange dark:hover:text-creamy-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
