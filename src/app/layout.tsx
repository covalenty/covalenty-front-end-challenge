import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Covalenty Front End Challenge",
  description: "Hiring test for front-end position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
