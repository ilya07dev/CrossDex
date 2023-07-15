export function ApprovalsIcon({
  className,
  width = 24,
  height = 24,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22.892 10.4623C23.2477 12.9822 22.7187 15.5476 21.3951 17.7212C20.0715 19.8948 18.0351 21.5422 15.633 22.3827C13.2309 23.2232 10.6117 23.2049 8.22165 22.3307C5.83158 21.4566 3.81855 19.7808 2.52555 17.5888C1.23255 15.3968 0.739583 12.8244 1.13065 10.3097C1.52172 7.79499 2.77262 5.4937 4.67021 3.79791C6.56781 2.10213 8.99469 1.11677 11.5373 1.00973C14.08 0.902697 16.5811 1.6806 18.6145 3.21091"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 11L11.1598 14.4665C11.5307 14.7756 12.0693 14.7756 12.4402 14.4665L19 9"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
