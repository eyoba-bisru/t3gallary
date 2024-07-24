import "@/styles/globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const TopNav = () => {
  return (
    <div className="flex items-center justify-between border-b border-black p-4">
      <h1 className="text-3xl">T3 Gallery</h1>

      <SignedOut>
        <div className="text-3xl">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="text-3xl">
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="p-4">
          <TopNav />
          <div className="p-4">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
