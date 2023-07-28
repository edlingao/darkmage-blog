import { join } from "path";
import fs from 'fs';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';
import { prisma } from "./db";

interface ArticleMetaData {
  title: string;
  author: {
    username: string;
    image: string;
  };
  date?: string;
  tags: string[];
  url: string;
  hero_image: string;
  second_image: string;
  third_image: string;
  fourth_image: string;
  id: string;
}

export interface Article {
  content: string;
  data: ArticleMetaData,
}

const postsDir = join(process.cwd(), "src", "articles");

async function readMarkdownFile(filename: string, serialized: boolean): Promise<Article> {
  const fullPath = join(postsDir, filename);
  const fileContents: string = fs.readFileSync(fullPath, "utf8");
  const { content, data }: Article = matter(fileContents);
  const article = await prisma.blogPost.findUnique({
    where: {
      title: data.title ,
    },
  });

  const author = await prisma.user.findUnique({
    where: {
      name: data.author.username,
    },
  });

  const articleData = {
    ...data,
    url: `${postsDir}/${filename}`,
    id: article?.id,
    author: {
      username: author?.name,
      image: author?.image,
    },
  };

  if(serialized) {
    const serializedContent = await serialize(content);
    return {
      content: serializedContent,
      data: articleData,
    };
  }
  return {
    content,
    data: articleData,
  };
}

export function getArticles(serialized = false) {
  const articles = fs.readdirSync(postsDir);
  const articleContents: Promise<Article>[] = articles.map((article) => (readMarkdownFile(article, serialized)) )

  return Promise.all(articleContents);
}

export async function getArticleBySlug(slug: string, serialized = false) {
  const articles = await getArticles(serialized);
  const articleDB = await prisma.blogPost.findUnique({
    where: {
      title: slug,
    },
  });
  return {
    ...articles.find(
        (article) => article.data.title === slug
      ),
    id: articleDB?.id,
  }
}
