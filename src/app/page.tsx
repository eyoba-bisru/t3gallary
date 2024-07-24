import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div className="w-48" key={image.id}>
            <div className="flex flex-col items-center justify-center">
              <img src={image.url} alt={image.name} />
              <div>{image.name}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
