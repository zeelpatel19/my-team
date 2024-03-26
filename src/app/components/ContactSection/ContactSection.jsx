"use client";

import Image from "next/image";

import companyLogo from "@assets/logo.svg";
import SocialBar from "@/app/components/SocialsBar/SocialsBar";
import NavBar from "@/app/components/NavBar/NavBar";

export default function ContactSection() {
  return (
    <footer className="flex flex-col items-center bg-secondary-green-darkest">
      <div className="flex w-4/5 flex-col items-center py-[6.6rem] text-center sm:flex-row sm:items-stretch sm:justify-between lg:max-w-[111rem]">
        <div className="flex w-full flex-col items-center justify-between sm:flex-row lg:w-auto lg:gap-[12.5rem]">
          <div className="flex h-full w-1/2 flex-col items-center sm:relative sm:items-start lg:w-auto lg:justify-between">
            <Image
              src={companyLogo}
              alt="company logo"
              width="96"
              height="24"
              className="mb-[2.4rem] h-[2.4rem] w-[9.6rem] sm:mb-[5.6rem] lg:m-0 lg:mb-[3rem] lg:h-auto lg:w-[16rem]"
            />
            <div className="mb-[2.4rem] text-[1.5rem] lg:mb-0">
              <NavBar />
            </div>
            <div className="hidden sm:absolute sm:bottom-0 sm:block lg:hidden">
              <SocialBar />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-[4rem] text-center text-[1.5rem] leading-[2.5rem] opacity-60 sm:self-end sm:text-right lg:mb-0 lg:text-left">
              987 Hillcrest Lane
              <br />
              Irvine, CA
              <br />
              California 92714
              <br />
              Call Us : 949-833-7432
            </p>
            <div className="mb-[1.6rem] sm:hidden">
              <SocialBar />
            </div>
            <p className="text-[1.5rem] opacity-60 lg:hidden">
              Copyright 2020. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="hidden flex-col items-end justify-between lg:flex">
          <SocialBar />
          <p className="text-[1.5rem] opacity-60">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
