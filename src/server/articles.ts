import { join } from "path";
import fs from 'fs';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';

export interface Article {
  content: string;
  data: {
    title: string;
    author: string;
    date?: string;
    tags: string[];
    url: string;
  },
}

const postsDir = join(process.cwd(), "src", "articles");

async function readMarkdownFile(filename: string, serialized: boolean): Promise<Article> {
  const fullPath = join(postsDir, filename);
  const fileContents: string = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  if(serialized) {
    const serializedContent = await serialize(content);
    return {
      content: serializedContent,
      data,
    };
  }
  return {
    content,
    data: { ...data,
      url: `${postsDir}/${filename}`,
    },
  };
}

export function getArticles(serialized = false) {
  const articles = fs.readdirSync(postsDir);
  const articleContents: Promise<Article>[] = articles.map((article) => (readMarkdownFile(article, serialized)) )

  return Promise.all(articleContents);
}
