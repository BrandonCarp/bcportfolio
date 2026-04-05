import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navigation/Navbar";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brandon Carpenter — Software Developer",
    template: "%s | Brandon Carpenter",
  },
  description:
    "Portfolio of Brandon Carpenter — end to end software developer skilled in frontend engineering, backend systems, API integrations, and modern database architecture.",
  metadataBase: new URL("https://your-portfolio-url.com"),
  alternates: {
    canonical: "https://your-portfolio-url.com",
  },
  openGraph: {
    title: "Brandon Carpenter — Software Developer",
    description:
      "Showcasing full‑stack development, database engineering, UI/UX design, system architecture, and modern web applications.",
    url: "https://your-portfolio-url.com",
    siteName: "Brandon Carpenter Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png", // update with your image
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "software developer",
    "full stack developer",
    "frontend engineer",
    "backend development",
    "UI/UX design",
    "React developer",
    "Next.js",
    "TypeScript",
    "database engineering",
    "system architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-main text-text-main">
        <div className="flex">

        <Navbar />
        {children}
        </div>
      </body>
    </html>
  );
}
