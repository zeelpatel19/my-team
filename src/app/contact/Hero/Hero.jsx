import HeroItem from "./HeroItem";

import personIcon from "@icons/icon-person.svg";
import cogIcon from "@icons/icon-cog.svg";
import chartIcon from "@icons/icon-chart.svg";

const data = [
  {
    id: 1,
    icon: personIcon,
    alt: "a person",
    message: "The quality of our talent network",
  },
  {
    id: 2,
    icon: cogIcon,
    alt: "an icon",
    message: "Usage & implementation of our software",
  },
  {
    id: 3,
    icon: chartIcon,
    alt: "a rising boxplot",
    message: "How we help drive innovation",
  },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center bg-primary-teal px-[10%]">
      <div className="max-w-[111rem]">
        <div className="mb-[4rem] flex flex-col items-center">
          <h1 className="mb-[1.6rem] text-[4rem] font-bold sm:mb-[2.4rem] sm:text-[6.4rem]">
            Contact
          </h1>
          <p className="text-[3.2rem] text-primary-coral">Ask us about</p>
        </div>
        <ul className="mb-[5.6rem] flex flex-col gap-[2.4rem]">
          {data.map((heroItem) => (
            <li key={heroItem.id}>
              <HeroItem
                icon={heroItem.icon}
                alt={heroItem.alt}
                message={heroItem.message}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
