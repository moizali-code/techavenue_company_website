import { cn } from "@/lib/utils";
import type { RichTextProps } from "@/types/shared/rich-text";

function RichText({ html, className }: RichTextProps) {
  return (
    <div
      className={cn(
        "font-poppins w-full text-[15px] leading-relaxed text-[#444651] lg:text-[16px]",
        "[&>*+*]:mt-5",
        "[&_h2]:mt-8 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-[#191C1E] lg:[&_h2]:text-[24px]",
        "[&_h3]:mt-7 [&_h3]:text-[17px] [&_h3]:font-semibold [&_h3]:text-[#191C1E] lg:[&_h3]:text-[19px]",
        "[&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc",
        "[&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5 [&_ol>li]:list-decimal",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-[#1E3C8C] [&_blockquote]:pl-4 [&_blockquote]:text-[#191C1E] [&_blockquote]:italic",
        "[&_strong]:font-semibold [&_strong]:text-[#191C1E]",
        "[&_a]:text-brand-link [&_a]:underline [&_a]:underline-offset-2",
        "[&_img]:w-full [&_img]:rounded-[12px]",
        "[&_pre]:overflow-x-auto [&_pre]:rounded-[12px] [&_pre]:bg-[#F8F8F8] [&_pre]:p-4",
        "[&_table]:w-full [&_table]:text-left",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export { RichText };
