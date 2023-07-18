export function CloseIcon({
  className = "text-[#9B9898]",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M1.5 1L12.5 12M23.5 23L12.5 12M12.5 12L23.5 1M12.5 12L1.5 23"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
