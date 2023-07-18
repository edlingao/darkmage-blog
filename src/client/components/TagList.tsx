'use client';

import tagList from "@/lib/tagList";
import { Tag } from "./Tag";
import { useSearchParams, useRouter } from "next/navigation";

export function TagList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const selectedTag = searchParams.get('tag');

  const handleTagClick = (tagName: string) => {
    router.push(`/?tag=${tagName}`);
  };
  return (
    <div className="flex justify-items-start items-center w-full gap-2 overflow-x-auto min-h-[30px]">
      
      {tagList.map((tag) => (
        <Tag text={tag} key={tag} style={selectedTag === tag ? "primary" : "secondary"} onClick={handleTagClick} />
      ))}
    </div>
  );
}
