import { ArticleCard } from "@/client/components/ArticleCard";
import { type Article, getArticles } from "@/server/articles";

export default async function Page() {
  const articles: Article[] = await getArticles(true);

  return (
    <div className="relative w-full h-full">
      {articles.map((contentData, index) => contentData.content && contentData.data ? (
        <ArticleCard key={contentData.data.title} article={contentData} author={contentData.data.author}/>
      ): null)}
    </div>
  )
}
