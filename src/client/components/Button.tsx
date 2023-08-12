'use client';

import { DiscordSmall } from "@/assets/Icons/discord-logo-small.svg";

interface ButtonProps {
  text: string;
  icon?: "none" | "google" | "github" | "discord";
  style?: "primary" | "secondary" | "accent";
  fontSize?: "small" | "medium" | "large";
  rounded?: "none" | "small" | "medium" | "large" | "full";
  className?: string;
  onClick?: () => void;
}

const roundedDictionary = {
  none: "",
  small: "rounded-sm",
  medium: "rounded-md",
  large: "rounded-lg",
  full: "rounded-full",
};

const textDictionary = {
  small: "text-xs",
  medium: "text-md",
  large: "text-lg",
};

export function Button({
  text,
  icon = "none",
  onClick,
  style = "secondary",
  fontSize = "medium",
  rounded = "medium",
  className = "",
}: ButtonProps) {
  const IconComponent = icon === "discord" ? <DiscordSmall /> : null;
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} bg-${style} text-orbitron text-text flex flex-row justify-center items-center gap-2 p-2 font-orbitron ${textDictionary[fontSize]} ${roundedDictionary[rounded]}`}
    >
      {IconComponent}
      {text}
    </button>
  );
}
