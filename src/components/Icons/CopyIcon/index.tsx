export function CopyIcon({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M4.75 4C4.75 2.34315 6.09315 1 7.75 1H10C11.6569 1 13 2.34315 13 4V9.25C13 10.9069 11.6569 12.25 10 12.25H7.75C6.09315 12.25 4.75 10.9069 4.75 9.25V4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M1 7.75C1 6.09315 2.34315 4.75 4 4.75H6.25C7.90685 4.75 9.25 6.09315 9.25 7.75V13C9.25 14.6569 7.90685 16 6.25 16H4C2.34315 16 1 14.6569 1 13V7.75Z"
        fill="#37383D"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
