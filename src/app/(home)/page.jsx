import Hero from "./components/Hero/Hero";
import BuildSection from "./components/BuildSection/BuildSection";
import GetStartedSection from "../components/GetStartedSection/GetStartedSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import ContactSection from "../components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <BuildSection />
      <TestimonialSection />
      <GetStartedSection />
    </main>
  );
}
