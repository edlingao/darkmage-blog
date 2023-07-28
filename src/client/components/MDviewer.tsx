'use client';
import { MDXRemote } from "next-mdx-remote";


export function MDviewer({ content, data }: { content: unknown, data: unknown }) {
  return (
    <MDXRemote {...content} frontmatter={data}/>
  )
}
