import Link from "next/link";

export default function Button({ children, ...props }) {
  return (
    <Link
      {...props}
      className="cursor-pointer rounded-[2.4rem] border-[0.2rem] border-inherit px-[3.3rem] py-[1rem] text-[1.8rem] transition-all duration-300 hover:scale-[1.05]"
    >
      {children}
    </Link>
  );
}
