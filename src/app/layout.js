import clsx from "clsx";
import { Livvic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import ContactSection from "./components/ContactSection/ContactSection";

const livvic = Livvic({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata = {
  title: "myteam",
  description: "Frontend Mentor challange completed with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          livvic.className,
          "flex flex-col items-center bg-[#2f5357]",
        )}
      >
        <div className="flex min-h-screen w-full max-w-[180rem] flex-col bg-secondary-green-dark">
          <div className="flex flex-grow flex-col bg-primary-teal">
            <div className="w-full bg-primary-teal px-[2.4rem] pb-[8rem] pt-[4.8rem] sm:px-[3rem] sm:pb-[12rem] lg:pt-[7.7rem]">
              <Header />
            </div>
            {children}
          </div>
          <div>
            <ContactSection />
          </div>
        </div>
      </body>
    </html>
  );
}
