import cn from "classnames";

export function BlackBlur({ open = true }: { open?: boolean }) {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-screen h-screen duration-300 bg-black z-[10000]",
        open ? "scale-y-[1] opacity-[0.5]" : "scale-y-[0] opacity-[0]"
      )}
    ></div>
  );
}
