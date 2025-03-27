import type { Metadata } from "next";
import "./globals.css";
import { Chakra_Petch } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const chakraPetch = Chakra_Petch({
  subsets: ["latin", "thai"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Parliamentdle - A daily game on Thai politics",
  description:
    "Parliamentdle is a set of daily games about Thai politics, including the game of guessing the political party who made the promise, and the game of guessing the income of Thai politicians. It created based on the open-data provided by WeVis.",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏛️</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakraPetch.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
