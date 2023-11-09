import DesignerContextProvider from "@/components/context/DesignerContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OVASITE",
  description: "Converts data into actionable insights, enabling informed decisions that fuel progress.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={raleway.className}>
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
