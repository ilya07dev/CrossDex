interface IProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  src:string;
}

export function Icon({ width = "auto", height = "auto", className, src }: IProps) {
  return (
    <img 
      width={width}
      height={height}
      className={className}
      src={src}
    />
  );
}
