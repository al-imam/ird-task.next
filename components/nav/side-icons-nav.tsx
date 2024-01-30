import allduaIcon from "$assets/icons/alldua.svg";
import bookmarkIcon from "$assets/icons/bookmark.svg";
import booksIcon from "$assets/icons/books.svg";
import donationIcon from "$assets/icons/donation.svg";
import duaInfoIcon from "$assets/icons/dua-info.svg";
import duaLogo from "$assets/icons/dua-logo.svg";
import homeIcon from "$assets/icons/home.svg";
import planIcon from "$assets/icons/plan.svg";
import ruqyahIcon from "$assets/icons/ruqyah.svg";
import { cn } from "$shadcn/utils";
import Image from "next/image";
import Link from "next/link";

interface SideIconsNavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function SideIconsNav({ className, ...rest }: SideIconsNavProps) {
  return (
    <nav className={cn("w-[6.25rem] ", className)} {...rest}>
      <div className="flex h-[var(--max-aside-hight)] flex-col items-center justify-between rounded-3xl bg-background py-7">
        <div>
          <Image src={duaLogo} alt="dua-logo" className="h-[4.5625rem] w-[4.5625rem]" />
        </div>

        <div className="flex flex-col gap-7">
          <Icon icon={homeIcon} sr="home" />
          <Icon icon={allduaIcon} sr="all dua" />
          <Icon icon={planIcon} sr="plan" />
          <Icon icon={bookmarkIcon} sr="bookmark" />
          <Icon icon={ruqyahIcon} sr="ruqyah" />
          <Icon icon={duaInfoIcon} sr="dua info" />
          <Icon icon={booksIcon} sr="books" />
        </div>

        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[0.625rem] bg-primary">
          <Image src={donationIcon} alt="donation" className="" />
          <span className="sr-only">I want to support</span>
        </div>
      </div>
    </nav>
  );
}

function Icon({ icon, sr }: { icon: any; sr: string }) {
  return (
    <Link
      href="#"
      className="bg-muted-selected flex h-[2.375rem] w-[2.375rem] items-center justify-center rounded-full transition-transform hover:scale-105"
    >
      <Image src={icon} alt="icon" className="h-5 w-5 " />
      <span className="sr-only">{sr}</span>
    </Link>
  );
}
