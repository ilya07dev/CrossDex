import cn from "classnames";

interface IProps {
  className?: string;
}

export function TestBlock({ className }: IProps) {
  return (
    <div
      className={cn(
        "h-[268px] sm:h-auto sm:flex-1 bg-c-primary rounded-r-primary",
        className
      )}
    ></div>
  );
}
