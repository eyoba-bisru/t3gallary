import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const TopNav = () => {
  return (
    <div className="flex items-center justify-between border-b border-black">
      <h1 className="p-4 text-3xl">T3 Gallery</h1>
      <p>SignIn</p>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="p-4">
        <TopNav />
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
