import { type NextRequest, NextResponse } from "next/server";

import { type Article, getArticles } from "@/server/articles";
import { prisma } from "@/server/db";

interface BlogBody {
  title: string;
  blogUrl: string;
  tags: string[];
  author: string;
}

export async function POST(req: NextRequest) {
  const { title, blogUrl, tags, author} = await req.json() as BlogBody;

  const postExists = await prisma.blogPost.upsert({
    where: {
      title: title,
    },
    update: {},
    create: {
      title,
      blogUrl,
      tags,
      authorId: author,
    },
  });

  return NextResponse.json({
    postExists,
  });
}

export async function GET() {
  const articles: Article[] = await getArticles();
  return NextResponse.json({
    message: "Articles successfully fetched",
    articles,
  });
}
