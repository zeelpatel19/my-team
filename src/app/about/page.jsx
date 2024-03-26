import ContactSection from "../components/ContactSection/ContactSection";
import GetStartedSection from "../components/GetStartedSection/GetStartedSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import DirectorsSection from "./components/DirectorsSection/DirectorsSection";
import Hero from "./components/Hero/Hero";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <DirectorsSection />
      <ClientsSection />
      <GetStartedSection />
    </main>
  );
}
