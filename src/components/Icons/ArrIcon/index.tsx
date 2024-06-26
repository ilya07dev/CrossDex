export function ArrIcon({
  className,
  width = 14,
  height = 25,
  onClick,
}: {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M12.144 23.2878L2.41428 13.5581C1.63323 12.7771 1.63323 11.5108 2.41428 10.7297L12.144 1.00003"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
