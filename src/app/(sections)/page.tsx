import { ArticleCard } from "@/client/components/ArticleCard";
import ArticleModel, { type ArticleData } from "@/models/Article";

export default async function Page() {
  const articles: ArticleData[] = await ArticleModel.getArticles(true);

  return (
    <div>
      {articles.map((contentData) => contentData.content && contentData.data ? (
        <ArticleCard key={contentData.data.title} article={contentData} author={contentData.data.author} />
      ): null)}
    </div>
  )
}
