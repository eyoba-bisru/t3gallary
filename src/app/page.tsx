import { db } from "@/server/db";
import { image } from "@/server/db/schema";
import { desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.select().from(image).orderBy(desc(image.id));

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
