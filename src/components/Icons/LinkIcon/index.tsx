import { Link } from "react-router-dom";

interface LinkIcon {
  to:string,
}

export function LinkIcon({to}:LinkIcon) {
  return (
    <Link to={to} target="_blank" >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="duration-500 hover:-translate-y-1"
      >
        <path
          d="M13 1H11C5.47715 1 1 5.47715 1 11V15C1 20.5228 5.47715 25 11 25H15C20.5228 25 25 20.5228 25 15V13"
          stroke="#FFF379"
          strokeWidth="2"
        />
        <path
          d="M11 15L25 1M25 1V8.82353M25 1H17.1765"
          stroke="#FFF379"
          strokeWidth="2"
        />
      </svg>
    </Link>
  );
}
