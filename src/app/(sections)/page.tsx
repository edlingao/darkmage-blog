import { ArticleCard } from "@/client/components/ArticleCard";
import { type Article, getArticles } from "@/server/articles";

export default async function Page() {
  const articles: Article[] = await getArticles(true);


  return (
    <div>
      {articles.map((contentData) => contentData.content && contentData.data ? (
        <ArticleCard key={contentData.data.title} article={contentData} author={contentData.data.author} />
      ): null)}
    </div>
  )
}
