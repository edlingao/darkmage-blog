interface SearchIconProps {
  className?: string;
  fill?: string;
}

export function SearchIcon({ className, fill }: SearchIconProps) {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M28.0479 14.0423C28.0479 21.7977 21.7692 28.0847 14.024 28.0847C6.27874 28.0847 0 21.7977 0 14.0423C0 6.28697 6.27874 0 14.024 0C21.7692 0 28.0479 6.28697 28.0479 14.0423ZM3.11157 14.0423C3.11157 20.077 7.99721 24.969 14.024 24.969C20.0507 24.969 24.9364 20.077 24.9364 14.0423C24.9364 8.00769 20.0507 3.11565 14.024 3.11565C7.99721 3.11565 3.11157 8.00769 3.11157 14.0423Z"
        className={fill || "fill-[#050505]"}
      />
      <rect
        width="2.2453"
        height="11.2265"
        rx="1.12265"
        transform="matrix(0.706644 -0.70757 0.706644 0.70757 20.1945 24.0565)"
        className={fill || "fill-[#050505]"}
      />
    </svg>
  );
}
