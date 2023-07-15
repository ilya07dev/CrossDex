export function SwapIcon({
  className,
  width = 29,
  height = 23,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5.97368 21V6.26316C5.97368 3.90868 7.88236 2 10.2368 2V2C12.5913 2 14.5 3.90868 14.5 6.26316V16.7368C14.5 19.0913 16.4087 21 18.7632 21V21C21.1176 21 23.0263 19.0913 23.0263 16.7368V2M5.97368 21L10.9474 15.8846M5.97368 21L1 15.8846M23.0263 2L28 7.11538M23.0263 2L18.0526 7.11538"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
