import Navbar from "@/components/common/navbar/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeExpenser | Tracker Expenses",
  description: "Track your expenses and manage your finances efficiently.",
};

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={` ${plusJakartaSans.className} antialiased  bg-white dark:bg-gray-800`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex justify-center w-full ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
