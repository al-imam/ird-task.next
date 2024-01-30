import { cn } from "$shadcn/utils";

interface SettingsProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

export function Settings({ className }: SettingsProps) {
  return <aside className={cn("rounded-3xl border bg-background", className)}></aside>;
}
