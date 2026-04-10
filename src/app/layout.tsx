import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const baseUrl = process.env.VERCEL_URL
  ? new URL("https://www.thecodercollective.com")
  : new URL(`http://localhost:${process.env.PORT ?? "3000"}`);

export const metadata: Metadata = {
  metadataBase: baseUrl,
  icons: {
    icon: [{ url: "/images/CC-new.svg", type: "image/svg+xml" }],
  },
  title: "Coder Collective",
  description:
    "A network for senior software engineers to connect, refer, and advance their careers",
  openGraph: {
    title: "Coder Collective",
    description:
      "A network for senior software engineers to connect, refer, and advance their careers",
    url: "https://www.thecodercollective.com/",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex min-h-screen flex-col bg-gray-900">
          <Header />
          <main className="w-full flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
