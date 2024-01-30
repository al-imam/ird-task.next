import { cn } from "$shadcn/utils";

interface DesktopTopNavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function DesktopTopNav({ className, ...rest }: DesktopTopNavProps) {
  return (
    <nav className={cn("flex items-center justify-between rounded-3xl", className)} {...rest}>
      <h2 className="text-2xl font-semibold text-foreground">Dua Page</h2>
      <div>
        <input type="text" />
      </div>

      <div></div>
    </nav>
  );
}
