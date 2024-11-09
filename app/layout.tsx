import Navbar from "@/components/common/navbar/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={` ${plusJakartaSans.className} antialiased  bg-white dark:bg-gray-800`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <Navbar />
          <main className="flex justify-center w-full ">
            <div className="w-full max-w-[1200px]">

          {children}
            </div>

          </main>
        </ThemeProvider>

      </body>
    </html>
  );
}
