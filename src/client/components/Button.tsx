'use client';

import { DiscordSmall } from "@/assets/Icons/discord-logo-small.svg";

interface ButtonProps {
  text: string;
  icon: "none" | "google" | "github" | "discord";
  style: "primary" | "secondary" | "accent";
  onClick?: () => void;
}

export function Button({
  text,
  icon = "none",
  onClick,
  style = "secondary",
}: ButtonProps) {
  const IconComponent = icon === "discord" ? <DiscordSmall /> : null;
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-${style} text-orbitron text-text flex flex-row justify-center items-center gap-2 p-2 font-orbitron text-2xl rounded-md`}
    >
      {IconComponent}
      {text}
    </button>
  );
}
