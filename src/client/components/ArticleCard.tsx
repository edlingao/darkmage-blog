'use client';

import type { Article } from "@/server/articles";
import { MDviewer } from "@/client/components/MDviewer";
import { Author } from "./Author";

import '../../styles/Articles.css'

interface ArticleCardProps {
  article: Article;
  author: {
    username: string;
    image: string;
  };
}

export function ArticleCard({ article, author}: ArticleCardProps) {
  const {data, content} = article;
  
  return (
    <div className="rounded-xl overflow-hidden">
      <header className='h-[186px] flex flex-col justify-end items-start relative p-3'>
        <span className="w-full h-full left-0 top-0 absolute bg-gradient-to-t from-secondary from-50% z-[-1]"></span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.hero_image} alt={data.title} className="w-full absolute top-0 left-0 z-[-2]"/>
        <h2 className="text-3xl font-bold text-text z-20 mt-auto mb-3">{article?.data.title}</h2>
        <Author {...author} text="Publicado por"/>
      </header>
      <article className="p-4 bg-text text-background">
        <MDviewer data={article?.data} content={article?.content} />
      </article>
    </div>
  )
}
