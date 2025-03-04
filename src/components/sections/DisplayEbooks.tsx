"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";

// Mock data for books with unique cover images
const books = [
  {
    id: 1,
    title: "The Art of Programming",
    author: "John Smith",
    cover:
      "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=1974&auto=format&fit=crop",
    category: "Technology",
  },
  {
    id: 2,
    title: "Digital Marketing Essentials",
    author: "Sarah Johnson",
    cover:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop",
    category: "Business",
  },
  {
    id: 3,
    title: "Modern Web Development",
    author: "Michael Brown",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1974&auto=format&fit=crop",
    category: "Technology",
  },
  {
    id: 4,
    title: "Creative Writing Guide",
    author: "Emily Davis",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop",
    category: "Arts",
  },
  {
    id: 5,
    title: "Business Strategy",
    author: "Robert Wilson",
    cover:
      "https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=1974&auto=format&fit=crop",
    category: "Business",
  },
  {
    id: 6,
    title: "Photography Basics",
    author: "Lisa Anderson",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1974&auto=format&fit=crop",
    category: "Arts",
  },
];

const categories = ["All", "Technology", "Business", "Arts"];

export default function DisplayEbooks() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-peach dark:bg-deep-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-8">
          {/* Header and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-4xl font-bold text-muted dark:text-vibrant-orange">
              Discover eBooks
            </h1>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg bg-creamy-white dark:bg-rich-gray text-muted dark:text-vibrant-orange placeholder-muted/60 dark:placeholder-vibrant-orange/60 border border-muted/10 dark:border-vibrant-orange/10 focus:outline-none focus:ring-2 focus:ring-muted/20 dark:focus:ring-vibrant-orange/20"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-muted/60 dark:text-vibrant-orange/60" />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors
                          ${
                            selectedCategory === category
                              ? "bg-muted text-creamy-white dark:bg-vibrant-orange dark:text-deep-navy"
                              : "bg-creamy-white text-muted dark:bg-rich-gray dark:text-vibrant-orange hover:bg-muted/10 dark:hover:bg-vibrant-orange/10"
                          }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="group relative overflow-hidden rounded-lg shadow-md glass"
              >
                <div className="aspect-[2/3] relative">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {book.title}
                  </h3>
                  <p className="text-white/80">{book.author}</p>
                  <span className="text-sm text-white/60 mt-2">
                    {book.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button */}
          <div className="flex justify-center mt-8">
            <button
              className="group flex items-center gap-2 px-6 py-3 rounded-lg
                             bg-muted text-creamy-white dark:bg-vibrant-orange dark:text-deep-navy
                             hover:opacity-90 transition-opacity"
            >
              Explore More
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
