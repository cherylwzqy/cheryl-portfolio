import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheryl | Multidisciplinary Design",
  description: "Interior, lighting, interaction, and production design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
