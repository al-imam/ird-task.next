import { ThemeProvider } from "./theme-provider";

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export * from "./theme-provider";
