import { cn } from "@/lib/utils";

type IconProps = {
  src: string;
  className?: string;
};

function Icon({ src, className }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block shrink-0 bg-current text-[#1E3C8C]",
        className,
      )}
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

export { Icon };
