import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  dark?: boolean;
};

export function BrandMark({ className, dark = false }: BrandMarkProps) {
  const bg = dark ? "#000000" : "#f7f7f7";
  const fill = dark ? "#ffffff" : "#1c1c1c";

  return (
    <svg
      viewBox="0 0 145 130"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full", className)}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="145" height="130" fill={bg} />
      <rect x="15" y="10" width="58" height="14" fill={fill} />
      <rect x="15" y="24" width="14" height="31" fill={fill} />
      <rect x="15" y="55" width="58" height="14" fill={fill} />
      <rect x="59" y="69" width="14" height="37" fill={fill} />
      <rect x="15" y="106" width="58" height="14" fill={fill} />
      <rect x="15" y="75" width="14" height="35" fill={fill} />
      <rect x="73" y="10" width="14" height="110" fill="#fa651e" />
      <rect x="87" y="10" width="43" height="14" fill="#fa651e" />
      <rect x="116" y="24" width="14" height="31" fill="#fa651e" />
      <rect x="87" y="55" width="43" height="14" fill="#fa651e" />
      <rect x="116" y="69" width="14" height="38" fill="#fa651e" />
      <rect x="87" y="106" width="43" height="14" fill="#fa651e" />
    </svg>
  );
}
