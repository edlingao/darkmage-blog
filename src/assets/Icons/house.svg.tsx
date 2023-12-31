interface HomeIconProps {
  className?: string;
  fill?: string;
}

export default function HomeIcon({ className, fill }: HomeIconProps) {
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
        d="M11.094 1.56804C12.2014 0.65702 13.7986 0.657019 14.906 1.56803L24.6938 9.62048C25.5046 10.2875 25.9077 11.3298 25.7567 12.3688L23.8576 25.4316C23.6432 26.9062 22.3789 28 20.8888 28H5.11123C3.6211 28 2.35684 26.9062 2.14245 25.4316L0.243339 12.3688C0.0922895 11.3299 0.495376 10.2875 1.30616 9.62048L11.094 1.56804Z"
        className={fill || "fill-[#050505]"}
      />
      <rect
        x="11.7"
        y="20.16"
        width="2.6"
        height="6.72"
        rx="1"
        className={fill || "fill-[#FAFAFA]"}
      />
    </svg>
  );
}
