import { Toaster } from "$shadcn/ui/sonner";
import { ThemeProvider } from "./theme-provider";

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Toaster position="bottom-center" />
      {children}
    </ThemeProvider>
  );
}

export * from "./theme-provider";
