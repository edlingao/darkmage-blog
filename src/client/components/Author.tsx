'use client';

import Image from "next/image";

interface AuthorProps {
  username: string;
  text: string;
  image: string;
}

export function Author({image, username, text}: AuthorProps)  {
  return (
    <div className="flex flex-row text-text gap-2">
      <div className="avatar-container">
        <Image src={image} alt={username} className="avatar rounded-full" width={26} height={26}/>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xs text-text">{text}</span>
        <span className="text-xs text-accent">{username}</span>
      </div>
    </div>
  )
}
