import Image from "next/image";

import facebookIcon from "@icons/icon-facebook.svg";
import pinterestIcon from "@icons/icon-pinterest.svg";
import twitterIcon from "@icons/icon-twitter.svg";

export default function SocialBar() {
  return (
    <div className="flex gap-[2rem]">
      <a href="#">
        <Image
          src={facebookIcon}
          alt="facebook logo"
          width="24"
          height="24"
          className="h-[2.4rem] w-[2.4rem]"
        />
      </a>
      <a href="#">
        <Image
          src={pinterestIcon}
          alt="pinterest logo"
          width="24"
          height="24"
          className="h-[2.4rem] w-[2.4rem]"
        />
      </a>
      <a href="#">
        <Image
          src={twitterIcon}
          alt="twitter logo"
          width="24"
          height="24"
          className="h-[2.4rem] w-[2.4rem]"
        />
      </a>
    </div>
  );
}
