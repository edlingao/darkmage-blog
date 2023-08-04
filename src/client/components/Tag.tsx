'use client';

interface TagProps {
  text: string;
  style: "primary" | "secondary" | "accent";
  onClick?: (tagName: string) => void;
}

export function Tag({text, style, onClick}: TagProps) {
  const handleClick = () => {
    onClick?.(text);
  };

  const bgStyle: 'bg-primary' | 'bg-secondary' | 'bg-accent' = `bg-${style}`

  return (
    <button
      className={`${bgStyle} text-text px-1 py-0 min-w-[110px] text-orbitron flex flex-row justify-center items-center gap-2 font-orbitron text-regular rounded`}
      onClick={ handleClick }
    >
      {text.toUpperCase()}
    </button>
  )
}
