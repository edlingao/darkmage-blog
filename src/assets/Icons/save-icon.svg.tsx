interface SaveIconProps {
  className?: string;
  fill?: string;
}

export function SaveIcon({ className, fill }: SaveIconProps) {
  return (
    <svg
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 2C0 0.89543 0.895431 0 2 0H24C25.1046 0 26 0.895431 26 2V23.8137C26 25.4951 24.0513 26.4261 22.7433 25.3696L14.2567 18.515C13.5235 17.9229 12.4765 17.9228 11.7433 18.515L3.25667 25.3696C1.94867 26.4261 0 25.4951 0 23.8137V17.5V2Z"
        className={fill || "fill-[#FAFAFA]"}
      />
    </svg>
  );
}
