import { cn } from "@/lib/utils";
import Image from "next/image";

export const CursorGroup: React.FC<{
  badgeSrc: string;
  cursorSrc: string;
  cursorClassName?: string;
}> = ({ badgeSrc, cursorSrc, cursorClassName }) => (
  <div className="flex flex-col gap-2 relative">
    <div className="">
      <Image
        src={badgeSrc}
        alt={badgeSrc}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block"
      />
    </div>
    <div className={cn("absolute", cursorClassName)}>
      <Image
        src={cursorSrc}
        alt={cursorSrc}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block"
      />
    </div>
  </div>
);
