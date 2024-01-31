import { cn } from "$shadcn/utils";

export function ThemePreview() {
  const cs = "flex aspect-square h-30 w-30 items-center border border-fuchsia-600 justify-center font-display ";

  return (
    <div className="min-h-screen bg-background">
      <div className="font-display grid grid-cols-6 grid-rows-2 gap-4 break-all p-10 text-xs drop-shadow-sm [&_*]:uppercase [&_*]:text-fuchsia-600">
        <div className={cn(cs, "bg-background")}>background</div>
        <div className={cn(cs, "bg-foreground")}>foreground</div>
        <div className={cn(cs, "bg-muted")}>muted</div>
        <div className={cn(cs, "bg-muted-foreground")}>muted-foreground</div>
        <div className={cn(cs, "bg-card")}>card</div>
        <div className={cn(cs, "bg-card-foreground")}>card-foreground</div>
        <div className={cn(cs, "bg-popover")}>popover</div>
        <div className={cn(cs, "bg-popover-foreground")}>popover-foreground</div>
        <div className={cn(cs, "bg-secondary")}>secondary</div>
        <div className={cn(cs, "bg-secondary-foreground")}>secondary-foreground</div>
        <div className={cn(cs, "bg-link")}>link</div>
        <div className={cn(cs, "bg-link-muted")}>link-muted</div>
        <div className={cn(cs, "bg-success")}>success</div>
        <div className={cn(cs, "bg-failure")}>failure</div>
      </div>
    </div>
  );
}
