'use client';

import tagList from "@/lib/tagList";
import { Tag } from "./Tag";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function TagList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const selectedTag = searchParams.get('tag') || tagList[0];

  const handleTagClick = (tagName: string) => {
    router.push(`${pathname}?tag=${tagName}`);
  };
  return (
    <div className="flex justify-items-start items-center w-full md:max-w-md md:mx-auto gap-2 overflow-x-auto min-h-[30px] mb-5">
      {tagList.map((tag) => (
        <Tag text={tag} key={tag} style={selectedTag === tag ? "primary" : "secondary"} onClick={handleTagClick} />
      ))}
    </div>
  );
}
