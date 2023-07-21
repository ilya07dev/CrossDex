interface IProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  src:string;
  onError: React.ReactEventHandler<HTMLImageElement>;
}

export function Icon({ width = "auto", height = "auto", className, src, onError }: IProps) {
  return (
    <img 
      width={width}
      height={height}
      className={className}
      src={src}
      onError={(img) => onError(img)}
    />
  );
}
