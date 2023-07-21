import { getArticles } from "@/server/articles";
import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function POST() {
  const mdArticles = await getArticles();
  const addedArticles = mdArticles.map(async (article) => {
    const { data } = article;
    const { title, tags, author, url } = data;

    const authorUser = await prisma.user.findUnique({
      where: {
        name: author,
      },
    });

    const postExists = await prisma.blogPost.upsert({
      where: {
        authorId_blogUrl: {
          authorId: authorUser?.id,
          blogUrl: url,
        },
      },
      update: {
        title,
        tags,
        authorId: authorUser?.id,
      },
      create: {
        title,
        blogUrl: url,
        tags,
        authorId: authorUser?.id,
      },
    });
    return postExists;
  });

  return NextResponse.json({
    addedArticles: await Promise.all(addedArticles),
  });
}
