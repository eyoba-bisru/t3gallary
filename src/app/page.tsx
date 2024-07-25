import { getMyImages } from "@/server/queries";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function GetImages() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div className="w-48" key={image.id}>
          <div className="flex flex-col items-center justify-center">
            <Image src={image.url} alt={image.name} width={500} height={500} />
            <div>{image.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="text-center text-3xl">Please Sign In Above</div>
      </SignedOut>
      <SignedIn>
        <GetImages />
      </SignedIn>
    </main>
  );
}
