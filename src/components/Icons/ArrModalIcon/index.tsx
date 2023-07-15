export function ArrModalIcon({
  className,
  width = 25,
  height = 13,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.2879 1.14389L13.5583 10.8736C12.7772 11.6546 11.5109 11.6546 10.7298 10.8736L1.00016 1.14389"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
