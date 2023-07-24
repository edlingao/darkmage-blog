
interface ArticlePageProps {
  params: {
    id: string;
  },
}

export default function ArticlePage({params}: ArticlePageProps) {
  
  // get id from url server side
  return (
    <div>
      <h1>Article Page {params.id}</h1>
    </div>
  );
}