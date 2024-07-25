import "server-only";

import { desc, eq } from "drizzle-orm";
import { db } from "./db";
import { image } from "./db/schema";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("UnAuthorized");

  const images = await db
    .select()
    .from(image)
    .orderBy(desc(image.id))
    .where(eq(image.userId, user.userId));

  return images;
}
