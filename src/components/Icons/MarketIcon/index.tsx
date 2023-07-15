export function MarketIcon({
  className,
  width = 23,
  height = 26,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.75 7.31579V7.31579C19.6495 7.31579 22 9.6663 22 12.5658V16.1579C22 21.0413 18.0413 25 13.1579 25H9.8421C4.95874 25 1 21.0413 1 16.1579V12.5658C1 9.66629 3.35051 7.31579 6.25 7.31579V7.31579M16.75 7.31579V6.25C16.75 3.3505 14.3995 1 11.5 1V1C8.60051 1 6.25 3.3505 6.25 6.25V7.31579M16.75 7.31579H6.25M6.25 11.1053V11.1053C6.25 13.8958 8.51214 16.1579 11.3026 16.1579H11.6974C14.4879 16.1579 16.75 13.8958 16.75 11.1053V11.1053"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
