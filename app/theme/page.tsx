import { ThemePreview } from "$components/theme-preview";
import { notFound } from "next/navigation";

export default function ThemePreviewPage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return <ThemePreview />;
}
