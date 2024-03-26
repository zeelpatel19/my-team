import Image from "next/image";

export default function HeroItem({ icon, alt, message }) {
  return (
    <div className="flex items-center">
      <Image
        src={icon}
        alt={alt}
        width="72"
        height="72"
        className="mr-[2.4rem] h-[7.2rem] w-[7.2rem]"
      />
      <p className="flex-4 text-[1.8rem] leading-[2.8rem]">{message}</p>
    </div>
  );
}
