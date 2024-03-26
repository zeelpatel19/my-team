import Image from "next/image";

import heroBackground from "@bg/bg-home-hero.svg";
import heroDesktopBackground from "@bg/bg-home-hero-desktop.svg";

export default function Hero() {
  return (
    <section className="bg-home-hero relative flex flex-col items-center overflow-hidden bg-primary-teal text-center lg:text-left">
      <div className="mx-[2.4rem] mb-[20rem] flex w-4/5 max-w-[45.7rem] flex-col items-center sm:mb-[25.6rem] lg:mx-[16.5rem] lg:max-w-[111rem] lg:flex-row">
        <h1 className="mb-[1.8rem] text-[4rem] leading-[4rem] sm:mb-[2.4rem] sm:text-[6.4rem] sm:leading-[5.6rem] lg:mb-0 lg:max-w-[42rem] lg:flex-1 lg:text-[9rem] lg:leading-[10rem] xl:max-w-none">
          Find the
          <br /> best <span className="text-primary-coral">talent</span>
        </h1>
        <p className="text-[1.5rem] leading-[2.8rem] opacity-80 lg:flex-1 xl:self-end">
          Finding the right people and building high performing teams can be
          hard. Most companies aren&apos;t tapping into the abundance of global
          talent. We&apos;re about to change that.
        </p>
        <div className="absolute bottom-0 lg:right-[16rem]">
          <Image
            src={heroBackground}
            alt="two circles with a box and a grating"
            width="350"
            height="200"
            className="h-auto w-auto"
          />
        </div>
        <div className="absolute left-[-10rem] hidden lg:block">
          <Image
            src={heroDesktopBackground}
            alt="circle with square of dots"
            width="200"
            height="200"
            className="h-auto w-auto"
          />
        </div>
      </div>
    </section>
  );
}
