import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DisplayEbooks from "@/components/sections/DisplayEbooks";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-peach dark:bg-deep-navy">
      <Header />
      <main>
        <DisplayEbooks />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
