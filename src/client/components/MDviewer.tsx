'use client';
import { MDXRemote } from "next-mdx-remote";


export function MDviewer({ content, data }: { content: string, data: { [key: string]: string } }) {
  return (
    <MDXRemote {...content} frontmatter={data}/>
  )
}
