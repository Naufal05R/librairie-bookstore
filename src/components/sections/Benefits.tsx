import { BookOpen, Download, Smartphone, Bookmark } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Easy Reading Experience",
    description:
      "Enjoy a seamless reading experience with customizable fonts, themes, and layouts tailored to your preferences.",
  },
  {
    icon: Download,
    title: "Offline Access",
    description:
      "Download your favorite books and read them anywhere, anytime - no internet connection required.",
  },
  {
    icon: Smartphone,
    title: "Multi-Device Sync",
    description:
      "Start reading on your phone and continue seamlessly on your tablet or computer with automatic syncing.",
  },
  {
    icon: Bookmark,
    title: "Smart Bookmarking",
    description:
      "Mark your favorite passages, add notes, and access them instantly across all your devices.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-creamy-white dark:bg-deep-navy">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-muted dark:text-vibrant-orange mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-muted/70 dark:text-vibrant-orange/70 max-w-2xl mx-auto">
            Discover the features that make our eBook platform the perfect
            choice for modern readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-muted dark:bg-rich-gray rounded-xl transition-transform hover:-translate-y-1"
              >
                  <div className="mb-4 inline-block p-3 bg-vibrant-orange dark:bg-muted rounded-lg text-creamy-white dark:text-deep-navy">

                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-muted dark:text-vibrant-orange mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted/80 dark:text-vibrant-orange/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted/90 dark:text-vibrant-orange/90 max-w-3xl mx-auto">
            Join thousands of satisfied readers who have already discovered the
            joy of digital reading with our platform.
          </p>
        </div>
      </div>
    </section>
  );
}
