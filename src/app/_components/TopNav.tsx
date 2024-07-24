"use client";

import { UploadButton } from "@/utils/uploadthing";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between border-b border-black p-4">
      <h1 className="text-3xl">T3 Gallery</h1>

      <SignedOut>
        <div className="text-3xl">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            router.refresh();
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
        <UserButton />
      </SignedIn>
    </div>
  );
}
