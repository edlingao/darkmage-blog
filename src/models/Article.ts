import { BaseModel } from "./BaseModel";
import { join } from "path";
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import matter from "gray-matter";
import sql from "@/server/db";
import UserModel from "./User";

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

export interface ArticleData {
  content: string;
  data: ArticleMetaData,
}

type ArticleModelProperties = {
  id: number;
  title: string;
  blogUrl: string;
  tags: string[];
  content: string;
  authorId: number;
};

class Article extends BaseModel<ArticleModelProperties> {
  postsDir: string;

  constructor() {
    super("BlogPost");
    this.postsDir = join(process.cwd(), "src", "articles");
  }

  async getByTitle(title: string) {
    const [article] = await sql`
      SELECT * FROM ${ sql(this.modelName) }
      WHERE title = ${ title }
    ` as unknown as [ArticleModelProperties];
    return article;
  }

  async readMarkdownFile(filename: string, serialized: boolean): Promise<ArticleData> {
    const fullPath = join(this.postsDir, filename);
    const fileContents: string = fs.readFileSync(fullPath, "utf8");
    const { content, data }: ArticleData = matter(fileContents) as unknown as ArticleData;
    const article = await this.getByTitle(data.title);
    const author = await UserModel.getByName(data.author.username);

    await this.createOrUpdate({
      title: data.title,
      tags: data.tags,
      content,
      authorId: author?.id,
    });


    const articleData = {
      ...data,
      url: `${this.postsDir}/${filename}`,
      id: article?.id,
      author: {
        username: author?.name,
        image: author?.image,
      },
    };

    if(serialized) {
      const serializedContent = await serialize(content);
      return {
        content: serializedContent as unknown as string,
        data: articleData as unknown as ArticleMetaData,
      };
    }
    return {
      content,
      data: articleData as unknown as ArticleMetaData,
    };
  }


  getArticles(serialized = false) {
    const articles = fs.readdirSync(this.postsDir);
    const articleContents: Promise<ArticleData>[] = articles.map((article) => (this.readMarkdownFile(article, serialized)) )

    return Promise.all(articleContents);
  }

  async getArticleBySlug(slug: string, serialized = false) {
    const articles = await this.getArticles(serialized);
    const articleDB = await this.getByTitle(slug);

    return {
      ...articles.find(
          (article) => article.data.title === slug
        ),
      id: articleDB?.id,
    }
  }

}
const ArticleModel = new Article();

export default ArticleModel;
