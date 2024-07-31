import { cn } from "@/lib/cn";
import type { ComponentPropsWithAs } from "@/types";

export function Container<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ComponentPropsWithAs<T>) {
  const El = as || "div";

  return (
    <El
      className={cn(className, "max-w-[860px] w-full m-auto px-4")}
      {...props}
    />
  );
}
