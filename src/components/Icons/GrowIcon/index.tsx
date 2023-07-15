interface IProps {
  result: boolean;
  className?: string;
}
export function GrowIcon({ result, className }: IProps) {
  if (result) {
    return (
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M6.30287 0.70716L1.21211 5.79793C0.582143 6.42789 1.02831 7.50503 1.91921 7.50503L12.1007 7.50503C12.9916 7.50503 13.4378 6.42789 12.8079 5.79793L7.71708 0.707161C7.32656 0.316636 6.6934 0.316636 6.30287 0.70716Z"
          fill="#7BE9A5"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="13"
        height="8"
        viewBox="0 0 13 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M7.21211 7.30285L12.3029 2.21208C12.9328 1.58212 12.4867 0.504978 11.5958 0.504978L1.41424 0.504978C0.523337 0.504978 0.0771683 1.58212 0.707133 2.21208L5.7979 7.30285C6.18842 7.69337 6.82159 7.69337 7.21211 7.30285Z"
          fill="#FF3F3F"
        />
      </svg>
    );
  }
}
