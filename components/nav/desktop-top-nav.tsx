import profileIcon from "$assets/icons/profile.svg";
import rectAngle from "$assets/icons/rectangle.svg";
import { SearchGlobal } from "$components/utils";
import { cn } from "$shadcn/utils";
import Image from "next/image";

interface DesktopTopNavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function DesktopTopNav({ className, ...rest }: DesktopTopNavProps) {
  return (
    <nav className={cn("flex items-center rounded-3xl", className)} {...rest}>
      <h2 className="mr-auto text-2xl font-semibold text-foreground">Dua Page</h2>
      <SearchGlobal placeholder="Search by dua name" />

      <div className="h-full w-[calc(var(--layout-gap)+270px)]">
        <button className="ml-auto flex items-center gap-1 rounded-md ">
          <Image src={profileIcon} alt="profile" />
          <Image src={rectAngle} alt="arrow" className="h-3 w-3" />
        </button>
      </div>
    </nav>
  );
}
