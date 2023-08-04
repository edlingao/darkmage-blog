/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import { MDXRemote } from "next-mdx-remote";


export function MDviewer({ content, data }: any) {
  return (
    <MDXRemote {...content} frontmatter={data}/>
  )
}
