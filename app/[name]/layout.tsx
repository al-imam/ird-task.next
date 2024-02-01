import { ScrollArea } from "$shadcn/ui/scroll-area";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea scrollBarClassName="h-[calc(100%-var(--padding-edge,0px))]">
      {children} <div className="h-[--padding-edge]" />
    </ScrollArea>
  );
}
