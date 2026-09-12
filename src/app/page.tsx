import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import LiveTuition from "@/components/LiveTuition";
import LearningCategories from "@/components/LearningCategories";
import TutoringMethods from "@/components/TutoringMethods";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import HowItWorksTutors from "@/components/HowItWorksTutors";
import SuccessStories from "@/components/SuccessStories";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#00A8E8]/30 to-[#232C77]/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#232C77]/20 to-[#00A8E8]/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative pt-44 md:pt-52">
        <Hero />
        <StatsBanner />
        <LiveTuition />
        <LearningCategories />
        <TutoringMethods />
        <HowItWorks />
        <Testimonials />
        <HowItWorksTutors />
        <SuccessStories />
        <WhyChooseUs />
        <CTABanner />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}