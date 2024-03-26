import Image from "next/image";

import Button from "@/app/components/UI/Button";

import contactBackground from "@bg/bg-home-contact-us.svg";

export default function GetStartedSection() {
  return (
    <section className="relative flex flex-col items-center bg-primary-coral">
      <div className="flex w-4/5 flex-col items-center pt-[8.3rem] text-center text-secondary-green-darkest sm:h-[20rem] sm:flex-row sm:justify-center sm:gap-[4%] sm:p-0 lg:max-w-[111rem] lg:justify-between">
        <h2 className="mb-[3rem] max-w-[22rem] text-[3.2rem] font-bold leading-[3.2rem] sm:mb-0 sm:max-w-none">
          Ready to get started?
        </h2>
        <div className="mb-[10rem] border-secondary-green-darkest transition-all duration-300 hover:scale-[1.05] sm:mb-0">
          <Button href="/contact">contact us</Button>
        </div>
        <Image
          src={contactBackground}
          alt="circle with grating"
          width="200"
          height="123"
          className="absolute bottom-0 left-0 h-[12.3rem] w-[20rem] self-start"
        />
      </div>
    </section>
  );
}
