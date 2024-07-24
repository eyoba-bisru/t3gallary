import { db } from "@/server/db";
import { posts } from "@/server/db/schema";

const mockData = [
  "https://utfs.io/f/67f77a46-7a4d-43ac-87fc-5f1348ed09da-6yxj9j.png",
  "https://utfs.io/f/67f77a46-7a4d-43ac-87fc-5f1348ed09da-6yxj9j.png",
  "https://utfs.io/f/67f77a46-7a4d-43ac-87fc-5f1348ed09da-6yxj9j.png",
  "https://utfs.io/f/67f77a46-7a4d-43ac-87fc-5f1348ed09da-6yxj9j.png",
];

export default async function HomePage() {
  const ourPosts = await db.select().from(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {ourPosts.map((post) => {
          return <div key={post.id}>{post.name}</div>;
        })}
        {mockData.map((url) => (
          <div className="w-48" key={url}>
            <img src={url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
