import Image from "next/image";

import clientsBackground from "@bg/bg-about-clients.svg";

import theVergeLogo from "@logos/logo-the-verge.png";
import theJakartaPostLogo from "@logos/logo-jakarta-post.png";
import theGuardianLogo from "@logos/logo-the-guardian.png";
import techRadarLogo from "@logos/logo-tech-radar.png";
import gadgetsNowLogo from "@logos/logo-gadgets-now.png";

const clients = [
  {
    id: 1,
    name: "The Verge",
    logo: theVergeLogo,
    link: "#",
  },
  {
    id: 2,
    name: "The Jakarta Post",
    logo: theJakartaPostLogo,
    link: "#",
  },
  {
    id: 3,
    name: "The Guardian",
    logo: theGuardianLogo,
    link: "#",
  },
  {
    id: 4,
    name: "Tech Radar",
    logo: techRadarLogo,
    link: "#",
  },
  {
    id: 5,
    name: "Gadgets Now",
    logo: gadgetsNowLogo,
    link: "#",
  },
];

export default function ClientsSection() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-secondary-green-darker">
      <div className="flex w-4/5 flex-col items-center pt-[8.8rem] lg:max-w-[111rem]">
        <Image
          src={clientsBackground}
          alt="a circle"
          width="200"
          height="200"
          className="absolute left-[-10rem] top-[-10rem]"
        />
        <h2 className="mb-[6.4rem] text-center text-[3.2rem] font-bold">
          Some of our clients
        </h2>
        <ul className="mb-[8.2rem] flex max-w-[15rem] flex-col items-center gap-[6rem] sm:max-w-none sm:flex-row sm:gap-[2vw] lg:gap-[5rem]">
          {clients.map((client) => (
            <li key={client.id}>
              <a href={client.link}>
                <Image src={client.logo} alt={client.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
