import { MDviewer } from "@/client/components/MDviewer";
import { type Article, getArticles } from "@/server/articles";
import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const articles: Article[] = await getArticles(true);

  return (
    <div>
      {articles.map((contentData) => (
        <MDviewer key={contentData.data.title} {...contentData} />
      ))}
    </div>
  )
}
