export function LockIcon({
  className,
  width = 219,
  height = 247,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 219 247"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M159.25 69.8496V69.8496C186.726 69.8496 209 92.1234 209 119.6V183.472C209 213.271 184.843 237.429 155.044 237.429H63.9564C34.1571 237.429 10 213.271 10 183.472V119.6C10 92.1235 32.2738 69.8496 59.75 69.8496V69.8496M159.25 69.8496V59.75C159.25 32.2738 136.976 10 109.5 10V10C82.0238 10 59.75 32.2738 59.75 59.75V69.8496M159.25 69.8496H109.5H59.75"
        stroke="#FFF379"
        strokeWidth="19"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M118.83 165.732C118.83 165.333 119.068 164.974 119.429 164.805C127.445 161.063 133 152.93 133 143.5C133 130.521 122.479 120 109.5 120C96.5213 120 86 130.521 86 143.5C86 152.623 91.1982 160.531 98.7941 164.425C99.1366 164.601 99.3585 164.95 99.3585 165.335V182.17C99.3585 186.036 102.492 189.17 106.358 189.17H111.83C115.696 189.17 118.83 186.036 118.83 182.17V165.732Z"
        fill="#FFF379"
      />
    </svg>
  );
}
