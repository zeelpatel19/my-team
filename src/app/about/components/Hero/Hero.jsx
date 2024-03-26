import Image from "next/image";

import heroBackground from "@bg/bg-about-hero.svg";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-primary-teal text-center lg:text-left">
      <div className="mb-[10.8rem] w-4/5 max-w-[50rem] px-[2.4rem] lg:flex lg:max-w-[111rem] lg:gap-[15rem] ">
        <h1 className="mb-[1.6rem] text-[4rem] lg:text-[6.4rem]">About</h1>
        <div>
          <div className="mb-[4rem] hidden h-[0.4rem] w-[5rem] bg-primary-coral lg:block"></div>
          <p className="text-[1.5rem] leading-[2.8rem] opacity-80 lg:text-[1.8rem]">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We&apos;ll bring those teams to you.
          </p>
        </div>
      </div>
      <Image
        src={heroBackground}
        alt="quarter of a circle with grating"
        width="200"
        height="200"
        className="absolute bottom-[-10rem] right-[-10rem] sm:bottom-0"
      />
    </section>
  );
}
