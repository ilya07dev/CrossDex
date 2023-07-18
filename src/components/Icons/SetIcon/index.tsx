export function SetIcon({
  className = "text-[#9B9898]",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M25 23L1 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 13L1 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 3L1 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="2.20007" width="9.6" height="6" rx="3" fill="currentColor" />
      <rect
        x="14.2001"
        y="10"
        width="9.6"
        height="6"
        rx="3"
        fill="currentColor"
      />
      <rect
        x="2.20007"
        y="20"
        width="9.6"
        height="6"
        rx="3"
        fill="currentColor"
      />
    </svg>
  );
}
