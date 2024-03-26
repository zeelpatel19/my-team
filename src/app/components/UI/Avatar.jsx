import Image from "next/image";

export default function Avatar({ image, alt }) {
  return (
    <Image
      src={image}
      alt={alt}
      className="rounded-full border-[0.2rem] border-[#C4FFFE]"
    />
  );
}
