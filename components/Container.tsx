import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type: "internal" | "external";
};
export default function Container({
  children,
  className,
  style,
  type = "external",
}: Props) {
  switch (type) {
    case "external":
      return (
        <div
          className={cn("px-4 sm:px-6 max-w-318 mx-auto", className)}
          style={style}
        >
          {children}
        </div>
      );
    case "internal":
      return (
        <div className={className} style={style}>
          <div className={"px-4 sm:px-6 max-w-318 mx-auto"}>{children}</div>
        </div>
      );
    default:
      break;
  }
}
