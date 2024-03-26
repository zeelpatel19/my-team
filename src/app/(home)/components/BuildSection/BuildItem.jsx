import Image from "next/image";

export default function BuildItem({ image, imageAlt, title, description }) {
  return (
    <div className="flex flex-col items-center text-center sm:flex-row sm:gap-[2.4rem] sm:text-left">
      <Image src={image} alt={imageAlt} className="h-auto w-auto" />
      <div className="flex flex-col">
        <p className="mb-[0.8rem] text-[1.8rem] text-primary-coral">{title}</p>
        <p className="text-[1.5rem] leading-[2.5rem] opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
}
