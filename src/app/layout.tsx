import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resource Booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background  min-h-screen antialiased`}>
        <section className=" mx-auto lg:max-w-display-width ">
          <Providers>{children}</Providers>
        </section>
      </body>
    </html>
  );
}
