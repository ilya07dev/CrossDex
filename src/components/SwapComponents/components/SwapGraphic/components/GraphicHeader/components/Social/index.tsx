import {
  DiscordIcon,
  GlobalIcon,
  MailIcon,
  TwitterIcon,
} from "components/Icons";

import cn from "classnames";

interface SocialProps {
  links:{
    webSite:string,
    twitter:string,
    telegram:string,
  }
  className?: string
}

export function Social({ className, links }: SocialProps) {
  return (
    <article
      className={cn(
        "w-full sm:w-fit grid-cols-4 justify-between rounded-r-primary bg-c-secondary",
        "gap-3 2xl:gap-6 sm:gap-4 py-3 px-[15px] 2xl:py-4 2xl:px-[20px]",
        className
      )}
    >
      <a className="flex items-center justify-center min-w-[24px]" href={links.webSite}>
        <GlobalIcon className="text-[#9B9898] hover:text-white duration-500" />
      </a>
      <a
        className="flex items-center justify-center min-w-[24px]"
        href={links.twitter}
      >
        <TwitterIcon className="text-[#9B9898] hover:text-white duration-500" />
      </a>
      <a
        className="flex items-center justify-center min-w-[24px]"
        href={links.telegram}
      >
        <DiscordIcon className="text-[#9B9898] hover:text-white duration-500" />
      </a>
      <a className="flex items-center justify-center min-w-[24px]" href="#">
        <MailIcon className="text-[#9B9898] hover:text-white duration-500" />
      </a>
    </article>
  );
}
