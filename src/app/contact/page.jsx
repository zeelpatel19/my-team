import Image from "next/image";

import ContactFormSection from "./ContactFormSection/ContactFormSection";
import Hero from "./Hero/Hero";

import contactBackground from "@bg/bg-contact.svg";
import contactTabletBackground from "@bg/bg-about-directors.svg";

export default function ContactPage() {
  return (
    <main className="relative flex flex-col items-center overflow-hidden bg-primary-teal">
      <div className="flex w-full flex-col lg:max-w-[111rem] lg:flex-row">
        <div className="flex-1">
          <Hero />
        </div>
        <div className="flex-1">
          <ContactFormSection />
        </div>
      </div>
      <Image
        src={contactTabletBackground}
        width="200"
        height="200"
        className="absolute left-[-10rem] top-0 hidden h-auto w-auto sm:bottom-0 sm:block"
        alt="circle with a square"
      />
      <Image
        src={contactBackground}
        width="200"
        height="200"
        className="absolute bottom-[-10rem] right-[-10rem] h-auto w-auto sm:bottom-0 lg:bottom-[-10rem]"
        alt="circle with a square"
      />
    </main>
  );
}
