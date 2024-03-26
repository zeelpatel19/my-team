import Image from "next/image";

import testimonialBox from "@bg/bg-home-testimonial-box.svg";
import testimonialCircle from "@bg/bg-home-testimonial-circle.svg";

import avatarKady from "@avatars/avatar-kady.jpg";
import avatarAiysha from "@avatars/avatar-aiysha.jpg";
import avatarArthur from "@avatars/avatar-arthur.jpg";
import TestimonialItem from "./TestimonialItem";

const data = [
  {
    id: 1,
    author: "Kady Baker",
    position: "Product Manager at Bookmark",
    testimonial:
      "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
    avatar: avatarKady,
  },
  {
    id: 2,
    author: "Aiysha Reese",
    position: "Founder of Manage",
    testimonial:
      "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
    avatar: avatarAiysha,
  },
  {
    id: 3,
    author: "Arthur Clarke",
    position: "Co-founder of MyPhysio",
    testimonial:
      "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
    avatar: avatarArthur,
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative flex w-full flex-col items-center bg-secondary-green-dark">
      <div className="mt-[14rem] flex w-4/5 flex-col items-center text-center sm:max-w-[57rem] lg:max-w-[111rem]">
        <Image
          src={testimonialBox}
          alt="black box with grid"
          width="147"
          height="100"
          className="absolute left-0 top-0 mb-[4rem] self-start"
        />
        <h2 className="mx-[2.4rem] mb-[8.4rem] text-[3.3rem] leading-[3.2rem] sm:mb-[6rem] sm:translate-y-[-3rem] lg:text-[4.8rem] lg:leading-[4.8rem]">
          Delivering real results for top companies. Some of our
          <span className="text-secondary-green-light"> success stories.</span>
        </h2>
        <ul className="mx-[2.4rem] mb-[16.4rem] flex flex-col gap-[8.4rem] sm:mb-[10rem] lg:mb-[14rem] lg:flex-row">
          {data.map((testimonialItem) => (
            <li key={testimonialItem.id}>
              <TestimonialItem
                author={testimonialItem.author}
                position={testimonialItem.position}
                testimonial={testimonialItem.testimonial}
                avatar={testimonialItem.avatar}
              />
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 right-0">
          <Image
            src={testimonialCircle}
            alt="circle and grating"
            width="200"
            height="100"
            className="h-[10rem] w-[20rem] self-end"
          />
        </div>
      </div>
    </section>
  );
}
